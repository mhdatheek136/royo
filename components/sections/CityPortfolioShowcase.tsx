import { getPortfolioCityByName, getPortfolioProjectsByCity } from '@/data/portfolio'
import PortfolioGallery from './PortfolioGallery'

interface CityPortfolioShowcaseProps {
  cityName: string
}

export default function CityPortfolioShowcase({ cityName }: CityPortfolioShowcaseProps) {
  const city = getPortfolioCityByName(cityName)
  const projects = getPortfolioProjectsByCity(cityName)

  if (!city || city.gallery.length === 0) return null

  const categories = Array.from(new Set(projects.map(project => project.category)))

  return (
    <section className="bg-off-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-widest text-shine-brown">Local Portfolio</p>
          <h2 className="font-cormorant text-4xl font-bold text-royo-burgundy md:text-5xl">
            Completed Work in {cityName}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-rock-black/80">
            Explore the complete city collection first, followed by the individual project groups and their specialist categories.
          </p>
        </div>

        <PortfolioGallery images={city.gallery} title={`All ${cityName} Projects`} initialLimit={9} />

        <div className="mt-24 space-y-24">
          {categories.map(category => {
            const categoryProjects = projects.filter(project => project.category === category)
            return (
              <section key={category}>
                <p className="mb-10 text-xs font-bold uppercase tracking-[0.28em] text-shine-brown">{category}</p>
                <div className="space-y-16">
                  {categoryProjects.map(project => (
                    <PortfolioGallery
                      key={project.slug}
                      images={project.images}
                      title={project.projectGroup || project.title}
                      linkHref={`/work/${project.slug}`}
                      initialLimit={6}
                    />
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </section>
  )
}
