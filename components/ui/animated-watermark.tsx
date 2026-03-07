"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AnimatedWatermarkProps {
    className?: string;
    opacity?: number;
    size?: number | string;
}

export function AnimatedWatermark({
    className,
    opacity = 0.08,
    size = "100%"
}: AnimatedWatermarkProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: opacity, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 1.5,
                ease: [0.16, 1, 0.3, 1], // Custom easeOutExpo-like
            }}
            className={cn("relative pointer-events-none", className)}
            style={{ width: size, height: size }}
        >
            <Image
                src="/icon.svg"
                alt=""
                fill
                className="object-contain"
                priority={false}
            />
        </motion.div>
    );
}
