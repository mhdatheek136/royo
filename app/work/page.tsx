import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import Hero from '@/components/sections/Hero'
import ProjectGrid from '@/components/sections/ProjectGrid'
import InteractiveMap from '@/components/sections/InteractiveMap'
import CTASection from '@/components/sections/CTASection'

export const metadata = {
  title: 'Work - ROYO Interior Design',
  description: 'Explore our portfolio of luxury interior design projects across Sri Lanka. Residential and commercial projects showcasing our expertise in gypsum moulding and interior design.',
}

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <Header />

      {/* Hero Section */}
      <Hero
        title="Selected Works"
        subtitle="A curated showcase of luxury interior masterpieces, where timeless elegance meets modern sophistication."
      />

      {/* Project Grid with Filters */}
      <ProjectGrid />

      {/* Interactive Map */}
      <InteractiveMap showProjects={true} />

      {/* CTA Section */}
      <CTASection
        title="Ready to transform your vision into reality?"
        subtitle="Join our list of prestigious clients and experience the pinnacle of interior design"
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
