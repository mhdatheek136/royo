'use client'

import { Warp } from "@paper-design/shaders-react"
import { TextAnimate } from '@/components/ui/text-animate'
import Link from 'next/link'

interface WarpShaderHeroProps {
    title?: string
    subtitle?: string
}

export default function WarpShaderHero({
    title = "Interior Design - Done Right",
    subtitle = "Gypsum moulding is our core expertise, paired with bespoke interior experiences crafted for the discerning lifestyle in Sri Lanka."
}: WarpShaderHeroProps) {
    return (
        <main className="relative min-h-screen h-screen overflow-hidden bg-royo-burgundy">
            <div className="absolute inset-0">
                <Warp
                    style={{ height: "100%", width: "100%" }}
                    proportion={0.45}
                    softness={1}
                    distortion={0.25}
                    swirl={0.8}
                    swirlIterations={10}
                    shape="checks"
                    shapeScale={0.1}
                    scale={1}
                    rotation={0}
                    speed={0.4}
                    colors={[
                        "hsl(353, 55%, 20%)", // ROYO Burgundy
                        "hsl(353, 40%, 12%)", // Darker Burgundy
                        "hsl(38, 93%, 74%)",  // Star Gold
                        "hsl(48, 20%, 95%)"   // Quiet White (#F8F7F3)
                    ]}
                />
            </div>

            <div className="relative z-10 min-h-screen h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl w-full text-center space-y-8 md:space-y-12">
                    <h1 className="text-off-white text-5xl md:text-7xl lg:text-8xl font-cormorant font-bold md:whitespace-nowrap leading-tight drop-shadow-2xl">
                        <TextAnimate text={title} />
                    </h1>

                    <p className="text-white opacity-90 text-lg md:text-2xl font-raleway font-light leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
                        {subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch pt-8 mx-auto">
                        <Link
                            href="/contact"
                            className="sm:w-[220px] h-12 inline-flex items-center justify-center text-center px-8 bg-star-gold text-royo-burgundy rounded-full font-raleway font-bold uppercase tracking-widest text-xs hover:scale-105 transition-all duration-300 shadow-xl"
                        >
                            Contact Us
                        </Link>
                        <Link
                            href="/work"
                            className="sm:w-[220px] h-12 inline-flex items-center justify-center text-center px-8 bg-off-white/10 backdrop-blur-md border border-off-white/20 rounded-full text-off-white font-raleway font-bold uppercase tracking-widest text-xs hover:bg-off-white/20 transition-all duration-300 hover:scale-105 shadow-xl"
                        >
                            View Our Work
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
