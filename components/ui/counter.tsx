'use client'

import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring, useTransform, motion } from 'framer-motion'

interface CounterProps {
    value: number
    className?: string
    suffix?: string
    prefix?: string
    decimals?: number
    shouldFormatLeadingZero?: boolean
}

export function Counter({
    value,
    className,
    suffix = '',
    prefix = '',
    decimals = 0,
    shouldFormatLeadingZero = false
}: CounterProps) {
    const ref = useRef<HTMLSpanElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
    })

    const displayValue = useTransform(springValue, (latest) => {
        const formatted = latest.toFixed(decimals)
        if (shouldFormatLeadingZero && parseFloat(formatted) < 10) {
            return `0${formatted}`
        }
        return formatted
    })

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    return (
        <span className={className} ref={ref}>
            {prefix}
            <motion.span>{displayValue}</motion.span>
            {suffix}
        </span>
    )
}
