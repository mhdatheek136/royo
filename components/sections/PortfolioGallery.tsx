'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import type { PortfolioImage } from '@/data/portfolio'

interface PortfolioGalleryProps {
  images: PortfolioImage[]
  title: string
  linkHref?: string
  linkLabel?: string
  initialLimit?: number
  showTitle?: boolean
}

const heights = ['h-64 md:h-80', 'h-80 md:h-[28rem]', 'h-72 md:h-96', 'h-96 md:h-[32rem]']

export default function PortfolioGallery({
  images,
  title,
  linkHref,
  linkLabel = 'View Project',
  initialLimit = 9,
  showTitle = true,
}: PortfolioGalleryProps) {
  const [expanded, setExpanded] = useState(false)
  const [selectedImage, setSelectedImage] = useState<PortfolioImage | null>(null)

  useEffect(() => {
    if (!selectedImage) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedImage(null)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedImage])

  if (images.length === 0) return null

  const visibleImages = expanded ? images : images.slice(0, initialLimit)

  return (
    <div>
      {(showTitle || linkHref) && (
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          {showTitle && <h3 className="font-cormorant text-3xl font-bold text-rock-black md:text-4xl">{title}</h3>}
          {linkHref && (
            <Link href={linkHref} className="text-xs font-bold uppercase tracking-[0.2em] text-royo-burgundy">
              {linkLabel}
            </Link>
          )}
        </div>
      )}
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {visibleImages.map((image, index) => (
          <button
            type="button"
            key={`${image.thumb}-${index}`}
            onClick={() => setSelectedImage(image)}
            className="group mb-5 block w-full break-inside-avoid overflow-hidden rounded-[1.5rem] bg-white text-left shadow-sm"
            aria-label={`Open ${title} image ${index + 1}`}
          >
            <div className={`relative ${heights[index % heights.length]}`}>
              <Image
                src={image.thumb}
                alt={`${title} - image ${index + 1}`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute bottom-4 right-4 rounded-full bg-rock-black/70 px-3 py-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                View
              </span>
            </div>
          </button>
        ))}
      </div>

      {images.length > initialLimit && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded(current => !current)}
            className="rounded-full border border-royo-burgundy px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-royo-burgundy transition-colors hover:bg-royo-burgundy hover:text-white"
          >
            {expanded ? 'Show Less' : `Show More (${images.length - initialLimit})`}
          </button>
        </div>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-rock-black/95 p-4 backdrop-blur-sm md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} image preview`}
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/35 bg-black/45 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white hover:text-rock-black focus:outline-none focus:ring-2 focus:ring-white/80 md:right-8 md:top-8"
            aria-label="Close image preview"
          >
            <X className="h-6 w-6" strokeWidth={1.8} />
          </button>
          <div className="relative h-full w-full max-w-7xl" onClick={event => event.stopPropagation()}>
            <Image
              src={selectedImage.large}
              alt={`${title} full-size preview`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </div>
  )
}
