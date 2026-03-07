'use client'

import { Warp } from "@paper-design/shaders-react"
import Link from "next/link"

interface WarpShaderHeroProps {
    title?: string
    subtitle?: string
}

export default function WarpShaderHero({
    title = "Interior Design - Done Right",
    subtitle = "Bespoke interior experiences crafted for the discerning lifestyle in the heart of Sri Lanka"
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
                        "hsl(47, 20%, 90%)"   // Off-white/Cream
                    ]}
                />
            </div>

            <div className="relative z-10 min-h-screen h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl w-full text-center space-y-8 md:space-y-12">
                    <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-cormorant font-bold md:whitespace-nowrap leading-tight drop-shadow-2xl">
                        {title}
                    </h1>

                    <p className="text-white/90 text-lg md:text-2xl font-raleway font-light leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
                        {subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                        <Link
                            href="/contact"
                            className="px-10 py-5 bg-star-gold text-royo-burgundy rounded-full font-raleway font-bold uppercase tracking-widest text-xs hover:scale-105 transition-all duration-300 shadow-xl"
                        >
                            Start a Project
                        </Link>
                        <Link
                            href="/work"
                            className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-raleway font-bold uppercase tracking-widest text-xs hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-xl"
                        >
                            View Our Work
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
