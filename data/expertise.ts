import generatedExpertise from './expertise.generated.json'

export interface ExpertiseImage {
  thumb: string
  large: string
}

export interface ExpertiseArea {
  slug: string
  title: string
  sourceFolders: string[]
  description: string
  isSignature: boolean
  coverImage: ExpertiseImage
  images: ExpertiseImage[]
}

interface GeneratedExpertise {
  generatedAt: string
  expertise: ExpertiseArea[]
}

const expertise = generatedExpertise as GeneratedExpertise

export const expertiseAreas = expertise.expertise

export const getExpertiseBySlug = (slug: string) =>
  expertiseAreas.find(area => area.slug === slug)
