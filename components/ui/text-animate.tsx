"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextAnimateProps {
    text: string;
    className?: string;
    delay?: number;
}

export function TextAnimate({ text, className, delay = 0 }: TextAnimateProps) {
    const words = text.split(" ");

    return (
        <span className={cn("inline-block", className)}>
            {words.map((word, wordIndex) => (
                <span
                    key={wordIndex}
                    className="inline-block mr-[0.25em] last:mr-0 whitespace-nowrap"
                >
                    {word.split("").map((letter, letterIndex) => (
                        <motion.span
                            key={`${wordIndex}-${letterIndex}`}
                            initial={{ y: 80, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                delay:
                                    delay + (wordIndex * 0.1) + (letterIndex * 0.03),
                                type: "spring",
                                stiffness: 150,
                                damping: 25,
                            }}
                            className="inline-block"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </span>
            ))}
        </span>
    );
}
