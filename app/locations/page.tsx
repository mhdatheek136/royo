import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import LocationGrid from '@/components/sections/LocationGrid'
import CTASection from '@/components/sections/CTASection'
import { BackgroundPaths } from '@/components/ui/background-paths'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Interior Design and Gypsum Moulding Across Sri Lanka',
  description:
    'Explore the Sri Lankan cities where Royo offers gypsum moulding and interior design services, with city-specific pages shaped around real project presence.',
  path: '/locations',
})

export default function LocationsIndexPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <Header />

      <BackgroundPaths
        title="Areas We Serve"
        subtitle="Browse city pages shaped around where our work already has local relevance, from gypsum moulding and feature detailing to broader interior design direction, with all-island service coverage across Sri Lanka."
      />

      <LocationGrid
        subtitle="Each location page brings together local search intent, service direction, and project proof where it genuinely exists."
      />

      <CTASection
        title="Planning a project in your city?"
        subtitle="Reach out to discuss gypsum moulding, interior design, and tailored finishing for your space."
        buttons={[
          { label: 'Contact Us', href: '/contact', variant: 'primary' },
          { label: 'View Expertise', href: '/expertise', variant: 'secondary' },
        ]}
        isDark={true}
      />

      <Footer />
    </div>
  )
}
