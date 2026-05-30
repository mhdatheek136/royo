import Image from 'next/image'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import CTASection from '@/components/sections/CTASection'
import PortfolioGallery from '@/components/sections/PortfolioGallery'
import ProjectCard from '@/components/sections/ProjectCard'
import { TextAnimate } from '@/components/ui/text-animate'
import {
  getPortfolioProjectBySlug,
  getRelatedPortfolioProjects,
  portfolioProjects,
} from '@/data/portfolio'
import { notFound } from 'next/navigation'

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return portfolioProjects.map(project => ({ slug: project.slug }))
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params
  const project = getPortfolioProjectBySlug(slug)
  if (!project || project.images.length === 0) notFound()

  const relatedProjects = getRelatedPortfolioProjects(slug, 3)

  return (
    <div className="min-h-screen bg-off-white">
      <Header />

      <section className="relative">
        <div className="relative h-[72vh] min-h-[560px] overflow-hidden">
          <Image src={(project.coverImage || project.images[0]).large} alt={project.title} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-royo-burgundy via-royo-burgundy/55 to-black/10" />
        </div>
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 md:pb-20 lg:px-8">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-star-gold">{project.category}</p>
            <h1 className="max-w-4xl font-cormorant text-5xl font-bold leading-none text-off-white md:text-7xl">
              <TextAnimate text={project.title} />
            </h1>
            <p className="mt-5 text-sm uppercase tracking-[0.22em] text-off-white/80">
              {project.city} / {project.area}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            ['Location', project.city],
            ['Project Type', project.category],
            ['Area', project.area],
            ['Collection', project.projectGroup || project.category],
          ].map(([label, value]) => (
            <div key={label} className="border-t border-gray-200 pt-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-shine-brown">{label}</p>
              <p className="mt-3 font-cormorant text-2xl font-bold text-rock-black">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-off-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-shine-brown">Project Gallery</p>
            <h2 className="font-cormorant text-4xl font-bold text-royo-burgundy md:text-5xl">A closer look at the finished work</h2>
            <p className="mt-5 text-lg leading-relaxed text-rock-black/75">{project.description}</p>
          </div>
          <PortfolioGallery images={project.images} title={project.title} initialLimit={8} showTitle={false} />
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 font-cormorant text-4xl font-bold text-rock-black">More in {project.city}</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {relatedProjects.map((related, index) => (
                <ProjectCard key={related.slug} project={related} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Inspired by this project?"
        subtitle="Let's create something extraordinary for your space."
        buttons={[
          { label: 'Start Your Project', href: '/contact', variant: 'primary' },
          { label: 'View All Work', href: '/work', variant: 'secondary' },
        ]}
        isDark={true}
      />
      <Footer />
    </div>
  )
}
