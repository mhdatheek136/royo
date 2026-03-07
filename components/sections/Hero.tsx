import Image from 'next/image'

interface HeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  isDark?: boolean
  showGradient?: boolean
}

export default function Hero({
  title,
  subtitle,
  backgroundImage,
  isDark = false,
  showGradient = false
}: HeroProps) {
  const bgColor = isDark
    ? 'bg-royo-burgundy text-off-white'
    : 'bg-off-white text-rock-black'

  const gradientOverlay = showGradient && !isDark ? (
    <div className="absolute inset-0 bg-gradient-to-b from-royo-burgundy/[0.04] to-transparent pointer-events-none" />
  ) : null

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${bgColor}`}
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : undefined}
    >
      {gradientOverlay}
      {/* Left Watermark */}
      {!isDark && !backgroundImage && (
        <div className="absolute top-1/2 -left-40 md:-left-[12rem] lg:-left-[18rem] -translate-y-1/2 w-80 md:w-[24rem] lg:w-[36rem] aspect-square opacity-[0.08] pointer-events-none">
          <Image
            src="/icon.svg"
            alt="ROYO Logo Watermark"
            fill
            className="object-contain object-right"
          />
        </div>
      )}

      {/* Right Watermark */}
      {!isDark && !backgroundImage && (
        <div className="absolute top-1/2 -right-40 md:-right-[12rem] lg:-right-[18rem] -translate-y-1/2 w-80 md:w-[24rem] lg:w-[36rem] aspect-square opacity-[0.08] pointer-events-none">
          <Image
            src="/icon.svg"
            alt="ROYO Logo Watermark"
            fill
            className="object-contain object-left"
          />
        </div>
      )}

      {backgroundImage && (
        <div className={`absolute inset-0 ${isDark ? 'bg-royo-burgundy/80' : 'bg-black/30'}`} />
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-center text-primary">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-center opacity-90">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}

