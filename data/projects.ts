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
    description: 'A luxurious colonial restoration in Galle, seamlessly blending 18th-century architecture with bespoke modern luxury and artisanal gypsum artistry.',
    narrative: 'Set within the historic walls of Galle, this heritage villa restoration is a masterclass in balancing preservation with contemporary elegance. We retained the original white coral stone walls and towering timber ceilings, introducing a magnificent glass-roofed courtyard that floods the interior with tropical sunlight. At the heart of the design is our artisanal gypsum moulding, meticulously hand-crafted to bridge classic colonial proportions with minimalist modern luxury. Paired with reclaimed teak furniture and polished concrete floors, the villa stands as a timeless sanctuary of coastal sophistication.',
    images: [
      '/projects/galle-heritage-villa-1.jpg',
      '/projects/galle-heritage-villa-2.jpg',
      '/projects/galle-heritage-villa-3.jpg',
    ],
    features: {
      gypsumMoulding: true,
      description: 'Artisanal gypsum cornices and archways, hand-sketched by our senior designers to honor traditional Sri Lankan motifs while maintaining crisp, modern lines.'
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
    description: 'An ultra-modern beachfront residence in Colombo, defined by expansive ocean views, sleek minimalist lines, and sophisticated ceiling architecture.',
    narrative: 'The Villa Bay represents the pinnacle of modern coastal luxury in Colombo. Designed to maximize panoramic views of the Indian Ocean, the open-plan living spaces are bathed in natural light filtering through floor-to-ceiling glass. We employed a refined palette of warm neutrals, natural stone, and polished brass accents. The crowning feature is the completely custom geometric gypsum ceiling architecture, which integrates seamless, hidden LED cove lighting to create a serene, floating effect that perfectly complements the beachfront atmosphere.',
    images: [
      '/projects/the-villa-bay-1.jpg',
      '/projects/the-villa-bay-2.jpg',
      '/projects/the-villa-bay-3.jpg',
    ],
    features: {
      gypsumMoulding: true,
      description: 'Sleek, modern gypsum ceiling installations featuring integrated hidden LED cove lighting for a sophisticated, floating architectural effect.'
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
    description: 'A vibrant boutique hotel in Jaffna that harmonizes rich Northern cultural heritage with clean, contemporary minimalist interior design.',
    narrative: 'Located in the cultural heart of Jaffna, Coconut Inn is a celebration of local craftsmanship reimagined through a modern lens. The interior architecture relies on warm earthy tones, robust palmyra wood accents, and locally sourced stone. We introduced clean, contemporary gypsum wall paneling and subtle ceiling drops to bring structure and modernity to the spaces without overpowering the traditional aesthetic. The result is a high-end hospitality environment that feels deeply rooted in its location yet entirely luxurious.',
    images: [
      '/projects/coconut-inn-1.jpg',
      '/projects/coconut-inn-2.jpg',
      '/projects/coconut-inn-3.jpg',
    ],
    features: {
      gypsumMoulding: true,
      description: 'Contemporary, minimalist gypsum wall detailing and recessed ceiling drops that provide clean architectural lines to balance traditional materials.'
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
    description: 'A prestigious highland resort in Nuwara Eliya, offering cool-climate luxury, warm wood interiors, and classic architectural detailing.',
    narrative: 'Perched in the misty, tea-covered mountains of Nuwara Eliya, The Hilton High is a sanctuary of cool-climate luxury. The interior design leans into a classic, warm aesthetic featuring dark wood paneling, plush velvet seating, and glowing fireplaces. To elevate the sense of heritage luxury, we implemented exquisite, traditional gypsum moulding across the grand ceilings and feature walls. This intricate detailing, combined with layered ambient lighting, creates an atmosphere of timeless, intimate grandeur.',
    images: [
      '/projects/the-hilton-high-1.jpg',
      '/projects/the-hilton-high-2.jpg',
      '/projects/the-hilton-high-3.jpg',
    ],
    features: {
      gypsumMoulding: true,
      description: 'Exquisite, classical gypsum ceiling medallions and elaborate cornices that evoke the grandeur of heritage mountain estates.'
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
    description: 'A breathtaking modern villa designed as a viewing platform for the ancient Sigiriya rock fortress, blending nature with architectural precision.',
    narrative: 'Sigiriya High View reimagines luxury by blurring the lines between interior comfort and the raw beauty of the surrounding jungle. Every spatial decision was made to frame the majestic Sigiriya rock fortress through massive panoramic windows. To keep the focus on the landscape, we utilized ultra-clean, modern gypsum ceilings and subtle cove lighting that provides a soft glow without reflecting on the glass. The minimalist design is anchored by an artistic custom gypsum feature wall, incorporating a subtle organic tree motif that grounds the home in its tropical environment.',
    images: [
      '/projects/sigiriya-high-view-1.jpg',
      '/projects/sigiriya-high-view-2.jpg',
      '/projects/sigiriya-high-view-3.jpg',
    ],
    features: {
      gypsumMoulding: true,
      description: 'An artistic, custom-sculpted gypsum feature wall with an organic tree motif, alongside ultra-clean minimalist ceilings.'
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
    description: 'A grand heritage boutique hotel in Kandy, masterfully blending traditional Kandyan art motifs with sophisticated luxury design.',
    narrative: 'Indiana Hotel is a luxurious homage to the cultural richness of Kandy. The grand lobby immediately sets a tone of majestic hospitality, featuring soaring ceilings supported by intricate dark wood columns. We elevated the space by designing complex, Kandyan-inspired gypsum moulding that sweeps across the ceiling and frames the elegant archways. Soft architectural lighting highlights the depth of this craftsmanship, while plush velvet seating and brass accents provide a warm, inviting luxury experience.',
    images: [
      '/projects/indiana-hotel-1.jpg',
      '/projects/indiana-hotel-2.jpg',
      '/projects/indiana-hotel-3.jpg',
    ],
    features: {
      gypsumMoulding: true,
      description: 'Complex, heritage-inspired gypsum moulding and archways drawing directly from traditional Kandyan architectural motifs.'
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
    description: 'An ultra-modern, high-contrast penthouse in the heart of Colombo, featuring smart home technology and sharp, minimalist architecture.',
    narrative: 'Floating above the bustling city, the Colombo Sky Loft is a triumph of ultra-modern urban design. The penthouse features a striking high-contrast monochrome palette, polished concrete floors, and a dramatic floating staircase. We pushed the boundaries of interior architecture with perfectly smooth, sharp-edged white gypsum feature walls and custom ceiling drops that seamlessly hide the advanced smart home lighting systems. The result is a sleek, futuristic living space that feels both cutting-edge and deeply comfortable.',
    images: [
      '/projects/colombo-sky-loft-1.jpg',
      '/projects/colombo-sky-loft-2.jpg',
      '/projects/colombo-sky-loft-3.jpg',
    ],
    features: {
      gypsumMoulding: true,
      description: 'Perfectly smooth, sharp-edged modern gypsum ceiling drops designed to seamlessly conceal advanced smart home LED lighting systems.'
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
    description: 'A serene coastal sanctuary in Batticaloa, embracing natural light, authentic East Coast charm, and breezy, open-air elegance.',
    narrative: 'This beachfront residence is designed to capture the laid-back, sun-drenched essence of Sri Lanka\'s East Coast. The spaces flow effortlessly from the indoor living areas out to the pristine beach. We utilized a light, airy material palette of rattan, white linen, and natural stone. To enhance the brightness of the home, crisp white gypsum ceilings and beautifully crafted, subtle gypsum archways were introduced. These elements reflect the tropical sunlight and add a touch of refined elegance to the relaxed coastal atmosphere.',
    images: [
      '/projects/batticaloa-beachfront-1.jpg',
      '/projects/batticaloa-beachfront-2.jpg',
      '/projects/batticaloa-beachfront-3.jpg',
    ],
    features: {
      gypsumMoulding: true,
      description: 'Crisp white gypsum ceilings and beautifully crafted, subtle room-transition archways that enhance natural light and coastal elegance.'
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
    description: 'A majestic cultural center and museum in Anuradhapura, balancing solemn historical reverence with clean, contemporary spatial design.',
    narrative: 'Serving as a tribute to Sri Lanka\'s ancient first kingdom, the Anuradhapura Heritage center is a space of profound tranquility and respect. The grand minimalist galleries are designed to let the ancient artifacts take center stage, illuminated by precise, soft spotlighting. We drew inspiration from ancient temple architecture to create archival, bespoke gypsum ceiling work and stunning vertical light-wells. Executed with modern precision, this gypsum detailing provides a solemn, majestic canopy over the historical exhibits.',
    images: [
      '/projects/anuradhapura-heritage-1.jpg',
      '/projects/anuradhapura-heritage-2.jpg',
      '/projects/anuradhapura-heritage-3.jpg',
    ],
    features: {
      gypsumMoulding: true,
      description: 'Archival, bespoke gypsum ceiling work and vertical light-wells inspired by ancient temple architecture, executed with modern precision.'
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
    description: 'A grand luxury estate in the Southern Province, celebrating opulent Portuguese colonial heritage and expansive, wealthy proportions.',
    narrative: 'The Matara Mansion is a statement of uncompromising luxury and historical grandeur in the Southern Province. The estate features large arched windows, long mahogany dining tables, and luxurious vintage furnishings. The crowning achievement of the interior is the incredibly elaborate, bespoke gypsum ceiling work. Featuring classical floral motifs and deep, rich cornices, the gypsum artistry provides a breathtaking backdrop for the elegant modern chandeliers, creating a space of true aristocratic presence.',
    images: [
      '/projects/matara-mansion-1.jpg',
      '/projects/matara-mansion-2.jpg',
      '/projects/matara-mansion-3.jpg',
    ],
    features: {
      gypsumMoulding: true,
      description: 'Incredibly elaborate, bespoke gypsum ceiling work featuring deep cornices and classical floral motifs highlighting modern chandeliers.'
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
    description: 'A tranquil luxury wellness resort in Kandy, designed around organic shapes, natural materials, and supreme acoustic comfort.',
    narrative: 'Designed as an ultimate sanctuary for relaxation, the Kandy Spa Resort embraces zen-like tranquility. The interiors heavily feature natural timber cladding, indoor water features, and raw stone bathtubs overlooking the misty jungle. To enhance the acoustic and visual softness of the meditation and treatment rooms, we installed beautiful, decorative gypsum ceilings with soft, organic curves. The gentle, indirect lighting bouncing off these curved gypsum surfaces creates a profoundly calming, immersive wellness environment.',
    images: [
      '/projects/kandy-spa-resort-1.jpg',
      '/projects/kandy-spa-resort-2.jpg',
      '/projects/kandy-spa-resort-3.jpg',
    ],
    features: {
      gypsumMoulding: true,
      description: 'Beautiful, acoustically optimized decorative gypsum ceilings featuring soft, organic curves and subtle vertical texturing.'
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
    description: 'A sophisticated, high-end gem trading office in Ratnapura, projecting absolute professionalism, security, and refined luxury.',
    narrative: 'Located in the City of Gems, this trading office is designed to host high-net-worth clients in an atmosphere of absolute luxury and discretion. The interiors utilize dark moody tones, velvet armchairs, brass accents, and rich wood paneling alongside secure glass display cases. We integrated subtle, sharp geometric gypsum ceiling moulding and premium gypsum wall paneling in the private meeting rooms. This precise, polished architectural detailing perfectly mirrors the facets of the precious stones being traded.',
    images: [
      '/projects/ratnapura-office-1.jpg',
      '/projects/ratnapura-office-2.jpg',
      '/projects/ratnapura-office-3.jpg',
    ],
    features: {
      gypsumMoulding: true,
      description: 'Precise, sharp geometric gypsum ceiling moulding and premium wall paneling that projects professional polish and high-end luxury.'
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
    description: 'A contemporary luxury family home in Kurunegala, blending spacious open-plan living with highly customized interior architectural details.',
    narrative: 'This expansive residence in the North Western Province was designed to be the perfect backdrop for modern family life and sophisticated entertaining. The large open-plan living and dining areas are flooded with warm natural light and furnished with elegant contemporary pieces. To give the home its unique character, we designed and installed custom bespoke gypsum feature walls featuring subtle 3D geometric patterns. Highlighted by soft grazing light, these walls add a layer of rich, tactile luxury to the comfortable family spaces.',
    images: [
      '/projects/kurunegala-residence-1.jpg',
      '/projects/kurunegala-residence-2.jpg',
      '/projects/kurunegala-residence-3.jpg',
    ],
    features: {
      gypsumMoulding: true,
      description: 'Custom bespoke gypsum feature walls incorporating subtle 3D geometric patterns, highlighted by sophisticated grazing light.'
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
    description: 'A culturally significant heritage center in Badulla, featuring rooted, calm interiors that beautifully frame the surrounding tea estates.',
    narrative: 'The Badulla Heritage center honors the rich history and natural beauty of the Uva Province. The building features warm timber floors and tall arched windows that provide stunning views of the lush, rolling tea estates. Our interior design approach was one of careful restraint and cultural respect. We framed the grand arched windows and upper gallery walls with elegant, traditional Sri Lankan motif gypsum installations. This beautiful craftsmanship grounds the space, offering a calm, culturally significant atmosphere.',
    images: [
      '/projects/badulla-heritage-1.jpg',
      '/projects/badulla-heritage-2.jpg',
      '/projects/badulla-heritage-3.jpg',
    ],
    features: {
      gypsumMoulding: true,
      description: 'Elegant, traditional Sri Lankan motif gypsum installations framing tall arched windows and upper gallery walls.'
    }
  },
]

export const getProjectsByCategory = (category: Category) => {
  return projects.filter(p => p.category === category)
}

export const getProjectsByProvince = (province: Province) => {
  return projects.filter(p => p.province === province)
}

export const getProjectsByLocation = (location: string) => {
  return projects.filter(p => p.location.toLowerCase() === location.toLowerCase())
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
