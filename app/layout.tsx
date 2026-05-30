import type { Metadata } from 'next'
import { Cormorant_Garamond, Raleway } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { absoluteUrl, siteConfig } from '@/lib/seo'
import './globals.css'

const cormorant = Cormorant_Garamond({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap'
})

const raleway = Raleway({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'ROYO - Gypsum and Interior Design Sri Lanka',
    template: '%s | ROYO',
  },
  description: siteConfig.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ROYO - Gypsum and Interior Design Sri Lanka',
    description: siteConfig.description,
    url: '/',
    siteName: siteConfig.name,
    images: [{ url: '/gypsum-feature.jpg' }],
    locale: 'en_LK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ROYO - Gypsum and Interior Design Sri Lanka',
    description: siteConfig.description,
    images: ['/gypsum-feature.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${siteConfig.url}/#business`,
    name: siteConfig.legalName,
    url: siteConfig.url,
    logo: absoluteUrl('/royo wordmark long.svg'),
    image: absoluteUrl('/gypsum-feature.jpg'),
    email: siteConfig.email,
    telephone: siteConfig.phones[0],
    address: {
      '@type': 'PostalAddress',
      ...siteConfig.address,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Sri Lanka',
    },
  }

  return (
    <html lang="en" className={`${cormorant.variable} ${raleway.variable}`}>
      <body className="font-raleway antialiased bg-off-white text-rock-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
