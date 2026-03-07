import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard'
import { AnimatedWatermark } from '@/components/ui/animated-watermark'

export default function FeaturedProjects() {
  // Get 2 featured projects
  const featured = projects.slice(0, 2)

  return (
    <section className="relative py-20 md:py-32 bg-off-white overflow-hidden">
      {/* Right Watermark */}
      <AnimatedWatermark
        size="64rem"
        className="absolute top-1/2 -right-48 md:-right-[16rem] lg:-right-[24rem] -translate-y-1/2 aspect-square opacity-[0.05]"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm font-raleway uppercase tracking-widest text-shine-brown mb-4">
            Masterpieces
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-rock-black mb-6">
            Selected Projects
          </h2>
          <p className="text-lg text-rock-black opacity-80 max-w-2xl">
            A curated showcase of luxury interior masterpieces, where timeless elegance meets modern sophistication.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {featured.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              variant="featured"
            />
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-16 text-center">
          <Link
            href="/work"
            className="inline-block px-8 py-4 bg-royo-burgundy text-off-white font-raleway font-semibold uppercase tracking-wider hover:bg-opacity-90 hover:scale-105 hover:shadow-2xl transition-all duration-300 rounded-xl"
          >
            Explore All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
