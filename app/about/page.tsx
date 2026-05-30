import Link from 'next/link'
import { AnimatedWatermark } from '@/components/ui/animated-watermark'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import CTASection from '@/components/sections/CTASection'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'About ROYO',
  description: 'Learn about ROYO, our philosophy, values, and design approach in Sri Lanka.',
  path: '/about',
})

import { DraftingCompass, PenTool, Diamond } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <Header />

      {/* The ROYO Philosophy Section */}
      <section className="py-24 md:py-40 bg-white relative overflow-hidden">
        {/* Large Left Watermark */}
        <AnimatedWatermark
          size="60rem"
          className="absolute top-0 -left-64 md:-left-40 lg:-left-20 aspect-square opacity-[0.05] z-0 hidden md:block"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="text-star-gold font-raleway font-bold text-xs uppercase tracking-[0.4em] mb-4">
            Our Heritage
          </p>
          <h2 className="font-cormorant text-5xl md:text-6xl font-bold text-royo-burgundy mb-12">
            The ROYO Philosophy
          </h2>

          <div className="max-w-4xl mx-auto space-y-8 mb-24">
            <p className="text-base md:text-lg text-rock-black opacity-80 leading-relaxed font-raleway">
              ROYO is committed to blending Sri Lankan heritage with modern architectural precision. Our narrative is one of elegance, minimal aesthetics, and a deep understanding of the soul within every space.
            </p>
            <p className="text-base md:text-lg text-rock-black opacity-80 leading-relaxed font-raleway">
              We believe that luxury is not just an aesthetic, but a feeling—a harmony between the built environment and the natural spirit of its location. By integrating local craftsmanship with global design standards, we create sanctuaries that transcend time.
            </p>
          </div>

          {/* Heritage Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-off-white flex items-center justify-center mb-8 shadow-sm">
                <DraftingCompass className="w-6 h-6 text-royo-burgundy" />
              </div>
              <h3 className="font-cormorant text-2xl font-bold text-rock-black mb-4">
                Architectural Rigor
              </h3>
              <p className="text-sm text-rock-black opacity-70 max-w-[240px] leading-relaxed">
                Precision in every dimension. We approach design through a lens of structural integrity and spatial logic.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-off-white flex items-center justify-center mb-8 shadow-sm">
                <PenTool className="w-6 h-6 text-royo-burgundy" />
              </div>
              <h3 className="font-cormorant text-2xl font-bold text-rock-black mb-4">
                Artisanal Integrity
              </h3>
              <p className="text-sm text-rock-black opacity-70 max-w-[240px] leading-relaxed">
                Honouring the hands that build. We collaborate with master craftsmen to preserve traditional Sri Lankan techniques.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-off-white flex items-center justify-center mb-8 shadow-sm">
                <Diamond className="w-6 h-6 text-royo-burgundy" />
              </div>
              <h3 className="font-cormorant text-2xl font-bold text-rock-black mb-4">
                Timeless Sophistication
              </h3>
              <p className="text-sm text-rock-black opacity-70 max-w-[240px] leading-relaxed">
                Elegance that never fades. Our designs are curated to evolve gracefully across generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-24 md:py-40 bg-royo-burgundy text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-cormorant text-5xl md:text-7xl font-bold mb-12 leading-tight">
            Defining the Future of <br /> Sri Lankan Luxury
          </h2>
          <p className="text-lg md:text-xl opacity-80 leading-relaxed mb-16 max-w-3xl mx-auto font-raleway">
            Our vision extends beyond the walls we build. We are cultivating a legacy of design excellence that empowers local communities and positions Sri Lanka as a global beacon for sophisticated, soul-driven architecture.
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-5 bg-[#F8D39E] text-royo-burgundy font-raleway font-bold uppercase tracking-widest text-xs hover:bg-white hover:scale-105 hover:shadow-2xl transition-all duration-300 rounded-xl"
          >
            Join Our Journey
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
