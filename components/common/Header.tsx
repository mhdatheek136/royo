'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const isExpertise = pathname === '/expertise'
  const isLocations = pathname === '/locations'
  const isTransparentHero = isHome || isExpertise || isLocations

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/work' },
    { label: 'Expertise', href: '/expertise' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
  ]

  // Dynamic Styles
  const headerPosition = isTransparentHero ? 'fixed' : 'sticky'
  const headerBg = isTransparentHero
    ? (isScrolled ? 'bg-off-white/95 backdrop-blur-md shadow-sm border-b border-stunning-silver/30' : 'bg-off-white/10 backdrop-blur-md border-b border-off-white/10')
    : 'bg-off-white border-b border-stunning-silver/30'

  const textColor = isTransparentHero && !isScrolled ? 'text-off-white' : 'text-rock-black'
  const logoColor = isTransparentHero && !isScrolled ? 'text-off-white' : 'text-royo-burgundy'

  return (
    <header className={`${headerPosition} top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${headerBg}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-6 transition-all duration-500">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <div className="relative h-8 md:h-10 w-32 md:w-40 transition-all duration-500">
              <Image
                src="/royo wordmark long.svg"
                alt="ROYO Logo"
                fill
                className={`object-contain transition-all duration-500 ${isTransparentHero && !isScrolled ? 'brightness-0 invert' : ''
                  }`}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[11px] font-raleway font-bold transition-all duration-500 uppercase tracking-[0.2em] hover:opacity-70 ${textColor}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-all duration-500 hover:opacity-70 ${textColor}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-8 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs font-raleway font-bold transition-all duration-300 uppercase tracking-widest py-3 border-b border-off-white/5 hover:opacity-70 ${textColor}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

