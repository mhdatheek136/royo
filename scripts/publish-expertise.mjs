import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const sourceRoot = path.join(rootDir, 'ai-images', 'project-library-web')
const publicRoot = path.join(rootDir, 'public', 'expertise')
const dataPath = path.join(rootDir, 'data', 'expertise.generated.json')
const coverSelectionsPath = path.join(rootDir, 'ai-images', 'expertise-cover-selections.json')
const exclusionsPath = path.join(rootDir, 'data', 'expertise.exclusions.json')

const services = [
  {
    slug: 'gypsum-works',
    title: 'Gypsum Works',
    sourceFolders: ['Ceiling Works', 'Wall Finishes'],
    description: 'Precision gypsum craftsmanship for sculpted ceilings, refined wall detailing, and architectural finishes that give interiors a lasting sense of character.',
    isSignature: true,
  },
  {
    slug: 'ceiling-works',
    title: 'Ceiling Works',
    sourceFolders: ['Ceiling Works'],
    description: 'Layered ceiling compositions, feature details, and carefully finished overhead elements shaped around proportion, lighting, and spatial rhythm.',
    isSignature: false,
  },
  {
    slug: 'wall-finishes',
    title: 'Wall Finishes',
    sourceFolders: ['Wall Finishes'],
    description: 'Feature walls, framed panels, sculptural surfaces, and refined finishing details that turn plain walls into intentional architectural moments.',
    isSignature: false,
  },
  {
    slug: 'pantry-interiors',
    title: 'Pantry Interiors',
    sourceFolders: ['Pantry Interiors'],
    description: 'Practical, polished pantry interiors with thoughtful storage, clean material coordination, and a calm visual finish suited to everyday use.',
    isSignature: false,
  },
  {
    slug: 'roofing-metal-welding',
    title: 'Roofing & Metal Welding',
    sourceFolders: ['Roofing and Metal Welding'],
    description: 'Roofing, structural metalwork, and welding solutions executed with durability, alignment, and dependable real-world construction logic.',
    isSignature: false,
  },
]

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true })
}

function resetDir(dirPath) {
  if (fs.existsSync(dirPath)) fs.rmSync(dirPath, { recursive: true, force: true })
  ensureDir(dirPath)
}

function listWebpFiles(dirPath) {
  if (!fs.existsSync(dirPath)) return []
  return fs
    .readdirSync(dirPath, { withFileTypes: true })
    .filter(entry => entry.isFile() && path.extname(entry.name).toLowerCase() === '.webp')
    .map(entry => entry.name)
    .sort((a, b) => a.localeCompare(b))
}

function loadCoverSelections() {
  if (!fs.existsSync(coverSelectionsPath)) return {}
  try {
    return JSON.parse(fs.readFileSync(coverSelectionsPath, 'utf8')).services || {}
  } catch (error) {
    console.warn(`Ignoring invalid expertise cover selections: ${error instanceof Error ? error.message : String(error)}`)
    return {}
  }
}

function loadExclusions() {
  if (!fs.existsSync(exclusionsPath)) return new Set()
  try {
    const data = JSON.parse(fs.readFileSync(exclusionsPath, 'utf8'))
    return new Set(data.excluded || [])
  } catch (error) {
    console.warn(`Ignoring invalid expertise exclusions: ${error instanceof Error ? error.message : String(error)}`)
    return new Set()
  }
}

function toImagePair(folder, fileName) {
  const relativePath = `${folder}/${fileName}`
  return {
    thumb: `/expertise/thumb/${relativePath}`,
    large: `/expertise/large/${relativePath}`,
  }
}

function copySourceFolders() {
  const exclusions = loadExclusions()
  for (const variant of ['thumb', 'large']) {
    for (const service of services.filter(item => !item.isSignature)) {
      const folder = service.sourceFolders[0]
      const sourceDir = path.join(sourceRoot, variant, 'Unassigned City Review', folder)
      const targetDir = path.join(publicRoot, variant, folder)
      ensureDir(targetDir)
      for (const fileName of listWebpFiles(sourceDir)) {
        if (exclusions.has(`${folder}/${fileName}`)) continue
        fs.copyFileSync(path.join(sourceDir, fileName), path.join(targetDir, fileName))
      }
    }
  }
}

function buildData() {
  const selections = loadCoverSelections()
  return services.map(service => {
    const images = service.sourceFolders.flatMap(folder =>
      listWebpFiles(path.join(publicRoot, 'thumb', folder)).map(fileName => toImagePair(folder, fileName)),
    )
    const selected = selections[service.slug]?.selected
    const coverImage = images.find(image => image.thumb === `/expertise/thumb/${selected}`) || images[0]
    return { ...service, coverImage, images }
  })
}

function main() {
  const exclusions = loadExclusions()
  resetDir(publicRoot)
  copySourceFolders()
  const expertise = buildData()
  fs.writeFileSync(dataPath, JSON.stringify({ generatedAt: new Date().toISOString(), expertise }, null, 2), 'utf8')
  console.log(`Published ${expertise.length} expertise areas with ${expertise.filter(item => !item.isSignature).reduce((sum, item) => sum + item.images.length, 0)} source images.`)
  console.log(`Excluded ${exclusions.size} curated images.`)
  console.log(`Assets: ${publicRoot}`)
  console.log(`Metadata: ${dataPath}`)
}

main()
