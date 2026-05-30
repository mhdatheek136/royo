import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import Hero from '@/components/sections/Hero'
import ProjectGrid from '@/components/sections/ProjectGrid'
import InteractiveMap from '@/components/sections/InteractiveMap'
import CTASection from '@/components/sections/CTASection'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Interior Design and Gypsum Project Portfolio',
  description: 'Explore our portfolio of luxury interior design projects across Sri Lanka. Residential and commercial projects showcasing our expertise in gypsum moulding and interior design.',
  path: '/work',
})

import { TextAnimate } from '@/components/ui/text-animate'

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <Header />

      {/* Custom Header Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-royo-burgundy font-raleway font-bold text-xs md:text-sm uppercase tracking-[0.4em] mb-4">
            Portfolio
          </p>
          <h1 className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-bold text-royo-burgundy mb-8 leading-[0.9]">
            <TextAnimate text="Selected Works" />
          </h1>
          <p className="text-base md:text-lg text-rock-black opacity-80 max-w-2xl font-raleway leading-relaxed">
            A curated showcase of luxury interior masterpieces, where timeless elegance meets modern sophistication.
          </p>
        </div>
      </section>

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
