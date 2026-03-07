import Link from 'next/link'

interface CTAButtonProps {
  label: string
  href: string
  variant?: 'primary' | 'secondary'
}

interface CTASectionProps {
  title: string
  subtitle?: string
  buttons: CTAButtonProps[]
  isDark?: boolean
}

export default function CTASection({
  title,
  subtitle,
  buttons,
  isDark = true
}: CTASectionProps) {
  const bgColor = isDark ? 'bg-royo-burgundy text-off-white' : 'bg-off-white text-rock-black'

  return (
    <section className={`relative py-20 md:py-32 ${bgColor}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-cormorant text-4xl md:text-5xl font-bold leading-tight mb-6">
          {title}
        </h2>

        {subtitle && (
          <p className="text-lg md:text-xl opacity-90 mb-12 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          {buttons.map((button, index) => (
            <Link
              key={index}
              href={button.href}
              className={`px-8 py-4 font-raleway font-semibold uppercase tracking-wider transition-all duration-300 rounded-none text-center ${
                button.variant === 'secondary'
                  ? isDark
                    ? 'border-2 border-off-white text-off-white hover:bg-off-white hover:text-royo-burgundy'
                    : 'border-2 border-royo-burgundy text-royo-burgundy hover:bg-royo-burgundy hover:text-off-white'
                  : isDark
                  ? 'bg-star-gold text-royo-burgundy hover:bg-opacity-90'
                  : 'bg-royo-burgundy text-off-white hover:bg-opacity-90'
              }`}
            >
              {button.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
