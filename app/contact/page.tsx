import Image from 'next/image'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import ContactForm from '@/components/sections/ContactForm'
import { Mail, Phone, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Contact Us - ROYO Interior Design',
  description: 'Get in touch with ROYO Interior Design. Contact information and inquiry form for your luxury interior design project in Sri Lanka.',
}

import { TextAnimate } from '@/components/ui/text-animate'

import { AnimatedWatermark } from '@/components/ui/animated-watermark'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <Header />

      {/* Unified Contact Section */}
      <section className="pt-12 md:pt-20 pb-16 md:pb-24 bg-off-white relative overflow-hidden">
        {/* Right Watermark spanning the page */}
        <AnimatedWatermark
          size="64rem"
          className="absolute top-0 -right-40 md:-right-[16rem] lg:-right-[20rem] aspect-square opacity-[0.05] z-0"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Part */}
          <div className="text-center mb-16 md:mb-24">
            <h1 className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-bold text-royo-burgundy mb-8 leading-tight">
              <TextAnimate text="Begin your bespoke journey." />
            </h1>
            <p className="text-base md:text-lg text-rock-black opacity-85 max-w-2xl mx-auto font-raleway leading-relaxed tracking-tight">
              Transforming your architectural vision into a curated reality. Share your aspirations with our studio and let us craft a space that resonates with your narrative.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
            {/* Form Column */}
            <div className="lg:col-span-2">
              <div className="bg-transparent">
                <h2 className="font-raleway text-xl md:text-2xl font-bold text-royo-burgundy mb-4 uppercase tracking-[0.2em]">
                  Project Inquiry
                </h2>
                <div className="w-full h-px bg-gray-200 mb-10" />
                <ContactForm />
              </div>
            </div>

            {/* Studio Info Column */}
            <div className="lg:col-span-1">
              <div>
                <h2 className="font-raleway text-xl md:text-2xl font-bold text-royo-burgundy mb-4 uppercase tracking-[0.2em]">
                  The Studio
                </h2>
                <div className="w-full h-px bg-gray-200 mb-10" />

                {/* Studio Image */}
                <div className="relative aspect-square overflow-hidden rounded-2xl mb-12 shadow-xl border border-gray-100">
                  <Image
                    src="https://images.unsplash.com/photo-1620619767323-b95a89183081?w=1200&h=1200&fit=crop"
                    alt="ROYO Studio"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                </div>

                {/* Contact Information */}
                <div className="space-y-12">
                  {/* Address */}
                  <div className="flex gap-6 items-start">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md text-royo-burgundy flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-raleway font-bold text-rock-black uppercase text-[10px] tracking-[0.3em] mb-2 opacity-60">
                        Address
                      </h3>
                      <p className="text-rock-black opacity-80 font-raleway text-sm md:text-base leading-snug">
                        42 Ward Place, Cinnamon Gardens,<br />
                        Colombo, Sri Lanka
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-6 items-start">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md text-royo-burgundy flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-raleway font-bold text-rock-black uppercase text-[10px] tracking-[0.3em] mb-2 opacity-60">
                        Email
                      </h3>
                      <p className="text-rock-black opacity-80 font-raleway text-sm md:text-base leading-snug">
                        <a href="mailto:curate@royointeriors.com" className="hover:text-royo-burgundy transition-colors block">
                          curate@royointeriors.com
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-6 items-start">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md text-royo-burgundy flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-raleway font-bold text-rock-black uppercase text-[10px] tracking-[0.3em] mb-2 opacity-60">
                        Inquiries
                      </h3>
                      <p className="text-rock-black opacity-80 font-raleway text-sm md:text-base leading-snug">
                        <a href="tel:+94112345678" className="hover:text-royo-burgundy transition-colors block">
                          +94 11 2345 678
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Studio Hours */}
                <div className="mt-10 pt-8 border-t border-border">
                  <h4 className="font-raleway font-semibold text-rock-black uppercase text-sm tracking-wider mb-3">
                    Studio Hours
                  </h4>
                  <p className="text-rock-black opacity-75 text-sm">
                    Monday – Friday: 09:00 – 18:00<br />
                    Saturday: 10:00 – 14:00<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
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
                  42 Ward Place, Cinnamon Gardens, Colombo, Sri Lanka
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
