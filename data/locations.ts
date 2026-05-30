import { getPortfolioProjectsByCity } from '@/data/portfolio'

export interface LocationFaq {
  question: string
  answer: string
}

export interface LocationContent {
  slug: string
  cityName: string
  provinceName: string
  heroImage: string
  heroAlt: string
  intro: string
  seoTitle: string
  seoDescription: string
  faq: LocationFaq[]
  nearbyAreas?: string[]
}

export const locations: LocationContent[] = [
  {
    slug: 'kurunegala',
    cityName: 'Kurunegala',
    provinceName: 'North Western Province',
    heroImage: '/locations/kurunegala.jpg',
    heroAlt: 'A breathtaking scenic view of Elephant Rock and Kurunegala Lake',
    intro: 'ROYO delivers gypsum moulding and interior design services in Kurunegala with a focus on calm luxury, durable detailing, and spaces that feel considered from first impression to final finish.',
    seoTitle: 'Gypsum Moulding and Interior Design in Kurunegala | ROYO',
    seoDescription: 'Discover gypsum moulding and interior design services in Kurunegala by ROYO, with bespoke detailing, refined interiors, and locally grounded project experience.',
    faq: [
      {
        question: 'Do you offer gypsum moulding in Kurunegala?',
        answer: 'Yes. We provide gypsum moulding and related interior detailing for homes and commercial spaces in Kurunegala.'
      },
      {
        question: 'Can you handle full interior design projects in Kurunegala?',
        answer: 'Yes. We support both focused gypsum work and broader interior design scopes depending on the needs of the project.'
      },
      {
        question: 'Do you work in nearby areas outside Kurunegala town?',
        answer: 'Yes. We can support projects in nearby parts of the district and surrounding areas based on scope and site requirements.'
      }
    ],
    nearbyAreas: ['Wariyapola', 'Mawathagama', 'Narammala']
  },
  {
    slug: 'colombo',
    cityName: 'Colombo',
    provinceName: 'Western Province',
    heroImage: '/locations/colombo.jpg',
    heroAlt: 'A stunning aesthetic view of the Colombo city skyline and Lotus Tower',
    intro: 'In Colombo, our work balances modern city living with carefully crafted gypsum moulding, premium materials, and interiors designed to feel polished, functional, and quietly distinctive.',
    seoTitle: 'Gypsum Moulding and Interior Design in Colombo | ROYO',
    seoDescription: 'Explore gypsum moulding and interior design services in Colombo by ROYO, from refined urban interiors to bespoke architectural detailing.',
    faq: [
      {
        question: 'Do you provide interior design services in Colombo?',
        answer: 'Yes. We work on residential and commercial interiors in Colombo with a focus on premium detailing and cohesive design execution.'
      },
      {
        question: 'Is gypsum moulding suitable for modern Colombo interiors?',
        answer: 'Yes. Gypsum moulding can be tailored to both classic and contemporary interiors, from subtle ceiling detailing to expressive feature walls.'
      },
      {
        question: 'Do you work on apartments as well as houses in Colombo?',
        answer: 'Yes. Our work can be adapted for apartments, private residences, hospitality spaces, and selected commercial environments.'
      }
    ],
    nearbyAreas: ['Rajagiriya', 'Battaramulla', 'Dehiwala']
  },
  {
    slug: 'kandy',
    cityName: 'Kandy',
    provinceName: 'Central Province',
    heroImage: '/locations/kandy.jpg',
    heroAlt: 'A majestic view of the Temple of the Sacred Tooth Relic and Kandy Lake',
    intro: 'Our Kandy projects pair gypsum craftsmanship with interiors that feel grounded, warm, and aligned with the city’s layered cultural and architectural character.',
    seoTitle: 'Gypsum Moulding and Interior Design in Kandy | ROYO',
    seoDescription: 'ROYO offers gypsum moulding and interior design services in Kandy for hospitality, residential, and lifestyle-led spaces.',
    faq: [
      {
        question: 'Do you work on hotels and hospitality interiors in Kandy?',
        answer: 'Yes. Our experience includes commercial and hospitality-oriented environments where detailing, atmosphere, and durability matter.'
      },
      {
        question: 'Can you create heritage-inspired gypsum detailing in Kandy?',
        answer: 'Yes. We can develop gypsum moulding concepts that feel more traditional, heritage-led, or contemporary depending on the brief.'
      },
      {
        question: 'Do you also take on private residential work in Kandy?',
        answer: 'Yes. Residential interiors and bespoke gypsum features are both part of our service offering in Kandy.'
      }
    ],
    nearbyAreas: ['Peradeniya', 'Katugastota', 'Kundasale']
  },
  {
    slug: 'galle',
    cityName: 'Galle',
    provinceName: 'Southern Province',
    heroImage: '/locations/galle.jpg',
    heroAlt: 'A beautiful coastal aesthetic of the historic Galle Fort and lighthouse',
    intro: 'In Galle, our interiors are shaped by heritage, texture, and coastal light, bringing together gypsum detailing and elegant material decisions that suit both classic and contemporary spaces.',
    seoTitle: 'Gypsum Moulding and Interior Design in Galle | ROYO',
    seoDescription: 'Discover gypsum moulding and interior design services in Galle by ROYO, crafted for refined coastal homes and hospitality spaces.',
    faq: [
      {
        question: 'Do you offer gypsum moulding in Galle for heritage-style homes?',
        answer: 'Yes. We can create gypsum detailing that complements colonial, coastal, and contemporary design directions in Galle.'
      },
      {
        question: 'Can you work on boutique villa or hospitality interiors in Galle?',
        answer: 'Yes. Our service approach is well suited to high-end hospitality, villas, and design-led residential projects.'
      }
    ],
    nearbyAreas: ['Unawatuna', 'Hikkaduwa', 'Weligama']
  },
  {
    slug: 'jaffna',
    cityName: 'Jaffna',
    provinceName: 'Northern Province',
    heroImage: '/locations/jaffna.jpg',
    heroAlt: 'A stunning aesthetic shot of the ornate Nallur Kandaswamy Kovil temple',
    intro: 'Our design direction in Jaffna brings together functional planning, selective ornamentation, and a clear visual identity, whether the project leans commercial, hospitality-focused, or quietly residential.',
    seoTitle: 'Gypsum Moulding and Interior Design in Jaffna | ROYO',
    seoDescription: 'ROYO provides gypsum moulding and interior design services in Jaffna with a focus on refined spatial planning and thoughtful detailing.',
    faq: [
      {
        question: 'Do you handle commercial interiors in Jaffna?',
        answer: 'Yes. We can support commercial interior scopes in Jaffna, including projects where ambience and brand impression are important.'
      },
      {
        question: 'Can gypsum moulding be used in restrained contemporary spaces?',
        answer: 'Yes. Gypsum detailing does not need to be heavy or traditional; it can be subtle, clean, and modern when the concept calls for it.'
      }
    ],
    nearbyAreas: ['Nallur', 'Chunnakam', 'Point Pedro']
  },
  {
    slug: 'nuwara-eliya',
    cityName: 'Nuwara Eliya',
    provinceName: 'Central Province',
    heroImage: '/locations/nuwara-eliya.jpg',
    heroAlt: 'A breathtaking misty landscape and tea plantations in Nuwara Eliya',
    intro: 'For Nuwara Eliya, our approach emphasizes layered comfort, classic composition, and gypsum detailing that feels appropriate to cool-climate luxury and elevated retreat-style living.',
    seoTitle: 'Gypsum Moulding and Interior Design in Nuwara Eliya | ROYO',
    seoDescription: 'Explore gypsum moulding and interior design services in Nuwara Eliya by ROYO, designed for refined mountain residences and hospitality spaces.',
    faq: [
      {
        question: 'Do you design interiors for hotels and retreats in Nuwara Eliya?',
        answer: 'Yes. We can support hospitality and high-end residential interiors shaped around warmth, atmosphere, and detailed finishes.'
      },
      {
        question: 'Is gypsum moulding suitable for classic interiors in Nuwara Eliya?',
        answer: 'Yes. Gypsum moulding works especially well in classic and heritage-inspired compositions common in this region.'
      }
    ],
    nearbyAreas: ['Hatton', 'Talawakelle', 'Haputale']
  },
  {
    slug: 'sigiriya',
    cityName: 'Sigiriya',
    provinceName: 'Central Province',
    heroImage: '/locations/sigiriya.jpg',
    heroAlt: 'A majestic aesthetic view of the ancient Sigiriya Rock Fortress',
    intro: 'In Sigiriya, our interiors are developed to feel calm, open, and responsive to the surrounding landscape, with gypsum detailing used to frame rather than overpower the architecture.',
    seoTitle: 'Gypsum Moulding and Interior Design in Sigiriya | ROYO',
    seoDescription: 'ROYO offers gypsum moulding and interior design services in Sigiriya for villas, residences, and spaces shaped by the surrounding landscape.',
    faq: [
      {
        question: 'Can you design interiors that suit villa projects in Sigiriya?',
        answer: 'Yes. We can shape interiors for villas and lifestyle properties where the architecture needs to feel connected to the site and views.'
      },
      {
        question: 'Do you use gypsum moulding in modern natural settings?',
        answer: 'Yes. Gypsum can be applied in a restrained way that supports a more natural, contemporary spatial language.'
      }
    ],
    nearbyAreas: ['Dambulla', 'Habarana', 'Inamaluwa']
  },
  {
    slug: 'batticaloa',
    cityName: 'Batticaloa',
    provinceName: 'Eastern Province',
    heroImage: '/locations/batticaloa.jpg',
    heroAlt: 'A serene coastal aesthetic of the Batticaloa Lagoon and historic fort',
    intro: 'Our Batticaloa direction favors openness, coastal ease, and interiors that feel bright and composed, with gypsum and finish selections tailored to that atmosphere.',
    seoTitle: 'Gypsum Moulding and Interior Design in Batticaloa | ROYO',
    seoDescription: 'Discover interior design and gypsum moulding services in Batticaloa by ROYO, tailored to relaxed coastal environments and refined residential spaces.',
    faq: [
      {
        question: 'Do you offer interior design services in Batticaloa?',
        answer: 'Yes. We support residential and selected hospitality-oriented spaces in Batticaloa with a refined, site-responsive design approach.'
      },
      {
        question: 'Can gypsum detailing work in bright coastal interiors?',
        answer: 'Yes. It can be kept crisp and elegant, adding structure and character without overwhelming airy spaces.'
      }
    ],
    nearbyAreas: ['Kallady', 'Eravur', 'Valachchenai']
  },
  {
    slug: 'anuradhapura',
    cityName: 'Anuradhapura',
    provinceName: 'North Central Province',
    heroImage: '/locations/anuradhapura.jpg',
    heroAlt: 'A majestic aesthetic shot of the ancient Ruwanwelisaya white stupa',
    intro: 'In Anuradhapura, our work can draw from cultural resonance and clarity of form, balancing respectful material choices with gypsum detailing that feels deliberate and contemporary.',
    seoTitle: 'Gypsum Moulding and Interior Design in Anuradhapura | ROYO',
    seoDescription: 'ROYO provides gypsum moulding and interior design services in Anuradhapura with a focus on thoughtful detailing and culturally grounded spaces.',
    faq: [
      {
        question: 'Do you work on cultural and commercial projects in Anuradhapura?',
        answer: 'Yes. We can support commercial, institutional, and selected residential interiors where identity and atmosphere matter.'
      },
      {
        question: 'Can gypsum moulding reflect traditional influences without feeling dated?',
        answer: 'Yes. Traditional references can be translated into refined, current detailing suited to the overall concept.'
      }
    ],
    nearbyAreas: ['Mihintale', 'Kekirawa', 'Tambuttegama']
  },
  {
    slug: 'matara',
    cityName: 'Matara',
    provinceName: 'Southern Province',
    heroImage: '/locations/matara.jpg',
    heroAlt: 'A beautiful coastal view of the Paravi Duwa Temple in Matara',
    intro: 'Our Matara interiors are shaped for warmth, scale, and timeless presence, pairing gypsum moulding with material palettes that support both family life and premium visual impact.',
    seoTitle: 'Gypsum Moulding and Interior Design in Matara | ROYO',
    seoDescription: 'Explore gypsum moulding and interior design services in Matara by ROYO, created for refined southern residences and elegant lifestyle spaces.',
    faq: [
      {
        question: 'Do you offer gypsum moulding for large homes in Matara?',
        answer: 'Yes. We can develop gypsum features for principal living areas, ceilings, walls, and other key architectural moments.'
      },
      {
        question: 'Can you handle both concept and finish-level detailing in Matara?',
        answer: 'Yes. We support both overall interior direction and focused detail-driven interventions depending on project needs.'
      }
    ],
    nearbyAreas: ['Akuressa', 'Weligama', 'Tangalle']
  },
  {
    slug: 'ratnapura',
    cityName: 'Ratnapura',
    provinceName: 'Sabaragamuwa Province',
    heroImage: '/locations/ratnapura.jpg',
    heroAlt: 'A stunning aesthetic view of lush mountain landscapes in Ratnapura',
    intro: 'In Ratnapura, our interior approach balances professionalism, polish, and material richness, creating spaces that feel composed and high value without becoming overstated.',
    seoTitle: 'Gypsum Moulding and Interior Design in Ratnapura | ROYO',
    seoDescription: 'ROYO offers gypsum moulding and interior design services in Ratnapura for offices, residences, and spaces that call for refined finish quality.',
    faq: [
      {
        question: 'Do you handle office interiors in Ratnapura?',
        answer: 'Yes. We can support office and commercial environments where layout, finish quality, and visual impression are key.'
      },
      {
        question: 'Is gypsum moulding only for classic spaces?',
        answer: 'No. We also use gypsum in contemporary and restrained ways depending on the design language of the project.'
      }
    ],
    nearbyAreas: ['Pelmadulla', 'Balangoda', 'Embilipitiya']
  },
  {
    slug: 'badulla',
    cityName: 'Badulla',
    provinceName: 'Uva Province',
    heroImage: '/locations/badulla.jpg',
    heroAlt: 'A breathtaking scenic view of the iconic Nine Arch Bridge in Badulla',
    intro: 'Our Badulla direction focuses on calm, rooted interiors with a sense of place, where gypsum moulding and crafted finishes help add character without losing restraint.',
    seoTitle: 'Gypsum Moulding and Interior Design in Badulla | ROYO',
    seoDescription: 'Discover gypsum moulding and interior design services in Badulla by ROYO for heritage-aware, carefully detailed spaces.',
    faq: [
      {
        question: 'Do you offer gypsum moulding in Badulla?',
        answer: 'Yes. We provide gypsum moulding and interior detailing for projects in Badulla and surrounding areas.'
      },
      {
        question: 'Can you design for culturally rooted or heritage-sensitive spaces?',
        answer: 'Yes. We can adapt our design language to suit more heritage-aware or regionally grounded briefs.'
      }
    ],
    nearbyAreas: ['Bandarawela', 'Ella', 'Hali-Ela']
  },
  {
    slug: 'ampara',
    cityName: 'Ampara',
    provinceName: 'Eastern Province',
    heroImage: '/portfolio/large/Ampara/ampara-001.webp',
    heroAlt: 'Completed interior work by ROYO in Ampara',
    intro: 'Our Ampara portfolio brings together practical planning and carefully finished interiors, with gypsum detailing used to give each space a composed architectural presence.',
    seoTitle: 'Gypsum Moulding and Interior Design in Ampara | ROYO',
    seoDescription: 'Explore completed gypsum moulding and interior design work in Ampara by ROYO.',
    faq: [
      {
        question: 'Do you offer gypsum moulding and interior design in Ampara?',
        answer: 'Yes. We support residential and selected commercial projects in Ampara with gypsum moulding, interior detailing, and finish coordination.'
      },
      {
        question: 'Can you work outside Ampara town?',
        answer: 'Yes. Site coverage can extend to nearby areas depending on the project scope and requirements.'
      }
    ]
  },
  {
    slug: 'kegalle',
    cityName: 'Kegalle',
    provinceName: 'Sabaragamuwa Province',
    heroImage: '/portfolio/large/Kegalle/kegalle-001.webp',
    heroAlt: 'Completed interior work by ROYO in Kegalle',
    intro: 'In Kegalle, our work focuses on durable interior finishes, calm composition, and gypsum detailing that adds character without overpowering the space.',
    seoTitle: 'Gypsum Moulding and Interior Design in Kegalle | ROYO',
    seoDescription: 'Explore completed gypsum moulding and interior design work in Kegalle by ROYO.',
    faq: [
      {
        question: 'Do you take on residential interiors in Kegalle?',
        answer: 'Yes. We provide interior design and gypsum moulding support for homes and selected commercial spaces in Kegalle.'
      },
      {
        question: 'Can your team coordinate finish-level detailing?',
        answer: 'Yes. Our work includes gypsum features and broader coordination of the finishes that shape the final space.'
      }
    ]
  },
  {
    slug: 'kilinochchi',
    cityName: 'Kilinochchi',
    provinceName: 'Northern Province',
    heroImage: '/portfolio/large/Kilinochchi/kilinochchi-001.webp',
    heroAlt: 'Completed interior work by ROYO in Kilinochchi',
    intro: 'Our Kilinochchi projects pair clean spatial planning with confident finish choices, creating interiors that feel considered, functional, and visually clear.',
    seoTitle: 'Gypsum Moulding and Interior Design in Kilinochchi | ROYO',
    seoDescription: 'Explore completed gypsum moulding and interior design work in Kilinochchi by ROYO.',
    faq: [
      {
        question: 'Do you provide interior work in Kilinochchi?',
        answer: 'Yes. We support interior design, gypsum moulding, and finish-led detailing for projects in Kilinochchi.'
      },
      {
        question: 'Can the design direction stay modern and restrained?',
        answer: 'Yes. Gypsum and interior detailing can be tailored to a clean contemporary look as well as more decorative briefs.'
      }
    ]
  },
  {
    slug: 'kuliyapitiya',
    cityName: 'Kuliyapitiya',
    provinceName: 'North Western Province',
    heroImage: '/portfolio/large/Kuliyapitiya/kuliyapitiya-001.webp',
    heroAlt: 'Completed interior work by ROYO in Kuliyapitiya',
    intro: 'Our Kuliyapitiya portfolio reflects a practical, finish-conscious approach to interiors, with tailored gypsum details and a strong focus on how each room is experienced.',
    seoTitle: 'Gypsum Moulding and Interior Design in Kuliyapitiya | ROYO',
    seoDescription: 'Explore completed gypsum moulding and interior design work in Kuliyapitiya by ROYO.',
    faq: [
      {
        question: 'Do you offer gypsum moulding in Kuliyapitiya?',
        answer: 'Yes. We provide gypsum moulding and interior design support for homes and selected commercial spaces in Kuliyapitiya.'
      },
      {
        question: 'Can you support projects across the wider district?',
        answer: 'Yes. Coverage can extend beyond the town area depending on site access and the project scope.'
      }
    ]
  }
]

export const getLocationBySlug = (slug: string) => {
  return locations.find((location) => location.slug === slug)
}

export const getProjectsForLocationSlug = (slug: string) => {
  const location = getLocationBySlug(slug)
  if (!location) return []

  return getPortfolioProjectsByCity(location.cityName)
}
