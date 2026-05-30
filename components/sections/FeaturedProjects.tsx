import Link from 'next/link'
import { portfolioProjects } from '@/data/portfolio'
import ProjectCard from './ProjectCard'
import { AnimatedWatermark } from '@/components/ui/animated-watermark'

export default function FeaturedProjects() {
  const featuredSlugs = ['colombo-residential-property-02', 'batticaloa-banquet-hall-01']
  const featured = featuredSlugs
    .map(slug => portfolioProjects.find(project => project.slug === slug))
    .filter(project => project !== undefined)

  return (
    <section className="relative overflow-hidden bg-off-white py-20 md:py-32">
      <AnimatedWatermark
        size="64rem"
        className="absolute top-1/2 -right-48 aspect-square -translate-y-1/2 opacity-[0.05] md:-right-[16rem] lg:-right-[24rem]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="mb-4 text-sm uppercase tracking-widest text-shine-brown">Masterpieces</p>
          <h2 className="mb-6 font-cormorant text-4xl font-bold text-rock-black md:text-5xl">Selected Projects</h2>
          <p className="max-w-2xl text-lg text-rock-black/80">
            A growing record of completed spaces, crafted details, and finish-led interior work across Sri Lanka.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {featured.map(project => (
            <ProjectCard key={project.slug} project={project} variant="featured" />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/work"
            className="inline-block rounded-xl bg-royo-burgundy px-8 py-4 font-semibold uppercase tracking-wider text-off-white transition-all duration-300 hover:scale-105 hover:bg-opacity-90 hover:shadow-2xl"
          >
            Explore All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
