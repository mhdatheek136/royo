export type Category = 'residential' | 'commercial' | 'gypsum-art'
export type Province = 'western' | 'central' | 'southern' | 'northern' | 'eastern' | 'north-western' | 'north-central' | 'uva' | 'sabaragamuwa'

export interface Project {
  id: string
  slug: string
  title: string
  location: string
  province: Province
  category: Category
  year: number
  area: string
  clientType: string
  description: string
  narrative: string
  images: string[]
  features: {
    gypsumMoulding: boolean
    description: string
  }
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'galle-heritage-villa',
    title: 'Galle Heritage Villa',
    location: 'Galle',
    province: 'southern',
    category: 'residential',
    year: 2023,
    area: '8,500 sqft',
    clientType: 'Private HNI',
    description: 'A masterpiece of colonial heritage blended with modern luxury.',
    narrative: 'The architectural concept for The Galle Heritage Villa centers on reimagining the essence of classical elements and contemporary minimalism. By preserving the original coral stone walls and high timber ceilings, we created a canvas for modern luxury that respects the historical notes. Our design team focused on the "secret wall" concept, introducing glass-roofed courtyards that allow tropical Sri Lankan sunlight to filter through such indoor vegetation, reflecting a bespoke polished concrete and reclaimed teak wood. Every piece of furniture was custom-crafted to bridge the tension between unique silhouettes and modern ergonomic. The Galle Heritage Villa stands as a testament to our belief that luxury is not just an aesthetic—it\'s a feeling—harmony between the built environment and the natural spirit of its location.',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
    ],
    features: {
      gypsumMoulding: true,
      description: 'Artisanal Gypsum Moulding - To honour the built environment, we integrated bespoke gypsum mouldings along the top two ceilings. These patterns were hand-sketched by our senior designers, drawing inspiration from both local architecture and traditional Sri Lankan patterns and motifs.'
    }
  },
  {
    id: '2',
    slug: 'the-villa-bay',
    title: 'The Villa Bay',
    location: 'Colombo',
    province: 'western',
    category: 'residential',
    year: 2023,
    area: '12,000 sqft',
    clientType: 'Private Family',
    description: 'Luxury beachfront residence with panoramic ocean views.',
    narrative: 'The Villa Bay represents our interpretation of coastal luxury—where light, space, and materiality converge. The design philosophy centered on creating zones of intimacy within expansive open-plan living. We employed a sophisticated palette of warm neutrals, polished brass, and natural stone to create a serene sanctuary.',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      'https://images.unsplash.com/photo-1516455207990-7f88b842e32f?w=800',
    ],
    features: {
      gypsumMoulding: true,
      description: 'Custom gypsum ceiling installations with integrated LED lighting systems.'
    }
  },
  {
    id: '3',
    slug: 'coconut-inn',
    title: 'Coconut Inn',
    location: 'Jaffna',
    province: 'northern',
    category: 'commercial',
    year: 2023,
    area: '6,500 sqft',
    clientType: 'Boutique Hotel',
    description: 'Contemporary boutique hotel with heritage influences.',
    narrative: 'Coconut Inn showcases our commitment to blending Sri Lankan heritage with contemporary design. The space celebrates local craftsmanship and materials.',
    images: [
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800',
      'https://images.unsplash.com/photo-1523455086753-6f3031224c94?w=800',
    ],
    features: {
      gypsumMoulding: false,
      description: 'Modern minimalist approach with local material integration.'
    }
  },
  {
    id: '4',
    slug: 'the-hilton-high',
    title: 'The Hilton High',
    location: 'Nuwara Eliya',
    province: 'central',
    category: 'commercial',
    year: 2023,
    area: '10,000 sqft',
    clientType: 'Luxury Hotel',
    description: 'Highland resort with mountain views and luxury amenities.',
    narrative: 'Set in the misty highlands of Nuwara Eliya, this project celebrates cool-climate luxury. The design incorporates warm wood tones, layered lighting, and intimate seating areas that encourage gathering.',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
      'https://images.unsplash.com/photo-1567016432779-094d6e44efd2?w=800',
    ],
    features: {
      gypsumMoulding: true,
      description: 'Decorative gypsum work with traditional motifs.'
    }
  },
  {
    id: '5',
    slug: 'sigiriya-high-view',
    title: 'Sigiriya High View',
    location: 'Sigiriya',
    province: 'central',
    category: 'residential',
    year: 2023,
    area: '9,200 sqft',
    clientType: 'Private Villa',
    description: 'Modern villa with panoramic views of the ancient rock fortress.',
    narrative: 'This residence reimagines luxury through the lens of its extraordinary landscape. Every design decision was made to frame and celebrate the Sigiriya rock formation visible from the property. We created a home that is a viewing platform for natural majesty.',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      'https://images.unsplash.com/photo-1618219944342-824e40a13202?w=800',
    ],
    features: {
      gypsumMoulding: true,
      description: 'Artistic gypsum feature wall with tree motif design.'
    }
  },
  {
    id: '6',
    slug: 'indiana-hotel',
    title: 'Indiana Hotel',
    location: 'Kandy',
    province: 'central',
    category: 'commercial',
    year: 2023,
    area: '15,000 sqft',
    clientType: 'Heritage Hotel',
    description: 'Boutique hotel celebrating Sri Lankan cultural heritage.',
    narrative: 'Indiana Hotel presents a contemporary interpretation of Sri Lankan design traditions. We blended modern comfort with cultural authenticity.',
    images: [
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    ],
    features: {
      gypsumMoulding: true,
      description: 'Heritage-inspired gypsum mouldings throughout public spaces.'
    }
  },
  {
    id: '7',
    slug: 'colombo-sky-loft',
    title: 'Colombo Sky Loft',
    location: 'Colombo',
    province: 'western',
    category: 'residential',
    year: 2023,
    area: '4,500 sqft',
    clientType: 'Private Apartment',
    description: 'Ultra-modern city penthouse with smart home technology.',
    narrative: 'A contemporary urban sanctuary that showcases minimalist design principles with maximum comfort. The loft features floor-to-ceiling windows and an open floor plan.',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
    ],
    features: {
      gypsumMoulding: false,
      description: 'Clean lines and modern minimalism dominate this space.'
    }
  },
  {
    id: '8',
    slug: 'batticaloa-beachfront',
    title: 'Batticaloa Beachfront',
    location: 'Batticaloa',
    province: 'eastern',
    category: 'residential',
    year: 2023,
    area: '7,800 sqft',
    clientType: 'Private Residence',
    description: 'Coastal sanctuary with authentic East Coast charm.',
    narrative: 'This beachfront residence celebrates the laid-back elegance of Sri Lanka\'s east coast. The design emphasizes openness, natural materials, and the constant presence of the ocean.',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      'https://images.unsplash.com/photo-1516455207990-7f88b842e32f?w=800',
    ],
    features: {
      gypsumMoulding: false,
      description: 'Natural materials and coastal minimalism.'
    }
  },
  {
    id: '9',
    slug: 'anuradhapura-heritage',
    title: 'Anuradhapura Heritage',
    location: 'Anuradhapura',
    province: 'north-central',
    category: 'commercial',
    year: 2023,
    area: '8,000 sqft',
    clientType: 'Cultural Center',
    description: 'Museum and cultural center honoring ancient Sri Lankan civilization.',
    narrative: 'A tribute to the ancient kingdom of Anuradhapura, this project merges historical reverence with contemporary architecture. The design creates spaces for cultural exploration and artistic expression.',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    ],
    features: {
      gypsumMoulding: true,
      description: 'Archival gypsum work inspired by ancient temple architecture.'
    }
  },
  {
    id: '10',
    slug: 'matara-mansion',
    title: 'Matara Mansion',
    location: 'Matara',
    province: 'southern',
    category: 'residential',
    year: 2023,
    area: '11,000 sqft',
    clientType: 'Private Estate',
    description: 'Grand residence with historical Southern Province character.',
    narrative: 'The Matara Mansion represents our work in the Southern Province—blending Portuguese colonial heritage with contemporary luxury. Every room tells a story of cultural fusion.',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      'https://images.unsplash.com/photo-1618219944342-824e40a13202?w=800',
    ],
    features: {
      gypsumMoulding: true,
      description: 'Elaborate gypsum ceiling work with classical motifs.'
    }
  },
  {
    id: '11',
    slug: 'kandy-spa-resort',
    title: 'Kandy Spa Resort',
    location: 'Kandy',
    province: 'central',
    category: 'commercial',
    year: 2023,
    area: '12,500 sqft',
    clientType: 'Wellness Center',
    description: 'Luxury wellness resort with spa and meditation spaces.',
    narrative: 'Kandy Spa Resort creates an atmosphere of serene luxury. Inspired by traditional Ayurvedic principles and contemporary wellness design.',
    images: [
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800',
    ],
    features: {
      gypsumMoulding: true,
      description: 'Acoustic and decorative gypsum installations for wellness spaces.'
    }
  },
  {
    id: '12',
    slug: 'ratnapura-office',
    title: 'Ratnapura Office',
    location: 'Ratnapura',
    province: 'sabaragamuwa',
    category: 'commercial',
    year: 2023,
    area: '5,000 sqft',
    clientType: 'Gem Trading House',
    description: 'Contemporary office space for precious stone trading.',
    narrative: 'This office celebrates the gemstone heritage of Ratnapura with modern professional spaces. The design incorporates luxury materials and sophisticated finishes.',
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
    ],
    features: {
      gypsumMoulding: true,
      description: 'Subtle gypsum work with geometric patterns.'
    }
  },
  {
    id: '13',
    slug: 'kurunegala-residence',
    title: 'Kurunegala Residence',
    location: 'Kurunegala',
    province: 'north-western',
    category: 'residential',
    year: 2023,
    area: '9,500 sqft',
    clientType: 'Private Family',
    description: 'Family home with contemporary Sri Lankan design.',
    narrative: 'Set in the North Western Province, this residence celebrates local culture and modern comfort. The design creates spaces for family gatherings and personal retreats.',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    ],
    features: {
      gypsumMoulding: true,
      description: 'Custom gypsum feature walls throughout main living areas.'
    }
  },
  {
    id: '14',
    slug: 'badulla-heritage',
    title: 'Badulla Heritage',
    location: 'Badulla',
    province: 'uva',
    category: 'commercial',
    year: 2023,
    area: '7,200 sqft',
    clientType: 'Historic Site Center',
    description: 'Cultural heritage center in the Uva Province.',
    narrative: 'This project honors the heritage and natural beauty of Badulla. The design integrates with the landscape and celebrates the region\'s tea estate culture.',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    ],
    features: {
      gypsumMoulding: true,
      description: 'Traditional motif gypsum installations.'
    }
  },
]

export const getProjectsByCategory = (category: Category) => {
  return projects.filter(p => p.category === category)
}

export const getProjectsByProvince = (province: Province) => {
  return projects.filter(p => p.province === province)
}

export const getProjectBySlug = (slug: string) => {
  return projects.find(p => p.slug === slug)
}

export const getRelatedProjects = (currentSlug: string, limit = 3) => {
  const current = getProjectBySlug(currentSlug)
  if (!current) return []
  
  return projects
    .filter(p => p.slug !== currentSlug && p.province === current.province)
    .slice(0, limit)
}
