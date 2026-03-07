import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import { getProjectBySlug, getRelatedProjects } from '@/data/projects'
import ProjectCard from '@/components/sections/ProjectCard'
import CTASection from '@/components/sections/CTASection'
import { notFound } from 'next/navigation'

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  // This can be expanded to dynamically generate all project slugs
  return []
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const relatedProjects = getRelatedProjects(slug, 3)

  return (
    <div className="min-h-screen bg-off-white">
      <Header />

      {/* Hero Section with Project Title */}
      <section className="relative">
        <div className="relative h-96 md:h-screen overflow-hidden">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full bg-gradient-to-t from-royo-burgundy via-royo-burgundy/80 to-transparent p-8 md:p-16">
            <p className="text-star-gold text-sm font-raleway uppercase tracking-widest mb-4">
              {project.category.replace('-', ' ')}
            </p>
            <h1 className="font-cormorant text-4xl md:text-6xl font-bold text-off-white mb-4">
              {project.title}
            </h1>
            <p className="text-off-white/90 text-lg">
              {project.location} • {project.year}
            </p>
          </div>
        </div>
      </section>

      {/* Project Info Section */}
      <section className="py-16 md:py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-border pt-8 md:pt-16">
            <div>
              <p className="text-sm font-raleway uppercase tracking-widest text-shine-brown mb-2">
                Year
              </p>
              <p className="font-cormorant text-2xl font-bold text-rock-black">
                {project.year}
              </p>
            </div>
            <div>
              <p className="text-sm font-raleway uppercase tracking-widest text-shine-brown mb-2">
                Area
              </p>
              <p className="font-cormorant text-2xl font-bold text-rock-black">
                {project.area}
              </p>
            </div>
            <div>
              <p className="text-sm font-raleway uppercase tracking-widest text-shine-brown mb-2">
                Client
              </p>
              <p className="font-cormorant text-2xl font-bold text-rock-black">
                {project.clientType}
              </p>
            </div>
            <div>
              <p className="text-sm font-raleway uppercase tracking-widest text-shine-brown mb-2">
                Location
              </p>
              <p className="font-cormorant text-2xl font-bold text-rock-black">
                {project.location}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Narrative Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="font-cormorant text-4xl font-bold text-rock-black">
                The Narrative
              </h2>
            </div>
            <div className="lg:col-span-2">
              <p className="text-lg text-rock-black opacity-85 leading-relaxed">
                {project.narrative}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      {project.images.length > 1 && (
        <section className="py-16 md:py-24 bg-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-cormorant text-3xl font-bold text-rock-black mb-12">
              Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {project.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="relative h-64 md:h-80 overflow-hidden rounded-lg"
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 2}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Signature Features */}
      {project.features.gypsumMoulding && (
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-raleway uppercase tracking-widest text-royo-burgundy mb-4">
                  Signature Features
                </p>
                <h2 className="font-cormorant text-4xl font-bold text-rock-black mb-6">
                  {project.features.gypsumMoulding ? 'Artisanal Gypsum Moulding' : 'Bespoke Design'}
                </h2>
                <p className="text-lg text-rock-black opacity-85 leading-relaxed">
                  {project.features.description}
                </p>
              </div>
              {project.images[0] && (
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <Image
                    src={project.images[Math.min(1, project.images.length - 1)]}
                    alt="Project detail"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 md:py-24 bg-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-cormorant text-4xl font-bold text-rock-black mb-12">
              More in {project.location}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {relatedProjects.map((proj) => (
                <ProjectCard key={proj.id} project={proj} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection
        title="Inspired by this project?"
        subtitle="Let's create something extraordinary for you"
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
