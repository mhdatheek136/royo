import Link from 'next/link'
import { locations } from '@/data/locations'
import MotionReveal from '@/components/ui/motion-reveal'

interface LocationGridProps {
  title?: string
  subtitle?: string
  limit?: number
  showViewAll?: boolean
}

export default function LocationGrid({
  title = 'Areas We Serve',
  subtitle = 'Explore city-specific pages for gypsum moulding and interior design across the locations where our work already has a presence.',
  limit,
  showViewAll = false,
}: LocationGridProps) {
  const visibleLocations = typeof limit === 'number' ? locations.slice(0, limit) : locations

  return (
    <section className="py-20 md:py-28 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="text-sm font-raleway uppercase tracking-widest text-shine-brown mb-4">
            Local Presence
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-royo-burgundy mb-6">
            {title}
          </h2>
          <p className="text-lg text-rock-black opacity-80 leading-relaxed">
            {subtitle} We serve clients across Sri Lanka with all-island project coverage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {visibleLocations.map((location, index) => (
            <MotionReveal key={location.slug} delay={Math.min(index * 0.06, 0.24)}>
              <Link
                href={`/locations/${location.slug}`}
                className="group block rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <p className="text-[11px] uppercase tracking-[0.25em] text-shine-brown mb-4">
                  {location.provinceName}
                </p>
                <h3 className="font-cormorant text-3xl font-bold text-rock-black group-hover:text-royo-burgundy transition-colors">
                  {location.cityName}
                </h3>
                <p className="mt-4 text-sm md:text-base text-rock-black opacity-75 leading-relaxed">
                  Gypsum moulding and interior design tailored to the pace, character, and style of {location.cityName}.
                </p>
                <span className="inline-block mt-6 text-xs font-raleway font-bold uppercase tracking-widest text-royo-burgundy">
                  Explore Location
                </span>
              </Link>
            </MotionReveal>
          ))}
        </div>

        {showViewAll && limit && locations.length > limit && (
          <div className="mt-12">
            <Link
              href="/locations"
              className="inline-block px-8 py-4 bg-royo-burgundy text-off-white font-raleway font-semibold uppercase tracking-wider hover:bg-opacity-90 hover:scale-105 hover:shadow-2xl transition-all duration-300 rounded-xl"
            >
              View All Locations
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
