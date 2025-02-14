"use client";

import { motion } from "framer-motion";
import { Button } from "~/components/ui/button";

export default function Hero({
    title = "Global Esports",
}: {
    title?: string;
}) {
    const words = title.split(" ");

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
            <motion.div
                className="absolute top-0 left-0 w-full h-full z-0"
                style={{
                    background:
                        "linear-gradient(45deg, #1b478e, #2f5b9e, #4471af, #5a87c0, #709dcf, #87b5df, #9fcdf0, #b8e6ff, #f79c9e, #e58382, #d36a67, #c1524f, #af3a38, #9d2424, #8c0e11, #7b0000)",
                    backgroundSize: "200% 200%",
                }}
                animate={{
                    backgroundPosition: [
                        "0% 50%",
                        "50% 0%",
                        "100% 50%",
                        "50% 100%",
                        "0% 50%",
                    ],
                }}
                transition={{
                    duration: 15,
                    ease: "linear",
                    repeat: Infinity,
                }}
            />

            <div className="bg-hero_overlay absolute w-full h-full z-10 bg-primary/[0.42]" />

            <div className="hero-container relative z-10 container mx-auto px-4 md:px-6 text-center text-geblue">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="max-w-4xl mx-auto relative"
                >
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter">
                        {words.map((word, wordIndex) => (
                            <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay: wordIndex * 0.1 + letterIndex * 0.03,
                                            type: "spring",
                                            stiffness: 150,
                                            damping: 25,
                                        }}
                                        className="inline-block bg-clip-text gradient-to-r"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>

                    <div className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <Button
                            variant="ghost"
                            className="rounded-2xl px-8 py-6 text-lg font-semibold backdrop-blur-md bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 text-gered hover:text-gered/100 dark:text-geblue transition-all duration-300 group-hover:-translate-y-0.5 border border-gered/10 dark:border-gered/10 hover:shadow-md dark:hover:shadow-neutral-800/50"
                        >
                            <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                                Latest Match
                            </span>
                            <span className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300">
                                →
                            </span>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
