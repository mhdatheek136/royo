import Image from 'next/image'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import ContactForm from '@/components/sections/ContactForm'
import { Mail, Phone, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Contact Us - ROYO Interior Design',
  description: 'Get in touch with ROYO Interior Design. Contact information and inquiry form for your luxury interior design project in Sri Lanka.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-cormorant text-5xl md:text-6xl font-bold text-center text-rock-black mb-8">
            Begin your bespoke journey.
          </h1>
          <p className="text-xl text-center text-rock-black opacity-85 max-w-2xl mx-auto">
            Transforming your architectural vision into a curated reality. Share your aspirations with our studio and let us craft a space that resonates with your narrative.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 md:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form Column */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm">
                <h2 className="font-cormorant text-3xl font-bold text-rock-black mb-2">
                  Project Inquiry
                </h2>
                <p className="text-shine-brown text-sm uppercase tracking-widest mb-8">
                  Tell us about your vision
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Studio Info Column */}
            <div className="lg:col-span-1">
              <div>
                <h2 className="font-cormorant text-3xl font-bold text-rock-black mb-8">
                  The Studio
                </h2>

                {/* Studio Image */}
                <div className="relative h-64 md:h-72 overflow-hidden rounded-lg mb-8 shadow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop"
                    alt="ROYO Studio"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex gap-4">
                    <MapPin className="w-5 h-5 flex-shrink-0 text-royo-burgundy mt-1" />
                    <div>
                      <h3 className="font-raleway font-semibold text-rock-black uppercase text-sm tracking-wider mb-2">
                        Address
                      </h3>
                      <p className="text-rock-black opacity-75">
                        42 Ward Place, Cinnamon Gardens,<br />
                        Kurunegala, Sri Lanka
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <Mail className="w-5 h-5 flex-shrink-0 text-royo-burgundy mt-1" />
                    <div>
                      <h3 className="font-raleway font-semibold text-rock-black uppercase text-sm tracking-wider mb-2">
                        Email
                      </h3>
                      <p className="text-rock-black opacity-75">
                        <a href="mailto:curate@royointeriors.com" className="hover:text-royo-burgundy transition-colors">
                          curate@royointeriors.com
                        </a>
                        <br />
                        <a href="mailto:press@royointeriors.com" className="hover:text-royo-burgundy transition-colors">
                          press@royointeriors.com
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <Phone className="w-5 h-5 flex-shrink-0 text-royo-burgundy mt-1" />
                    <div>
                      <h3 className="font-raleway font-semibold text-rock-black uppercase text-sm tracking-wider mb-2">
                        Inquiries
                      </h3>
                      <p className="text-rock-black opacity-75">
                        <a href="tel:+94112345678" className="hover:text-royo-burgundy transition-colors">
                          +94 11 2345 678
                        </a>
                        <br />
                        <a href="tel:+94771234567" className="hover:text-royo-burgundy transition-colors">
                          +94 77 1234 567
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

      {/* Decorative Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-80 md:h-96 overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1618219944342-824e40a13202?w=1200&h=400&fit=crop"
              alt="Design inspiration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Map Section - Placeholder */}
      <section className="py-20 md:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cormorant text-4xl font-bold text-rock-black mb-12 text-center">
            Visit Us
          </h2>
          <div className="relative h-80 md:h-96 bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <div className="text-center">
                <div className="text-5xl mb-4">📍</div>
                <p className="font-raleway text-rock-black font-semibold">
                  42 Ward Place, Cinnamon Gardens, Sri Lanka
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
