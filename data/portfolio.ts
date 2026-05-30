import generatedPortfolio from './portfolio.generated.json'
import type { Province } from './provinces'

export interface PortfolioImage {
  thumb: string
  large: string
}

export interface PortfolioProject {
  slug: string
  title: string
  city: string
  province: Province
  category: string
  projectGroup: string | null
  area: string
  description: string
  coverImage: PortfolioImage
  images: PortfolioImage[]
}

export interface PortfolioCity {
  slug: string
  name: string
  province: Province
  coverImage: PortfolioImage
  gallery: PortfolioImage[]
  projects: string[]
}

interface GeneratedPortfolio {
  generatedAt: string
  cities: PortfolioCity[]
  projects: PortfolioProject[]
}

const portfolio = generatedPortfolio as GeneratedPortfolio

export const portfolioCities = portfolio.cities
export const portfolioProjects = portfolio.projects

export const portfolioCategories = Array.from(
  new Set(portfolioProjects.map(project => project.category)),
).sort((a, b) => a.localeCompare(b))

export const getPortfolioProjectBySlug = (slug: string) =>
  portfolioProjects.find(project => project.slug === slug)

export const getPortfolioProjectsByCity = (city: string) =>
  portfolioProjects.filter(project => project.city.toLowerCase() === city.toLowerCase())

export const getPortfolioCityBySlug = (slug: string) =>
  portfolioCities.find(city => city.slug === slug)

export const getPortfolioCityByName = (name: string) =>
  portfolioCities.find(city => city.name.toLowerCase() === name.toLowerCase())

export const getPortfolioProjectsByProvince = (province: Province) =>
  portfolioProjects.filter(project => project.province === province)

export const getRelatedPortfolioProjects = (slug: string, limit = 3) => {
  const current = getPortfolioProjectBySlug(slug)
  if (!current) return []

  return portfolioProjects
    .filter(project => project.slug !== slug && project.city === current.city)
    .slice(0, limit)
}
