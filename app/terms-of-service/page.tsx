import type { Metadata } from 'next'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service | Royo',
  description:
    'Review the website terms governing the use of Royo content, inquiries, and general service information.',
}

export default function TermsOfServicePage() {
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
                Terms of Service
              </h1>
              <p className="mt-4 max-w-3xl font-raleway text-sm leading-7 text-white/80 sm:text-base">
                These terms explain the general rules for using the Royo website and engaging
                with the information, content, and inquiry tools provided through it.
              </p>
              <p className="mt-5 font-raleway text-sm text-white/65">Last updated: May 22, 2026</p>
            </div>

            <div className="grid gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[1.1fr_0.7fr] lg:px-14 lg:py-14">
              <div className="space-y-8 text-rock-black">
                <section className="space-y-3">
                  <h2 className="font-cormorant text-3xl">Website Use</h2>
                  <p className="font-raleway text-sm leading-7 opacity-80 sm:text-base">
                    This website is intended to provide information about Royo, our design
                    direction, and the services we offer. By using this website, you agree to use
                    it lawfully and in a way that does not interfere with its normal operation.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-cormorant text-3xl">Service Information</h2>
                  <p className="font-raleway text-sm leading-7 opacity-80 sm:text-base">
                    Content on this website is provided for general information only. Project
                    details, visuals, service descriptions, and availability may change over time.
                    Any quotation, timeline, or project scope will be confirmed separately through
                    direct communication.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-cormorant text-3xl">Intellectual Property</h2>
                  <p className="font-raleway text-sm leading-7 opacity-80 sm:text-base">
                    The website design, branding, written content, and original project materials
                    shown on this site belong to Royo unless otherwise stated. They may not be
                    copied, reused, or redistributed without prior written permission.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-cormorant text-3xl">Project Inquiries</h2>
                  <p className="font-raleway text-sm leading-7 opacity-80 sm:text-base">
                    Sending an inquiry through the website does not create a formal client
                    relationship or guarantee acceptance of a project. Engagement begins only
                    after both parties agree on the relevant scope, terms, and next steps.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-cormorant text-3xl">Third-Party Services</h2>
                  <p className="font-raleway text-sm leading-7 opacity-80 sm:text-base">
                    Some website functions may rely on third-party tools for hosting, analytics,
                    or communication. We are not responsible for interruptions or issues caused by
                    external services outside our direct control.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-cormorant text-3xl">Limitation of Liability</h2>
                  <p className="font-raleway text-sm leading-7 opacity-80 sm:text-base">
                    We aim to keep the website accurate and available, but we do not guarantee
                    that it will always be uninterrupted, error-free, or fully up to date. To the
                    extent permitted by law, Royo is not liable for indirect or incidental losses
                    arising from use of the website.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="font-cormorant text-3xl">Updates to These Terms</h2>
                  <p className="font-raleway text-sm leading-7 opacity-80 sm:text-base">
                    We may revise these Terms of Service from time to time. Continued use of the
                    website after updates are published means you accept the revised terms.
                  </p>
                </section>
              </div>

              <aside className="self-start space-y-6 rounded-[1.75rem] border border-border bg-off-white p-6 sm:p-8">
                <div>
                  <p className="font-raleway text-xs uppercase tracking-[0.3em] text-royo-burgundy/70">
                    Reach Us
                  </p>
                  <h2 className="mt-3 font-cormorant text-3xl text-rock-black">
                    Need clarification?
                  </h2>
                  <p className="mt-3 font-raleway text-sm leading-7 text-rock-black/75">
                    For questions about these terms or our website information, contact the Royo
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
