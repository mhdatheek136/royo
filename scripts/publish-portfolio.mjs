import crypto from 'crypto'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const sourceRoot = path.join(rootDir, 'ai-images', 'project-library-web')
const publicRoot = path.join(rootDir, 'public', 'portfolio')
const dataPath = path.join(rootDir, 'data', 'portfolio.generated.json')
const coverSelectionsPath = path.join(rootDir, 'ai-images', 'portfolio-cover-selections.json')

const cityProvinces = {
  Ampara: 'eastern',
  Batticaloa: 'eastern',
  Colombo: 'western',
  Galle: 'southern',
  Jaffna: 'northern',
  Kandy: 'central',
  Kegalle: 'sabaragamuwa',
  Kilinochchi: 'northern',
  Kuliyapitiya: 'north-western',
  Kurunegala: 'north-western',
}

const ignoredFolders = new Set(['Unassigned City Review', 'General Projects'])
const webpExtension = '.webp'

function loadCoverSelections() {
  if (!fs.existsSync(coverSelectionsPath)) return { cities: {}, projects: {} }

  try {
    return JSON.parse(fs.readFileSync(coverSelectionsPath, 'utf8'))
  } catch (error) {
    console.warn(`Ignoring invalid cover selections manifest: ${error instanceof Error ? error.message : String(error)}`)
    return { cities: {}, projects: {} }
  }
}

const coverSelections = loadCoverSelections()

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true })
}

function resetDir(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true })
  }
  ensureDir(dirPath)
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

function listDirectories(dirPath) {
  if (!fs.existsSync(dirPath)) return []
  return fs
    .readdirSync(dirPath, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name)
    .sort((a, b) => a.localeCompare(b))
}

function listImages(dirPath) {
  if (!fs.existsSync(dirPath)) return []
  return fs
    .readdirSync(dirPath, { withFileTypes: true })
    .filter(entry => entry.isFile() && path.extname(entry.name).toLowerCase() === webpExtension)
    .map(entry => entry.name)
    .sort((a, b) => a.localeCompare(b))
}

function copyTree(sourceDir, targetDir) {
  ensureDir(targetDir)
  for (const entry of fs.readdirSync(sourceDir, { withFileTypes: true })) {
    if (ignoredFolders.has(entry.name)) continue
    const sourcePath = path.join(sourceDir, entry.name)
    const targetPath = path.join(targetDir, entry.name)
    if (entry.isDirectory()) {
      copyTree(sourcePath, targetPath)
    } else if (entry.isFile() && path.extname(entry.name).toLowerCase() === webpExtension) {
      fs.copyFileSync(sourcePath, targetPath)
    }
  }
}

function fileHash(filePath) {
  return crypto.createHash('sha1').update(fs.readFileSync(filePath)).digest('hex')
}

function dedupeImages(dirPath) {
  const seen = new Set()
  return listImages(dirPath).filter(fileName => {
    const hash = fileHash(path.join(dirPath, fileName))
    if (seen.has(hash)) return false
    seen.add(hash)
    return true
  })
}

function toImagePair(relativePath) {
  const normalized = relativePath.split(path.sep).join('/')
  return {
    thumb: `/portfolio/thumb/${normalized}`,
    large: `/portfolio/large/${normalized}`,
  }
}

function selectCoverImage(scope, slug, images) {
  const selectedPath = coverSelections?.[scope]?.[slug]?.selected
  if (!selectedPath) return images[0]

  const normalized = selectedPath.split(path.sep).join('/')
  return images.find(image => image.thumb === `/portfolio/thumb/${normalized}`) || images[0]
}

function stableArea(slug) {
  const number = Number.parseInt(crypto.createHash('sha1').update(slug).digest('hex').slice(0, 8), 16)
  const sqft = 1800 + (number % 43) * 250
  return `${sqft.toLocaleString('en-US')} sqft`
}

function descriptionFor(city, category, projectGroup) {
  const subject = projectGroup || category
  return `${subject} in ${city}, presented as part of ROYO's interior design and specialist finishing portfolio.`
}

function createProject(city, category, projectGroup, relativeImages) {
  const title = projectGroup ? `${city} ${projectGroup}` : `${city} ${category}`
  const slug = slugify(title)
  const images = relativeImages.map(toImagePair)
  return {
    slug,
    title,
    city,
    province: cityProvinces[city],
    category,
    projectGroup,
    area: stableArea(slug),
    description: descriptionFor(city, category, projectGroup),
    coverImage: selectCoverImage('projects', slug, images),
    images,
  }
}

function buildPortfolioData() {
  const thumbRoot = path.join(publicRoot, 'thumb')
  const cities = []
  const projects = []

  for (const city of listDirectories(thumbRoot)) {
    if (!cityProvinces[city]) continue

    const cityDir = path.join(thumbRoot, city)
    const gallery = dedupeImages(cityDir).map(fileName => toImagePair(path.join(city, fileName)))
    const cityProjects = []

    for (const category of listDirectories(cityDir)) {
      const categoryDir = path.join(cityDir, category)
      const directImages = dedupeImages(categoryDir)
      if (directImages.length > 0) {
        const project = createProject(city, category, null, directImages.map(fileName => path.join(city, category, fileName)))
        projects.push(project)
        cityProjects.push(project.slug)
      }

      for (const projectGroup of listDirectories(categoryDir)) {
        const groupDir = path.join(categoryDir, projectGroup)
        const groupImages = dedupeImages(groupDir)
        if (groupImages.length === 0) continue
        const project = createProject(
          city,
          category,
          projectGroup,
          groupImages.map(fileName => path.join(city, category, projectGroup, fileName)),
        )
        projects.push(project)
        cityProjects.push(project.slug)
      }
    }

    const slug = slugify(city)
    cities.push({
      slug,
      name: city,
      province: cityProvinces[city],
      coverImage: selectCoverImage('cities', slug, gallery),
      gallery,
      projects: cityProjects,
    })
  }

  return {
    generatedAt: new Date().toISOString(),
    cities,
    projects,
  }
}

function main() {
  if (!fs.existsSync(sourceRoot)) {
    throw new Error(`Web-ready portfolio source not found: ${sourceRoot}`)
  }

  resetDir(publicRoot)
  copyTree(path.join(sourceRoot, 'thumb'), path.join(publicRoot, 'thumb'))
  copyTree(path.join(sourceRoot, 'large'), path.join(publicRoot, 'large'))

  const data = buildPortfolioData()
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8')

  console.log(`Published ${data.projects.length} portfolio projects across ${data.cities.length} cities.`)
  console.log(`Assets: ${publicRoot}`)
  console.log(`Metadata: ${dataPath}`)
}

main()
