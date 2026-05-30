import Image from 'next/image'
import { Globe, Mail, MapPin, Phone } from 'lucide-react'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import ContactForm from '@/components/sections/ContactForm'
import LocationGrid from '@/components/sections/LocationGrid'
import { TextAnimate } from '@/components/ui/text-animate'
import { AnimatedWatermark } from '@/components/ui/animated-watermark'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Contact ROYO in Kurunegala',
  description: 'Get in touch with ROYO in Kurunegala for gypsum moulding and interior design inquiries.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <Header />

      <section className="pt-12 md:pt-20 pb-16 md:pb-24 bg-off-white relative overflow-hidden">
        <AnimatedWatermark
          size="64rem"
          className="absolute top-0 -right-40 md:-right-[16rem] lg:-right-[20rem] aspect-square opacity-[0.05] z-0"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h1 className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-bold text-royo-burgundy mb-8 leading-tight">
              <TextAnimate text="Let&apos;s Start the Conversation" />
            </h1>
            <p className="text-base md:text-lg text-rock-black opacity-85 max-w-2xl mx-auto font-raleway leading-relaxed tracking-tight">
              Visit us in Kurunegala, call our team, or send us an email to discuss your next project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
            <div className="lg:col-span-2">
              <div className="bg-transparent">
                <h2 className="font-raleway text-xl md:text-2xl font-bold text-royo-burgundy mb-4 uppercase tracking-[0.2em]">
                  Send an Inquiry
                </h2>
                <div className="w-full h-px bg-gray-200 mb-10" />
                <ContactForm />
              </div>
            </div>

            <div className="lg:col-span-1">
              <div>
                <h2 className="font-raleway text-xl md:text-2xl font-bold text-royo-burgundy mb-4 uppercase tracking-[0.2em]">
                  Contact Details
                </h2>
                <div className="w-full h-px bg-gray-200 mb-10" />

                <div className="space-y-12 mb-12">
                  <div className="flex gap-6 items-start">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md text-royo-burgundy flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-raleway font-bold text-rock-black uppercase text-[10px] tracking-[0.3em] mb-2 opacity-60">
                        Address
                      </h3>
                      <p className="text-rock-black opacity-80 font-raleway text-sm md:text-base leading-snug">
                        No. 119, Bauddhaloka Road,
                        <br />
                        Puwakgas Junction, Kurunegala
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md text-royo-burgundy flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-raleway font-bold text-rock-black uppercase text-[10px] tracking-[0.3em] mb-2 opacity-60">
                        Email
                      </h3>
                      <p className="text-rock-black opacity-80 font-raleway text-sm md:text-base leading-snug">
                        <a href="mailto:info@royo.lk" className="hover:text-royo-burgundy transition-colors block">
                          info@royo.lk
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md text-royo-burgundy flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-raleway font-bold text-rock-black uppercase text-[10px] tracking-[0.3em] mb-2 opacity-60">
                        Phone
                      </h3>
                      <p className="text-rock-black opacity-80 font-raleway text-sm md:text-base leading-snug">
                        <a href="tel:+94701009991" className="hover:text-royo-burgundy transition-colors block">
                          070 100 9991
                        </a>
                        <a href="tel:+94701009992" className="hover:text-royo-burgundy transition-colors block">
                          070 100 9992
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md text-royo-burgundy flex-shrink-0">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-raleway font-bold text-rock-black uppercase text-[10px] tracking-[0.3em] mb-2 opacity-60">
                        Website
                      </h3>
                      <p className="text-rock-black opacity-80 font-raleway text-sm md:text-base leading-snug">
                        <a href="https://www.royo.lk" className="hover:text-royo-burgundy transition-colors block" target="_blank" rel="noreferrer">
                          www.royo.lk
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl border border-gray-100">
                  <Image
                    src="https://images.unsplash.com/photo-1620619767323-b95a89183081?w=1200&h=1200&fit=crop"
                    alt="ROYO interior design office"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-raleway text-2xl md:text-3xl font-bold text-royo-burgundy mb-12 text-center uppercase tracking-[0.2em]">
            Visit Us
          </h2>
          <div className="relative h-[400px] md:h-[500px] bg-white/40 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white">
            <div className="w-full h-full flex items-center justify-center bg-gray-50/50">
              <div className="text-center group">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-xl text-royo-burgundy mb-6 mx-auto group-hover:scale-110 transition-transform duration-500">
                  <MapPin className="w-8 h-8" />
                </div>
                <p className="font-raleway text-rock-black font-bold tracking-tight text-lg">
                  No. 119, Bauddhaloka Road, Puwakgas Junction, Kurunegala
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LocationGrid
        limit={6}
        showViewAll={true}
        subtitle="If you are searching by area first, explore the city-specific pages where we highlight gypsum moulding and interior design relevance for each location."
      />

      <Footer />
    </div>
  )
}
