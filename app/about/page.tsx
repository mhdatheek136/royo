import Image from 'next/image'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import Hero from '@/components/sections/Hero'
import CTASection from '@/components/sections/CTASection'

export const metadata = {
  title: 'About Us - ROYO Interior Design',
  description: 'Learn about ROYO Interior Design, our philosophy, values, and the leadership behind Sri Lanka\'s premier luxury interior design studio.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <Header />

      {/* Hero Section */}
      <Hero
        title="Crafting the Soul of Space"
        subtitle="High-End Luxury Interior Design - Sri Lanka"
      />

      {/* The Visionaries Section */}
      <section className="py-20 md:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-rock-black mb-16">
            The Visionaries
          </h2>

          {/* Founder Profile 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-20">
            <div className="md:col-span-1">
              <div className="relative h-80 md:h-96 overflow-hidden rounded-lg bg-rock-black">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
                  alt="Founder"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-end">
                  <div className="w-full bg-gradient-to-t from-rock-black to-transparent p-6">
                    <h3 className="font-cormorant text-2xl font-bold text-off-white">
                      Malith Perera
                    </h3>
                    <p className="text-star-gold text-sm uppercase tracking-widest font-raleway mt-2">
                      Design Director
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="font-cormorant text-2xl font-bold text-rock-black mb-4">
                Malith Perera - Founder & Design Director
              </h3>
              <p className="text-lg text-rock-black opacity-85 leading-relaxed mb-4">
                Malith's expertise lies in the intricate intensity of materiality and light. A graduate of the Royal Academy of Arts, he specializes in creating bespoke furniture pieces that serve as the focal point for ROYO's most prestigious projects.
              </p>
              <p className="text-lg text-rock-black opacity-85 leading-relaxed">
                His passion for sustainable luxury ensures that every material sourced—from reclaimed timber to hand-woven textiles—tells a story of ethical beauty. Each piece of furniture he creates is a bespoke exploration of form, function, and artistic vision.
              </p>
              <a href="#" className="inline-block mt-6 text-royo-burgundy font-raleway font-semibold uppercase tracking-wider hover:opacity-70 transition-opacity">
                Read Full Bio
              </a>
            </div>
          </div>

          {/* Founder Profile 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start md:grid-cols-3 md:direction-rtl">
            <div className="md:col-span-2">
              <h3 className="font-cormorant text-2xl font-bold text-rock-black mb-4">
                Malith Perera - Design Consultant
              </h3>
              <div className="relative h-80 md:h-96 overflow-hidden rounded-lg bg-gray-200 mb-6 md:mb-0 md:order-first">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop"
                  alt="Design Consultant"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-lg text-rock-black opacity-85 leading-relaxed mb-4">
                Malith's expertise lies in the intricate intensity of materiality and light. A graduate of the Royal Academy of Arts, he specializes in creating bespoke furniture pieces that serve as the focal point for ROYO's most prestigious projects.
              </p>
              <a href="#" className="inline-block text-royo-burgundy font-raleway font-semibold uppercase tracking-wider hover:opacity-70 transition-opacity">
                Read Full Bio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The ROYO Philosophy Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-rock-black mb-16">
            The ROYO Philosophy
          </h2>

          <div className="prose prose-lg max-w-4xl">
            <p className="text-xl text-rock-black opacity-90 leading-relaxed mb-6">
              ROYO Interior Designs is committed to blending Sri Lankan heritage with modern architectural precision. Our narrative is one of elegance, mineral aesthetics, and a deep understanding of the soul within every space.
            </p>
            <p className="text-xl text-rock-black opacity-90 leading-relaxed">
              We believe that luxury is not just an aesthetic—it's a feeling—a harmony between the built environment and the natural spirit of its location. By integrating local craftsmanship with global design standards, we create sanctuaries that transcend time.
            </p>
          </div>

          {/* Heritage Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-20">
            <div className="text-center">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="font-cormorant text-2xl font-bold text-rock-black mb-3">
                Architectural Rigor
              </h3>
              <p className="text-rock-black opacity-75">
                Precision in every dimension of structural integrity and spatial logic.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="font-cormorant text-2xl font-bold text-rock-black mb-3">
                Artisanal Integrity
              </h3>
              <p className="text-rock-black opacity-75">
                Honouring the hands that build. We collaborate with master craftsmen to preserve traditional Sri Lankan techniques.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⏳</div>
              <h3 className="font-cormorant text-2xl font-bold text-rock-black mb-3">
                Timeless Sophistication
              </h3>
              <p className="text-rock-black opacity-75">
                Elegance that never fades. Our designs are curated to transcend generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 md:py-32 bg-royo-burgundy text-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold mb-8">
            Defining the Future of Sri Lankan Luxury
          </h2>
          <p className="text-xl opacity-90 leading-relaxed mb-12">
            Our vision extends beyond the walls we build. We are cultivating a legacy of design excellence that empowers local communities and positions Sri Lanka as a global beacon for sophisticated, culturally-rooted interior architecture.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-star-gold text-royo-burgundy font-raleway font-semibold uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300"
          >
            Join Our Journey
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to work with us?"
        subtitle="Experience the ROYO difference in your next project"
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
