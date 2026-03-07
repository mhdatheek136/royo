import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import CTASection from '@/components/sections/CTASection'

export const metadata = {
  title: 'Expertise - ROYO Interior Design',
  description: 'Discover our core expertise in luxury interior design, gypsum moulding, space planning, lighting design, and material curation.',
}

export default function ExpertisePage() {
  return (
    <div className="min-h-screen bg-off-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-royo-burgundy text-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-cormorant text-5xl md:text-6xl font-bold leading-tight text-center mb-6">
            Our Expertise
          </h1>
          <p className="text-xl text-center opacity-90 max-w-2xl mx-auto">
            The intersection of heritage craftsmanship and modern architectural precision. We define spaces that resonate with the soul.
          </p>
        </div>
      </section>

      {/* Gypsum Moulding Section - Prominent */}
      <section className="py-20 md:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <p className="text-sm font-raleway uppercase tracking-widest text-royo-burgundy mb-6">
                Signature Expertise
              </p>
              <h2 className="font-cormorant text-5xl font-bold text-rock-black mb-8">
                The Art of Precision: Gypsum Moulding
              </h2>
              
              <p className="text-lg text-rock-black opacity-85 leading-relaxed mb-6">
                Our signature gypsum work celebrates the timeless artistry of heritage moulding. Each curve and contour is executed with meticulous precision by master craftsmen, transforming flat surfaces into sculptural landscapes.
              </p>

              <p className="text-lg text-rock-black opacity-85 leading-relaxed mb-8">
                From classical cornices to bespoke contemporary textures, we revive ancient mediums for the modern interior—ensuring every piece of furniture was custom-crafted to bridge the tension between unique silhouettes and modern ergonomic comfort. Every corner reflects a legacy of luxury.
              </p>

              <Link
                href="/work"
                className="inline-block px-8 py-4 bg-royo-burgundy text-off-white font-raleway font-semibold uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300"
              >
                Explore the Craft
              </Link>
            </div>

            {/* Image */}
            <div className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
                alt="Gypsum Moulding Detail"
                fill
                className="object-cover"
                loading="eager"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Disciplines Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-rock-black text-center mb-16">
            Core Disciplines
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Discipline 1: Space Planning */}
            <div className="bg-off-white p-8 md:p-10 rounded-lg">
              <div className="text-4xl mb-6">🏠</div>
              <h3 className="font-cormorant text-2xl font-bold text-rock-black mb-4">
                Space Planning
              </h3>
              <p className="text-rock-black opacity-75 leading-relaxed">
                A rigorous focus on flow, architectural volume, and intentional placement. We treat every room as a canvas, balancing functionality with an ethereal movement through space.
              </p>
            </div>

            {/* Discipline 2: Lighting Design */}
            <div className="bg-off-white p-8 md:p-10 rounded-lg">
              <div className="text-4xl mb-6">💡</div>
              <h3 className="font-cormorant text-2xl font-bold text-rock-black mb-4">
                Lighting Design
              </h3>
              <p className="text-rock-black opacity-75 leading-relaxed">
                Atmospheric layering that defines texture and form. Our lighting strategies are calculated to evoke emotion, highlighting architectural features while maintaining intimate warmth.
              </p>
            </div>

            {/* Discipline 3: Material Curation */}
            <div className="bg-off-white p-8 md:p-10 rounded-lg">
              <div className="text-4xl mb-6">🎨</div>
              <h3 className="font-cormorant text-2xl font-bold text-rock-black mb-4">
                Material Curation
              </h3>
              <p className="text-rock-black opacity-75 leading-relaxed">
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

      {/* CTA Section */}
      <CTASection
        title="Ready to experience sophisticated design?"
        subtitle="Let's craft a space that tells your story"
        buttons={[
          { label: 'Start a Project', href: '/contact', variant: 'primary' },
          { label: 'View Our Work', href: '/work', variant: 'secondary' },
        ]}
        isDark={true}
      />

      <Footer />
    </div>
  )
}
