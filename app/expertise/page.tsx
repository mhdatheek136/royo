import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import CTASection from '@/components/sections/CTASection'
import LocationGrid from '@/components/sections/LocationGrid'
import PortfolioGallery from '@/components/sections/PortfolioGallery'
import { expertiseAreas } from '@/data/expertise'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Gypsum Moulding and Interior Expertise',
  description: 'Discover ROYO expertise in gypsum works, ceiling works, wall finishes, pantry interiors, roofing, and metal welding across Sri Lanka.',
  path: '/expertise',
  image: '/expertise-gypsum-moulding.png',
})

import { ArrowRight, History, UserCheck, Globe, Infinity } from 'lucide-react'

import { BackgroundPaths } from '@/components/ui/background-paths'

export default function ExpertisePage() {
  const signatureService = expertiseAreas.find(area => area.isSignature)
  const additionalServices = expertiseAreas.filter(area => !area.isSignature)

  return (
    <div className="min-h-screen bg-off-white">
      <Header />

      {/* Hero Section */}
      <BackgroundPaths
        title="Our Expertise"
        subtitle="The intersection of heritage craftsmanship and modern architectural precision. We define spaces that resonate with the soul."
      />

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
                <span className="text-lg">-&gt;</span>
              </Link>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative p-4 md:p-6 bg-white rounded-sm shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/expertise-gypsum-moulding.png"
                    alt="White gypsum moulding wall design"
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

      {/* Service Navigation Section */}
      <section className="py-24 md:py-36 bg-off-white bg-gradient-to-b from-white to-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-shine-brown">Built Expertise</p>
            <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-bold text-royo-burgundy">
              Specialist Services
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-rock-black/70 md:text-lg">
              Explore the practical craft areas behind our completed interiors, from signature gypsum work to pantry detailing and structural metal fabrication.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {additionalServices.map(service => (
              <Link
                key={service.slug}
                href={`#${service.slug}`}
                className="group overflow-hidden rounded-[1.75rem] border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.coverImage.thumb}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between gap-4 p-6">
                  <h3 className="font-cormorant text-2xl font-bold leading-tight text-rock-black group-hover:text-royo-burgundy">
                    {service.title}
                  </h3>
                  <ArrowRight className="h-5 w-5 shrink-0 text-royo-burgundy transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-20 max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-shine-brown">Completed Craft</p>
            <h2 className="font-cormorant text-4xl font-bold text-royo-burgundy md:text-6xl">Real work, presented with clarity</h2>
            <p className="mt-6 text-lg leading-relaxed text-rock-black/75">
              Browse a selection of completed work across our signature gypsum craft and additional specialist services. Open any image for a closer look.
            </p>
          </div>

          <div className="space-y-24">
            {signatureService && (
              <section id={signatureService.slug} className="scroll-mt-24">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.26em] text-shine-brown">Signature Expertise</p>
                <p className="mb-10 max-w-3xl leading-relaxed text-rock-black/70">{signatureService.description}</p>
                <PortfolioGallery images={signatureService.images} title={signatureService.title} initialLimit={9} />
              </section>
            )}

            {additionalServices.map(service => (
              <section key={service.slug} id={service.slug} className="scroll-mt-24 border-t border-royo-burgundy/10 pt-16">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.26em] text-shine-brown">Specialist Service</p>
                <p className="mb-10 max-w-3xl leading-relaxed text-rock-black/70">{service.description}</p>
                <PortfolioGallery images={service.images} title={service.title} initialLimit={6} />
              </section>
            ))}
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
      <section className="py-24 md:py-40 bg-white relative overflow-hidden">
        {/* Subtle Background Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-royo-burgundy/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
            <p className="text-sm font-raleway font-bold uppercase tracking-[0.4em] text-shine-brown mb-6">
              The ROYO Difference
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-bold text-royo-burgundy mb-8">
              Why Choose ROYO
            </h2>
            <div className="w-24 h-px bg-royo-burgundy/30 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Value 1 */}
            <div className="group p-10 md:p-12 bg-off-white rounded-[2rem] border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:shadow-royo-burgundy/10 hover:-translate-y-2">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-10 group-hover:bg-royo-burgundy transition-colors duration-500">
                <History className="w-8 h-8 text-royo-burgundy group-hover:text-white transition-colors duration-500" strokeWidth={1} />
              </div>
              <h3 className="font-cormorant text-2xl lg:text-3xl font-bold text-rock-black mb-6">
                Heritage & Innovation
              </h3>
              <p className="text-gray-600 font-raleway leading-relaxed">
                We blend Sri Lankan craftsmanship traditions with contemporary design methodologies, creating spaces that honor the past while embracing the future.
              </p>
            </div>

            {/* Value 2 */}
            <div className="group p-10 md:p-12 bg-white rounded-[2rem] border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:shadow-royo-burgundy/10 hover:-translate-y-2">
              <div className="w-16 h-16 bg-off-white rounded-2xl flex items-center justify-center shadow-sm mb-10 group-hover:bg-royo-burgundy transition-colors duration-500">
                <UserCheck className="w-8 h-8 text-royo-burgundy group-hover:text-white transition-colors duration-500" strokeWidth={1} />
              </div>
              <h3 className="font-cormorant text-2xl lg:text-3xl font-bold text-rock-black mb-6">
                Personalized Attention
              </h3>
              <p className="text-gray-600 font-raleway leading-relaxed">
                Every project receives dedicated attention from our principals, ensuring your vision becomes reality with unwavering focus and meticulous care.
              </p>
            </div>

            {/* Value 3 */}
            <div className="group p-10 md:p-12 bg-white rounded-[2rem] border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:shadow-royo-burgundy/10 hover:-translate-y-2">
              <div className="w-16 h-16 bg-off-white rounded-2xl flex items-center justify-center shadow-sm mb-10 group-hover:bg-royo-burgundy transition-colors duration-500">
                <Globe className="w-8 h-8 text-royo-burgundy group-hover:text-white transition-colors duration-500" strokeWidth={1} />
              </div>
              <h3 className="font-cormorant text-2xl lg:text-3xl font-bold text-rock-black mb-6">
                Global Network
              </h3>
              <p className="text-gray-600 font-raleway leading-relaxed">
                Access to the world&apos;s finest materials, artisans, and manufacturers, ensuring uncompromising quality in every detail and texture.
              </p>
            </div>

            {/* Value 4 */}
            <div className="group p-10 md:p-12 bg-off-white rounded-[2rem] border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:shadow-royo-burgundy/10 hover:-translate-y-2">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-10 group-hover:bg-royo-burgundy transition-colors duration-500">
                <Infinity className="w-8 h-8 text-royo-burgundy group-hover:text-white transition-colors duration-500" strokeWidth={1} />
              </div>
              <h3 className="font-cormorant text-2xl lg:text-3xl font-bold text-rock-black mb-6">
                Timeless Design
              </h3>
              <p className="text-gray-600 font-raleway leading-relaxed">
                Our designs transcend fleeting trends, creating bespoke spaces that age gracefully and remain sophisticated and relevant across generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <LocationGrid
        limit={6}
        showViewAll={true}
        subtitle="Browse city-specific pages built around where our work already has local project relevance, from Kurunegala and Colombo to Kandy and beyond."
      />

      <Footer />
    </div>
  )
}
