'use client'

import { useState, useRef, useEffect } from 'react'
import { Province, provinces } from '@/data/provinces'
import { provincePaths } from '@/data/provincePaths'
import { getProjectsByProvince } from '@/data/projects'
import { X, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function InteractiveMap() {
  const [selectedProvince, setSelectedProvince] = useState<Province | null>(null)
  const [popupPos, setPopupPos] = useState({ x: 0, y: 0 })
  const mapRef = useRef<HTMLDivElement>(null)
  const popupRef = useRef<HTMLDivElement>(null)

  // Close popup when clicking outside the card
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // If a province is selected and the click is outside the popup card
      if (selectedProvince && popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setSelectedProvince(null)
      }
    }
    // Use capture phase to ensure it fires before SVG click handlers might stop propagation
    document.addEventListener('mousedown', handleClickOutside, true)
    return () => document.removeEventListener('mousedown', handleClickOutside, true)
  }, [selectedProvince])

  const handleProvinceClick = (e: React.MouseEvent, province: Province) => {
    // Position fixed based on click coordinates (use clientX/Y for fixed positioning respect to viewport)
    let x = e.clientX + 20
    let y = e.clientY + 20

    // Constrain to viewport
    const popupWidth = 320
    const popupHeight = 350

    if (x + popupWidth > window.innerWidth) {
      x = window.innerWidth - popupWidth - 20
    }
    if (y + popupHeight > window.innerHeight) {
      y = window.innerHeight - popupHeight - 20
    }
    x = Math.max(20, x)
    y = Math.max(20, y)

    setPopupPos({ x, y })
    setSelectedProvince(province)
  }

  const selectedProjects = selectedProvince ? getProjectsByProvince(selectedProvince) : []
  const firstProject = selectedProjects[0]

  return (
    <section className="py-20 md:py-32 bg-[#FBFBF9] relative overflow-hidden" ref={mapRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Map Section */}
          <div className="lg:col-span-1 relative flex justify-center order-2 lg:order-1 min-h-[500px] lg:min-h-0">
            <svg
              viewBox="0 0 694 874"
              className="w-full max-w-[280px] sm:max-w-sm lg:max-w-md h-auto"
              aria-label="Interactive map of Sri Lanka provinces"
            >
              <defs>
                <filter id="soft-shadow">
                  <feDropShadow dx="0" dy="10" stdDeviation="15" floodOpacity="0.05" />
                </filter>
              </defs>

              {/* Sri Lanka provinces as clickable regions */}
              {provinces.map((province) => {
                const projects = getProjectsByProvince(province.id)
                const hasProjects = projects.length > 0
                const isSelected = selectedProvince === province.id

                return (
                  <g
                    key={province.id}
                    onClick={(e) => handleProvinceClick(e, province.id)}
                    className="cursor-pointer group hover:z-10 relative"
                  >
                    {/* Render province SVG paths */}
                    {provincePaths[province.id]?.map((pathData, idx) => (
                      <path
                        key={idx}
                        d={pathData}
                        fill={isSelected ? '#FACE82' : '#EBEDF0'}
                        stroke="#FBFBF9"
                        strokeWidth="2.5"
                        className="transition-all duration-300 group-hover:fill-[#D8DCE3]"
                      />
                    ))}

                    {/* Dot representing projects */}
                    {hasProjects && (
                      <circle
                        cx={province.coordinates.x}
                        cy={province.coordinates.y}
                        r={isSelected ? "11" : "9"}
                        fill="#50171D"
                        className="transition-transform duration-300"
                        style={{
                          transformOrigin: `${province.coordinates.x}px ${province.coordinates.y}px`,
                          transform: isSelected ? 'scale(1.2)' : 'scale(1)'
                        }}
                      />
                    )}
                  </g>
                )
              })}
            </svg>

            {/* Fixed Tooltip Card */}
            {selectedProvince && (
              <div
                ref={popupRef}
                className="fixed z-[100] transition-all duration-300 animate-in fade-in zoom-in-95 pointer-events-auto bg-white p-4 rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-100 w-[280px] sm:w-[320px]"
                style={{
                  left: `${popupPos.x}px`,
                  top: `${popupPos.y}px`,
                }}
              >
                {/* Close button always visible */}
                <button
                  onClick={() => setSelectedProvince(null)}
                  className="absolute -top-3 -right-3 bg-white rounded-full p-1.5 shadow-md border border-gray-100 text-gray-500 hover:text-[#50171D] hover:bg-gray-50 transition-colors z-20 cursor-pointer"
                  aria-label="Close details"
                >
                  <X size={16} />
                </button>

                {firstProject ? (
                  <div className="w-full">
                    <div className="relative w-full aspect-[4/3] mb-4 rounded-lg overflow-hidden bg-gray-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={firstProject.images[0]}
                        alt={firstProject.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#50171D] mb-2">
                      {provinces.find(p => p.id === selectedProvince)?.displayName} Province
                    </p>
                    <Link href={`/work/${firstProject.slug}`} className="group/link flex items-center justify-between mt-1">
                      <p className="font-cormorant text-lg sm:text-xl text-[#1A1A1A] leading-snug group-hover/link:text-[#50171D] transition-colors">
                        {firstProject.title}
                      </p>
                      <div className="bg-[#FBFBF9] p-2 rounded-full text-[#50171D] group-hover/link:bg-[#50171D] group-hover/link:text-[#FBFBF9] transition-colors ml-2 flex-shrink-0">
                        <ArrowRight size={16} />
                      </div>
                    </Link>
                  </div>
                ) : (
                  <div className="w-full py-6 text-center">
                    <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#50171D] mb-3">
                      {provinces.find(p => p.id === selectedProvince)?.displayName} Province
                    </p>
                    <p className="font-cormorant text-lg sm:text-xl text-gray-400 italic">
                      New Projects Comming Soon
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="lg:col-span-1 flex flex-col justify-center order-1 lg:order-2 lg:pl-8">
            <div className="mb-12">
              <p className="text-xs md:text-sm font-raleway font-bold uppercase tracking-[0.2em] text-[#50171D] mb-6">
                Regional Influence
              </p>
              <h2 className="font-cormorant text-5xl md:text-6xl lg:text-7xl text-[#1A1A1A] mb-8 leading-[1.1]">
                National<br />Footprint
              </h2>
              <p className="text-gray-500 font-raleway text-sm md:text-base leading-relaxed max-w-lg mb-12">
                From the historical hills of Kandy to the coastal elegance of Galle, our designs are woven into the cultural tapestry of Sri Lanka's nine provinces. We bring international luxury standards to local heritage structures.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <p className="text-3xl md:text-4xl font-cormorant text-[#50171D] mb-3">240+</p>
                <p className="text-[10px] md:text-xs font-raleway font-bold text-gray-400 uppercase tracking-widest leading-relaxed">
                  Projects Completed
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-cormorant text-[#50171D] mb-3">09</p>
                <p className="text-[10px] md:text-xs font-raleway font-bold text-gray-400 uppercase tracking-widest leading-relaxed">
                  Provinces Reached
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
