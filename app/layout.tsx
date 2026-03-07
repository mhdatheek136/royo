import type { Metadata } from 'next'
import { Cormorant_Garamond, Raleway } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
  title: 'ROYO - Luxury Interior Design Sri Lanka',
  description: 'High-end luxury interior design and gypsum moulding specialist based in Sri Lanka. Showcasing bespoke interior projects across the country.',
  generator: 'v0.app',
  openGraph: {
    title: 'ROYO - Luxury Interior Design Sri Lanka',
    description: 'High-end luxury interior design and gypsum moulding specialist based in Sri Lanka',
    url: 'https://royointeriors.com',
    siteName: 'ROYO',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${raleway.variable}`}>
      <body className="font-raleway antialiased bg-off-white text-rock-black">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
