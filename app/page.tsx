import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import WarpShaderHero from '@/components/ui/wrap-shader'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import GypsumFeature from '@/components/sections/GypsumFeature'
import InteractiveMap from '@/components/sections/InteractiveMap'
import CTASection from '@/components/sections/CTASection'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Royo Gypsum | Interior Design and Gypsum Moulding Sri Lanka',
  description:
    'Explore gypsum moulding, interior design, ceiling works, pantry interiors, wall finishes, roofing, and metal welding services by Royo across Sri Lanka.',
  path: '/',
})

export default function Home() {
  return (
    <div className="min-h-screen bg-off-white">
      <Header />

      {/* Hero Section */}
      <WarpShaderHero
        title="Interior Design - Done Right"
        subtitle="Gypsum moulding is our core expertise, paired with bespoke interior experiences crafted for the discerning lifestyle in Sri Lanka."
      />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Interactive Map */}
      <InteractiveMap showProjects={true} />

      {/* Gypsum Feature */}
      <GypsumFeature />

      {/* CTA Section */}
      <CTASection
        title="Ready to transform your vision into reality?"
        subtitle="Join our list of prestigious clients and experience the pinnacle of South Asian interior design"
        buttons={[
          { label: 'Start a Project', href: '/contact', variant: 'primary' },
          { label: 'View Expertise', href: '/expertise', variant: 'secondary' },
        ]}
        isDark={true}
      />

      <Footer />
    </div>
  )
}
