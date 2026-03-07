import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  variant?: 'grid' | 'featured'
}

export default function ProjectCard({ project, variant = 'grid' }: ProjectCardProps) {
  if (variant === 'featured') {
    return (
      <Link href={`/work/${project.slug}`}>
        <div className="group cursor-pointer overflow-hidden rounded-lg">
          <div className="relative h-64 md:h-80 overflow-hidden">
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-6 bg-off-white">
            <h3 className="font-cormorant text-2xl font-bold text-rock-black mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-shine-brown uppercase tracking-wider">
              {project.location}
            </p>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/work/${project.slug}`}>
      <div className="group cursor-pointer">
        <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="mt-4">
          <h3 className="font-cormorant text-xl font-bold text-rock-black group-hover:text-royo-burgundy transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-shine-brown uppercase tracking-wider mt-1">
            {project.location}
          </p>
        </div>
      </div>
    </Link>
  )
}
