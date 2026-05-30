import type { Metadata } from 'next'

export const siteConfig = {
  name: 'ROYO',
  legalName: 'ROYO',
  url: 'https://www.royo.lk',
  description:
    'Gypsum moulding, interior design, ceiling works, wall finishes, pantry interiors, roofing, and metal welding services across Sri Lanka.',
  email: 'info@royo.lk',
  phones: ['+94701009991', '+94701009992'],
  address: {
    streetAddress: 'No. 119, Bauddhaloka Road, Puwakgas Junction',
    addressLocality: 'Kurunegala',
    addressCountry: 'LK',
  },
}

export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.url).toString()
}

interface PageMetadataOptions {
  title: string
  description: string
  path: string
  image?: string
}

export function createPageMetadata({
  title,
  description,
  path,
  image = '/gypsum-feature.jpg',
}: PageMetadataOptions): Metadata {
  const brandedTitle = title.toLowerCase().includes('royo') ? title : `${title} | ROYO`

  return {
    title: {
      absolute: brandedTitle,
    },
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: brandedTitle,
      description,
      url: path,
      siteName: siteConfig.name,
      images: [{ url: image }],
      locale: 'en_LK',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: brandedTitle,
      description,
      images: [image],
    },
  }
}
