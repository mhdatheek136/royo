import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import CTASection from '@/components/sections/CTASection'

export const metadata = {
  title: 'Expertise - ROYO Interior Design',
  description: 'Discover our core expertise in luxury interior design, gypsum moulding, space planning, lighting design, and material curation.',
}

import { Home, Lightbulb, Grid3X3, Brush } from 'lucide-react'

export default function ExpertisePage() {
  return (
    <div className="min-h-screen bg-off-white">
      <Header />

      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-royo-burgundy relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-off-white mb-8">
              Our Expertise
            </h1>
            <p className="text-lg md:text-xl text-off-white opacity-90 max-w-2xl mx-auto font-raleway leading-relaxed">
              The intersection of heritage craftsmanship and modern architectural precision. We define spaces that resonate with the soul.
            </p>
          </div>
        </div>
      </section>

      {/* Gypsum Moulding Section - Prominent */}
      <section className="py-24 md:py-36 bg-off-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Text Content */}
            <div>
              <p className="text-sm font-raleway font-bold uppercase tracking-[0.3em] text-shine-brown mb-6">
                Signature Craft
              </p>
              <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-bold text-royo-burgundy mb-10 leading-tight">
                The Art of Precision: Gypsum Moulding
              </h2>

              <p className="text-base md:text-lg text-rock-black opacity-80 leading-relaxed mb-8 font-raleway">
                Our signature gypsum work celebrates the timeless artistry of heritage moulding. Each curve and contour is executed with meticulous precision by master craftsmen, transforming flat surfaces into sculptural landscapes.
              </p>

              <p className="text-base md:text-lg text-rock-black opacity-80 leading-relaxed mb-12 font-raleway">
                From classical cornices to bespoke contemporary textures, we revive an ancient medium for the modern interior, ensuring every corner reflects a legacy of luxury.
              </p>

              <Link
                href="/work"
                className="group inline-flex items-center gap-4 text-royo-burgundy font-raleway font-bold uppercase tracking-widest text-xs hover:gap-6 transition-all duration-300"
              >
                <span>Explore the Craft</span>
                <span className="text-lg">→</span>
              </Link>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative p-4 md:p-6 bg-white rounded-sm shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1620619767323-b95a89183081?w=1200&h=1500&fit=crop"
                    alt="Gypsum Moulding Detail"
                    fill
                    className="object-cover"
                    loading="eager"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Disciplines Section */}
      <section className="py-24 md:py-36 bg-off-white bg-gradient-to-b from-white to-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-bold text-royo-burgundy">
              Core Disciplines
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Discipline 1: Space Planning */}
            <div className="bg-[#EAE5E0] p-12 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group">
              <div className="mb-8 text-royo-burgundy group-hover:scale-110 transition-transform duration-300">
                <Home className="w-10 h-10 opacity-80" strokeWidth={1} />
              </div>
              <h3 className="font-cormorant text-2xl lg:text-3xl font-bold text-rock-black mb-6">
                Space Planning
              </h3>
              <p className="text-gray-600 font-raleway leading-relaxed text-sm md:text-base">
                A rigorous focus on flow, architectural volume, and intentional placement. We treat every room as a canvas, balancing functionality with an ethereal movement through space.
              </p>
            </div>

            {/* Discipline 2: Lighting Design */}
            <div className="bg-[#EAE5E0] p-12 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group">
              <div className="mb-8 text-royo-burgundy group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="w-10 h-10 opacity-80" strokeWidth={1} />
              </div>
              <h3 className="font-cormorant text-2xl lg:text-3xl font-bold text-rock-black mb-4">
                Lighting Design
              </h3>
              <p className="text-gray-600 font-raleway leading-relaxed text-sm md:text-base">
                Atmospheric layering that defines texture and form. Our lighting strategies are calculated to evoke emotion, highlighting architectural features while maintaining intimate warmth.
              </p>
            </div>

            {/* Discipline 3: Material Curation */}
            <div className="bg-[#EAE5E0] p-12 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group">
              <div className="mb-8 text-royo-burgundy group-hover:scale-110 transition-transform duration-300">
                <Grid3X3 className="w-10 h-10 opacity-80" strokeWidth={1} />
              </div>
              <h3 className="font-cormorant text-2xl lg:text-3xl font-bold text-rock-black mb-4">
                Material Curation
              </h3>
              <p className="text-gray-600 font-raleway leading-relaxed text-sm md:text-base">
                Ethical sourcing of rare materials, luxury textiles and hand-woven finishes. We select materials that age gracefully, creating tactile narratives of luxury and permanence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Methodology Section */}
      <section className="py-20 md:py-32 bg-royo-burgundy text-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-center mb-16">
            Our Design Methodology
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div>
              <div className="text-4xl font-bold text-star-gold mb-4">01</div>
              <h3 className="font-cormorant text-2xl font-bold mb-4">
                Consultation
              </h3>
              <p className="text-off-white/80 leading-relaxed">
                An in-depth dialogue to understand your lifestyle, aspirations, and the emotional resonance you desire within your space.
              </p>
            </div>

            {/* Step 2 */}
            <div>
              <div className="text-4xl font-bold text-star-gold mb-4">02</div>
              <h3 className="font-cormorant text-2xl font-bold mb-4">
                Concept
              </h3>
              <p className="text-off-white/80 leading-relaxed">
                Developing a cohesive visual and structural language through mood boards, material samples, and architectural renderings.
              </p>
            </div>

            {/* Step 3 */}
            <div>
              <div className="text-4xl font-bold text-star-gold mb-4">03</div>
              <h3 className="font-cormorant text-2xl font-bold mb-4">
                Curation
              </h3>
              <p className="text-off-white/80 leading-relaxed">
                Sourcing the finest materials, bespoke furniture, and finishing touches from artisans and suppliers worldwide.
              </p>
            </div>

            {/* Step 4 */}
            <div>
              <div className="text-4xl font-bold text-star-gold mb-4">04</div>
              <h3 className="font-cormorant text-2xl font-bold mb-4">
                Execution
              </h3>
              <p className="text-off-white/80 leading-relaxed">
                Meticulous management of construction and installation to ensure every vision is realized with precision and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ROYO Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-rock-black text-center mb-16">
            Why Choose ROYO
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="border-l-4 border-royo-burgundy pl-6 md:pl-8">
              <h3 className="font-cormorant text-2xl font-bold text-rock-black mb-3">
                Heritage & Innovation
              </h3>
              <p className="text-rock-black opacity-75 leading-relaxed">
                We blend Sri Lankan craftsmanship traditions with contemporary design methodologies, creating spaces that honor the past while embracing the future.
              </p>
            </div>

            <div className="border-l-4 border-royo-burgundy pl-6 md:pl-8">
              <h3 className="font-cormorant text-2xl font-bold text-rock-black mb-3">
                Personalized Attention
              </h3>
              <p className="text-rock-black opacity-75 leading-relaxed">
                Every project receives dedicated attention from our principals, ensuring your vision becomes reality with unwavering focus.
              </p>
            </div>

            <div className="border-l-4 border-royo-burgundy pl-6 md:pl-8">
              <h3 className="font-cormorant text-2xl font-bold text-rock-black mb-3">
                Global Network
              </h3>
              <p className="text-rock-black opacity-75 leading-relaxed">
                Access to the world's finest materials, artisans, and manufacturers, ensuring uncompromising quality in every detail.
              </p>
            </div>

            <div className="border-l-4 border-royo-burgundy pl-6 md:pl-8">
              <h3 className="font-cormorant text-2xl font-bold text-rock-black mb-3">
                Timeless Design
              </h3>
              <p className="text-rock-black opacity-75 leading-relaxed">
                Our designs transcend trends, creating spaces that age gracefully and remain sophisticated across generations.
              </p>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  )
}
