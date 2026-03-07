import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-off-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="relative h-8 w-32 mb-4">
              <Image
                src="/royo wordmark long.svg"
                alt="ROYO Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-rock-black opacity-70">
              Luxury Interior Design. Sri Lanka.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-raleway font-semibold text-rock-black mb-4 uppercase text-sm tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-rock-black hover:text-royo-burgundy transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-rock-black hover:text-royo-burgundy transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/expertise" className="text-rock-black hover:text-royo-burgundy transition-colors">
                  Expertise
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-rock-black hover:text-royo-burgundy transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-rock-black hover:text-royo-burgundy transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-raleway font-semibold text-rock-black mb-4 uppercase text-sm tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#privacy" className="text-rock-black hover:text-royo-burgundy transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#terms" className="text-rock-black hover:text-royo-burgundy transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-rock-black opacity-70">
            © {currentYear} ROYO Interior Designs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
