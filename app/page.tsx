import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import Hero from '@/components/sections/Hero'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import GypsumFeature from '@/components/sections/GypsumFeature'
import InteractiveMap from '@/components/sections/InteractiveMap'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  return (
    <div className="min-h-screen bg-off-white">
      <Header />

      {/* Hero Section */}
      <Hero
        title="Interior Design - Done Right"
        subtitle="Bespoke interior experiences crafted for the discerning lifestyle in the heart of Sri Lanka"
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
