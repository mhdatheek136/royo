import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Brush } from 'lucide-react'
import { AnimatedWatermark } from '@/components/ui/animated-watermark'
import { expertiseAreas } from '@/data/expertise'

export default function GypsumFeature() {
  const additionalServices = expertiseAreas.filter(area => !area.isSignature)

  return (
    <section className="py-24 md:py-36 bg-off-white bg-gradient-to-t from-royo-burgundy/15 to-off-white relative overflow-hidden">
      {/* Right Watermark */}
      <AnimatedWatermark
        size="36rem"
        className="absolute top-1/2 -right-40 md:-right-[12rem] lg:-right-[18rem] -translate-y-1/2 aspect-square opacity-[0.05]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image Part */}
          <div className="relative h-96 md:h-[600px] rounded-2xl overflow-visible order-2 lg:order-1">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/gypsum-feature.jpg"
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
              className="inline-block px-10 py-5 bg-royo-burgundy text-white font-raleway font-bold uppercase tracking-widest text-xs hover:bg-rock-black hover:scale-105 hover:shadow-2xl transition-all duration-300 rounded-xl"
            >
              Explore Service
            </Link>
          </div>
        </div>

        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-shine-brown">Additional Services</p>
          <h3 className="font-cormorant text-3xl font-bold text-rock-black md:text-4xl">Craft expertise beyond gypsum moulding</h3>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {additionalServices.map(service => (
            <Link
              key={service.slug}
              href={`/expertise#${service.slug}`}
              className="group overflow-hidden rounded-[1.5rem] border border-white/70 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.coverImage.thumb}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between gap-4 p-5">
                <h4 className="font-cormorant text-2xl font-bold leading-tight text-rock-black transition-colors group-hover:text-royo-burgundy">
                  {service.title}
                </h4>
                <ArrowRight className="h-5 w-5 shrink-0 text-royo-burgundy transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}


