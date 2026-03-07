import Image from 'next/image'
import Link from 'next/link'

export default function GypsumFeature() {
  return (
    <section className="py-20 md:py-32 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-raleway uppercase tracking-widest text-shine-brown mb-6">
              Signature Expertise
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-rock-black mb-6">
              Artisanal Gypsum Moulding
            </h2>
            <p className="text-lg text-rock-black opacity-85 mb-6 leading-relaxed">
              To honour the built environment, we integrate bespoke gypsum mouldings along ceilings and walls. These patterns are hand-sketched by our senior designers, drawing inspiration from both local architecture and traditional Sri Lankan motifs.
            </p>
            <p className="text-lg text-rock-black opacity-85 mb-8 leading-relaxed">
              Our design team focused on the "secret wall" concept, introducing heritage craftsmanship that breathes life into every interior. Each piece of gypsum work is executed with meticulous precision by master craftsmen, transforming flat surfaces into sculptural landscapes.
            </p>
            <Link
              href="/expertise"
              className="inline-block px-8 py-4 bg-royo-burgundy text-off-white font-raleway font-semibold uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300"
            >
              Explore the Craft
            </Link>
          </div>

          {/* Image */}
          <div className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
              alt="Artisanal Gypsum Moulding Detail"
              fill
              className="object-cover"
              loading="eager"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
