import Image from 'next/image'
import Link from 'next/link'
import type { PortfolioProject } from '@/data/portfolio'

interface ProjectCardProps {
  project: PortfolioProject
  variant?: 'grid' | 'featured'
  index?: number
}

const gridHeights = ['h-72 md:h-80', 'h-96 md:h-[30rem]', 'h-80 md:h-96', 'h-[22rem] md:h-[26rem]']

export default function ProjectCard({ project, variant = 'grid', index = 0 }: ProjectCardProps) {
  const image = project.coverImage || project.images[0]
  if (!image) return null

  if (variant === 'featured') {
    return (
      <Link href={`/work/${project.slug}`} className="group block">
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm border border-gray-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
          <div className="relative h-72 md:h-96 overflow-hidden">
            <Image
              src={image.large}
              alt={project.title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="p-6 md:p-8">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-shine-brown">
              {project.category}
            </p>
            <h3 className="font-cormorant text-2xl md:text-3xl font-bold text-rock-black transition-colors group-hover:text-royo-burgundy">
              {project.title}
            </h3>
            <p className="mt-3 text-xs uppercase tracking-widest text-rock-black/55">
              {project.city} / {project.area}
            </p>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/work/${project.slug}`} className="group mb-8 block break-inside-avoid">
      <div className="overflow-hidden rounded-[1.75rem] bg-white shadow-sm border border-gray-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
        <div className={`relative overflow-hidden ${gridHeights[index % gridHeights.length]}`}>
          <Image
            src={image.thumb}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-shine-brown">
            {project.category}
          </p>
          <h3 className="mt-2 font-cormorant text-2xl font-bold text-rock-black transition-colors group-hover:text-royo-burgundy">
            {project.title}
          </h3>
          <p className="mt-2 text-xs uppercase tracking-widest text-rock-black/55">
            {project.city} / {project.area}
          </p>
        </div>
      </div>
    </Link>
  )
}
