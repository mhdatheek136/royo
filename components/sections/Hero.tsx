interface HeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  isDark?: boolean
}

export default function Hero({
  title,
  subtitle,
  backgroundImage,
  isDark = false
}: HeroProps) {
  const bgColor = isDark ? 'bg-royo-burgundy text-off-white' : 'bg-off-white text-rock-black'
  
  return (
    <section
      className={`relative py-20 md:py-32 ${bgColor}`}
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : undefined}
    >
      {backgroundImage && (
        <div className={`absolute inset-0 ${isDark ? 'bg-royo-burgundy/80' : 'bg-black/30'}`} />
      )}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-center">
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
