import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Home, Lightbulb, Grid3X3, MapPin } from 'lucide-react'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import ProjectCard from '@/components/sections/ProjectCard'
import CTASection from '@/components/sections/CTASection'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import MotionReveal from '@/components/ui/motion-reveal'
import { locations, getLocationBySlug, getProjectsForLocationSlug } from '@/data/locations'

interface LocationPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }))
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params
  const location = getLocationBySlug(slug)

  if (!location) {
    return {
      title: 'Location Not Found | Royo',
    }
  }

  return {
    title: location.seoTitle,
    description: location.seoDescription,
    openGraph: {
      title: location.seoTitle,
      description: location.seoDescription,
      images: [location.heroImage],
    },
  }
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params
  const location = getLocationBySlug(slug)

  if (!location) {
    notFound()
  }

  const matchingProjects = getProjectsForLocationSlug(slug)
  const featuredProjects = matchingProjects.slice(0, 3)

  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Royo',
    url: `https://www.royo.lk/locations/${location.slug}`,
    image: location.heroImage,
    telephone: '+94 70 100 9991',
    email: 'info@royo.lk',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No. 119, Bauddhaloka Road, Puwakgas Junction',
      addressLocality: 'Kurunegala',
      addressCountry: 'LK',
    },
    areaServed: location.cityName,
  }

  return (
    <div className="min-h-screen bg-off-white">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />

      <section className="relative">
        <div className="relative h-[70vh] min-h-[560px] overflow-hidden">
          <Image
            src={location.heroImage}
            alt={location.heroAlt}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-royo-burgundy via-royo-burgundy/75 to-black/20" />
        </div>

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12 md:pb-20">
            <MotionReveal>
              <p className="text-star-gold text-sm font-raleway uppercase tracking-[0.35em] mb-5">
                {location.provinceName}
              </p>
              <h1 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-off-white leading-tight max-w-5xl">
                Gypsum Moulding and Interior Design in {location.cityName}
              </h1>
              <p className="text-off-white/90 text-lg md:text-xl max-w-3xl mt-6 leading-relaxed">
                {location.intro}
              </p>
            </MotionReveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-14 items-start">
            <MotionReveal>
              <div>
                <p className="text-sm font-raleway uppercase tracking-widest text-shine-brown mb-4">
                  Local Approach
                </p>
                <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-royo-burgundy mb-8">
                  Design Direction That Feels Specific to {location.cityName}
                </h2>
                <p className="text-lg text-rock-black opacity-80 leading-relaxed mb-6">
                  We treat each city differently. In {location.cityName}, our work focuses on giving gypsum moulding and interior finishes a sense of permanence, proportion, and calm visual rhythm while keeping each project grounded in how the space will actually be lived in or experienced.
                </p>
                <p className="text-lg text-rock-black opacity-80 leading-relaxed">
                  Whether the brief leans residential, hospitality-led, or commercial, the goal is the same: refined detailing, clear material hierarchy, and spaces that feel composed rather than overdesigned.
                </p>
              </div>
            </MotionReveal>

            <MotionReveal delay={0.12}>
              <div className="rounded-[2rem] bg-white border border-gray-100 p-8 shadow-sm">
                <p className="text-sm font-raleway uppercase tracking-widest text-shine-brown mb-5">
                  Service Focus
                </p>
                <ul className="space-y-4 text-rock-black">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-royo-burgundy mt-0.5" />
                    <span>Gypsum moulding and feature detailing for homes, villas, and selected commercial spaces in {location.cityName}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-royo-burgundy mt-0.5" />
                    <span>Interior design direction shaped around elegance, function, and finish quality</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-royo-burgundy mt-0.5" />
                    <span>All-island service coverage for clients across Sri Lanka, with location-specific design direction for {location.cityName}</span>
                  </li>
                  {location.nearbyAreas && location.nearbyAreas.length > 0 && (
                    <li className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-royo-burgundy mt-0.5" />
                      <span>Nearby coverage includes {location.nearbyAreas.join(', ')}</span>
                    </li>
                  )}
                </ul>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-raleway uppercase tracking-widest text-shine-brown mb-4">
              Core Services
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-royo-burgundy mb-6">
              What We Bring to Projects in {location.cityName}
            </h2>
            <p className="text-lg text-rock-black opacity-80 leading-relaxed">
              Our city pages combine the two commercial intents people search for most often: gypsum moulding expertise and broader interior design support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MotionReveal>
            <div className="bg-[#EAE5E0] p-10 rounded-2xl transition-all duration-300 hover:shadow-xl group">
              <div className="mb-6 text-royo-burgundy">
                <Home className="w-8 h-8 opacity-80" strokeWidth={1} />
              </div>
              <h3 className="font-cormorant text-2xl font-bold text-rock-black mb-4">
                Gypsum Moulding
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ceiling mouldings, wall details, framed panels, and feature moments that give architectural presence to the finished space.
              </p>
            </div>
            </MotionReveal>

            <MotionReveal delay={0.08}>
            <div className="bg-[#EAE5E0] p-10 rounded-2xl transition-all duration-300 hover:shadow-xl group">
              <div className="mb-6 text-royo-burgundy">
                <Lightbulb className="w-8 h-8 opacity-80" strokeWidth={1} />
              </div>
              <h3 className="font-cormorant text-2xl font-bold text-rock-black mb-4">
                Interior Direction
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Layout, material decisions, atmosphere, and visual coherence brought together in a way that feels elegant and intentional.
              </p>
            </div>
            </MotionReveal>

            <MotionReveal delay={0.16}>
            <div className="bg-[#EAE5E0] p-10 rounded-2xl transition-all duration-300 hover:shadow-xl group">
              <div className="mb-6 text-royo-burgundy">
                <Grid3X3 className="w-8 h-8 opacity-80" strokeWidth={1} />
              </div>
              <h3 className="font-cormorant text-2xl font-bold text-rock-black mb-4">
                Finish Coordination
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A refined balance between ornament, surface finish, lighting, and the materials that shape the final impression of the project.
              </p>
            </div>
            </MotionReveal>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/expertise"
              className="inline-block px-8 py-4 bg-royo-burgundy text-off-white font-raleway font-semibold uppercase tracking-wider hover:bg-opacity-90 hover:scale-105 hover:shadow-2xl transition-all duration-300 rounded-xl"
            >
              View Our Expertise
            </Link>
          </div>
        </div>
      </section>

      {featuredProjects.length > 0 && (
        <section className="py-20 md:py-28 bg-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <p className="text-sm font-raleway uppercase tracking-widest text-shine-brown mb-4">
                Local Project Proof
              </p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-royo-burgundy mb-6">
                Projects in {location.cityName}
              </h2>
              {featuredProjects.length === 1 ? (
                <p className="text-lg text-rock-black opacity-80 max-w-3xl leading-relaxed">
                  We currently feature one project in {location.cityName}, offering a clear view of how our gypsum detailing and interior direction translate into a finished local space.
                </p>
              ) : (
                <p className="text-lg text-rock-black opacity-80 max-w-3xl leading-relaxed">
                  These featured projects show how our work adapts to the pace, architecture, and expectations of clients in {location.cityName}.
                </p>
              )}
            </div>

            {featuredProjects.length === 1 ? (
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-12 items-start">
                <ProjectCard project={featuredProjects[0]} variant="featured" />
                <div className="rounded-[2rem] bg-white p-10 border border-gray-100 shadow-sm">
                  <p className="text-sm font-raleway uppercase tracking-widest text-shine-brown mb-4">
                    Project Narrative
                  </p>
                  <h3 className="font-cormorant text-3xl font-bold text-rock-black mb-5">
                    {featuredProjects[0].title}
                  </h3>
                  <p className="text-rock-black opacity-80 leading-relaxed mb-5">
                    {featuredProjects[0].description}
                  </p>
                  <p className="text-rock-black opacity-75 leading-relaxed">
                    {featuredProjects[0].narrative}
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {featuredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-raleway uppercase tracking-widest text-shine-brown mb-4">
              City Questions
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-royo-burgundy mb-6">
              Frequently Asked Questions About {location.cityName}
            </h2>
            <p className="text-lg text-rock-black opacity-80 leading-relaxed">
              These are the kinds of practical questions clients commonly ask before starting gypsum moulding or interior design work in {location.cityName}.
            </p>
          </div>

          <div className="rounded-[2rem] border border-gray-100 bg-off-white px-8 py-4 shadow-sm">
            <Accordion type="single" collapsible>
              {location.faq.map((item, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="font-raleway text-base text-rock-black">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-rock-black opacity-75 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CTASection
        title={`Planning a project in ${location.cityName}?`}
        subtitle={`Speak with us about gypsum moulding, interior design, and finish-led detailing for your next space in ${location.cityName}.`}
        buttons={[
          { label: 'Contact Us', href: '/contact', variant: 'primary' },
          { label: 'View Our Work', href: '/work', variant: 'secondary' },
        ]}
        isDark={true}
      />

      <Footer />
    </div>
  )
}
