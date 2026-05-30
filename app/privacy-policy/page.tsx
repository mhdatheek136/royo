import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Privacy Policy | ROYO',
  description:
    'Read how ROYO collects, uses, and protects information shared through our website and contact forms.',
  path: '/privacy-policy',
})

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <Header />

      <main className="pt-28 pb-20">
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-border bg-white shadow-[0_24px_80px_rgba(60,10,18,0.08)]">
            <div className="border-b border-border bg-gradient-to-br from-royo-burgundy via-[#6e1325] to-royo-burgundy px-6 py-14 text-white sm:px-10 lg:px-14">
              <p className="font-raleway text-xs uppercase tracking-[0.35em] text-white/70">
                Legal
              </p>
              <h1 className="mt-4 font-cormorant text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Privacy Policy
              </h1>
              <p className="mt-4 max-w-3xl font-raleway text-sm leading-7 text-white/80 sm:text-base">
                This policy explains what information we collect through the ROYO website, how
                we use it, and how we protect it when you contact us about gypsum moulding,
                interior design, or related services across Sri Lanka.
              </p>
              <p className="mt-5 font-raleway text-sm text-white/65">Last updated: May 22, 2026</p>
            </div>

            <div className="grid gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[1.1fr_0.7fr] lg:px-14 lg:py-14">
              <div className="space-y-8 text-rock-black">
                <section className="space-y-3">
                  <h2 className="font-cormorant text-3xl">Information We Collect</h2>
                  <p className="font-raleway text-sm leading-7 opacity-80 sm:text-base">
                    When you use our website or submit an inquiry, we may collect the information
                    you choose to share with us, including your name, phone number, email
                    address, location, project type, and any design brief or message you include.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-cormorant text-3xl">How We Use Your Information</h2>
                  <p className="font-raleway text-sm leading-7 opacity-80 sm:text-base">
                    We use your information to respond to inquiries, discuss potential projects,
                    provide quotations or consultations, improve our customer communication, and
                    maintain internal records of project requests.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-cormorant text-3xl">Contact Form and Communication</h2>
                  <p className="font-raleway text-sm leading-7 opacity-80 sm:text-base">
                    Information submitted through our contact form is forwarded to our team and
                    may also be stored in our internal systems so we can follow up with you
                    efficiently. By contacting us, you agree that we may reply by phone, email,
                    or other appropriate business communication channels.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-cormorant text-3xl">Sharing of Information</h2>
                  <p className="font-raleway text-sm leading-7 opacity-80 sm:text-base">
                    We do not sell your personal information. We may share limited information
                    only when necessary to operate our website, manage inquiries, or comply with
                    legal obligations. This may include trusted service providers who help us run
                    communication or hosting tools.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-cormorant text-3xl">Data Security</h2>
                  <p className="font-raleway text-sm leading-7 opacity-80 sm:text-base">
                    We take reasonable steps to protect the information you share with us.
                    However, no online transmission or storage system can be guaranteed to be
                    completely secure, so you provide information at your own discretion.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-cormorant text-3xl">Your Choices</h2>
                  <p className="font-raleway text-sm leading-7 opacity-80 sm:text-base">
                    If you would like us to update or remove personal information you have shared
                    through this website, you can contact us directly and we will make reasonable
                    efforts to assist.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-cormorant text-3xl">Policy Updates</h2>
                  <p className="font-raleway text-sm leading-7 opacity-80 sm:text-base">
                    We may update this Privacy Policy from time to time to reflect changes in our
                    services, website tools, or business practices. The most recent version will
                    always be published on this page.
                  </p>
                </section>
              </div>

              <aside className="self-start space-y-6 rounded-[1.75rem] border border-border bg-off-white p-6 sm:p-8">
                <div>
                  <p className="font-raleway text-xs uppercase tracking-[0.3em] text-royo-burgundy/70">
                    Contact
                  </p>
                  <h2 className="mt-3 font-cormorant text-3xl text-rock-black">
                    Questions about privacy?
                  </h2>
                  <p className="mt-3 font-raleway text-sm leading-7 text-rock-black/75">
                    If you have questions about how your information is handled, reach out to our
                    team directly.
                  </p>
                </div>

                <div className="space-y-3 font-raleway text-sm text-rock-black/80">
                  <a href="mailto:info@royo.lk" className="block transition-colors hover:text-royo-burgundy">
                    info@royo.lk
                  </a>
                  <a href="tel:+94701009991" className="block transition-colors hover:text-royo-burgundy">
                    070 100 9991 / 070 100 9992
                  </a>
                  <p>No. 119, Bauddhaloka Road, Puwakgas Junction, Kurunegala, Sri Lanka</p>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
