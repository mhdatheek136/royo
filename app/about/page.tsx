import Image from 'next/image'
import Link from 'next/link'
import { AnimatedWatermark } from '@/components/ui/animated-watermark'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import Hero from '@/components/sections/Hero'
import CTASection from '@/components/sections/CTASection'

export const metadata = {
  title: 'About Us - ROYO Interior Design',
  description: 'Learn about ROYO Interior Design, our philosophy, values, and the leadership behind Sri Lanka\'s premier luxury interior design studio.',
}

import { DraftingCompass, PenTool, Diamond } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <Header />

      {/* Hero Section */}
      <Hero
        title="Crafting the Soul of Space"
        subtitle="High-End Luxury Interior Design - Sri Lanka"
        showGradient={true}
      />

      {/* The Visionaries Section */}
      <section className="py-20 md:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-royo-burgundy mb-16 underline decoration-1 underline-offset-8">
            The Visionaries
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Founder 1 */}
            <div className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-2xl mb-8">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop"
                  alt="Founder"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="font-cormorant text-3xl font-bold text-rock-black mb-2">
                Malith Perera
              </h3>
              <p className="text-star-gold font-raleway text-sm uppercase tracking-widest mb-6">
                Founder & Design Director
              </p>
              <p className="text-rock-black opacity-80 leading-relaxed font-raleway">
                A visionary in architectural volume and material tension. Malith specializes in merging heritage craftsmanship with global modernism, ensuring every ROYO project is a masterpiece of precision and soul.
              </p>
            </div>

            {/* Founder 2 */}
            <div className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-2xl mb-8">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop"
                  alt="Co-Founder"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="font-cormorant text-3xl font-bold text-rock-black mb-2">
                Sarah Alwis
              </h3>
              <p className="text-star-gold font-raleway text-sm uppercase tracking-widest mb-6">
                Creative Consultant
              </p>
              <p className="text-rock-black opacity-80 leading-relaxed font-raleway">
                With a background in fine arts and lighting design, Sarah brings an ethereal quality to the ROYO aesthetic. Her focus on sensory experiences ensures that our spaces aren't just seen, but felt.
              </p>
            </div>
          </div>
        </div>
      </section>

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
              ROYO Interior Designs is committed to blending Sri Lankan heritage with modern architectural precision. Our narrative is one of elegance, minimal aesthetics, and a deep understanding of the soul within every space.
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
