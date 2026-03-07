import Image from 'next/image'
import Link from 'next/link'
import { Home, Lightbulb, Grid3X3, Brush } from 'lucide-react'

export default function GypsumFeature() {
  return (
    <section className="py-24 md:py-36 bg-off-white bg-gradient-to-t from-royo-burgundy/15 to-off-white relative overflow-hidden">
      {/* Right Watermark */}
      <div className="absolute top-1/2 -right-40 md:-right-[12rem] lg:-right-[18rem] -translate-y-1/2 w-80 md:w-[24rem] lg:w-[36rem] aspect-square opacity-[0.05] pointer-events-none">
        <Image
          src="/icon.svg"
          alt=""
          fill
          className="object-contain object-left"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image Part */}
          <div className="relative h-96 md:h-[600px] rounded-2xl overflow-visible order-2 lg:order-1">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=1600&fit=crop"
                alt="Artisanal Gypsum Moulding Detail"
                fill
                className="object-cover"
                loading="eager"
                priority
              />
            </div>

            {/* Floating Icon Badge */}
            <div className="absolute -bottom-10 right-10 md:right-20 bg-star-gold p-6 rounded-xl shadow-xl z-20 transform hover:scale-110 transition-transform duration-300">
              <Brush className="text-royo-burgundy w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
            </div>
          </div>

          {/* Content Part */}
          <div className="order-1 lg:order-2">
            <p className="text-xs md:text-sm font-raleway font-bold uppercase tracking-[0.2em] text-royo-burgundy mb-6">
              Core Expertise
            </p>
            <h2 className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-bold text-royo-burgundy mb-8 leading-[1.1]">
              Gypsum<br />Moulding
            </h2>
            <p className="text-gray-600 font-raleway text-sm md:text-base leading-relaxed mb-8 max-w-lg">
              Our signature craft. We specialize in intricate gypsum work that defines the architectural character of luxury spaces. From classic Victorian cornices to contemporary minimalist coffers, our artisans bring precision to every inch.
            </p>
            <Link
              href="/expertise"
              className="inline-block px-10 py-5 bg-royo-burgundy text-white font-raleway font-bold uppercase tracking-widest text-xs hover:bg-rock-black transition-all duration-300 shadow-lg"
            >
              Explore Service
            </Link>
          </div>
        </div>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#EAE5E0] p-10 rounded-2xl transition-all duration-300 hover:shadow-xl group">
            <div className="mb-6 text-royo-burgundy">
              <Home className="w-8 h-8 opacity-80" strokeWidth={1} />
            </div>
            <h3 className="font-cormorant text-2xl font-bold text-rock-black mb-4">
              Space Planning
            </h3>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-raleway">
              Optimizing luxury through architectural flow and intentional placement.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#EAE5E0] p-10 rounded-2xl transition-all duration-300 hover:shadow-xl group">
            <div className="mb-6 text-royo-burgundy">
              <Lightbulb className="w-8 h-8 opacity-80" strokeWidth={1} />
            </div>
            <h3 className="font-cormorant text-2xl font-bold text-rock-black mb-4">
              Lighting Design
            </h3>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-raleway">
              Atmospheric layering that highlights texture, form, and architectural detail.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#EAE5E0] p-10 rounded-2xl transition-all duration-300 hover:shadow-xl group">
            <div className="mb-6 text-royo-burgundy">
              <Grid3X3 className="w-8 h-8 opacity-80" strokeWidth={1} />
            </div>
            <h3 className="font-cormorant text-2xl font-bold text-rock-black mb-4">
              Material Curation
            </h3>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-raleway">
              Sourcing the finest marbles, timbers, and fabrics from around the globe.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


