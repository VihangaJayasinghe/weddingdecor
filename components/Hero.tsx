"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background with Scroll Parallax */}
            <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/hero.png')" }}
                />
                <div className="absolute inset-0 bg-black/40" />
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 text-center px-4 w-full flex flex-col items-center justify-center"
            >
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
                    className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white mb-4 tracking-tighter"
                >
                    WeddingDreams
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-sm md:text-base font-medium text-white/80 mb-6 tracking-[0.3em] uppercase"
                >
                    Creating Timeless Memories
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center mt-20"
                >
                    <a
                        href="#contact"
                        className="px-10 py-4 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-transparent hover:text-white border border-transparent hover:border-white transition-all duration-500 w-full sm:w-auto"
                    >
                        Start Planning
                    </a>
                    <a
                        href="#work"
                        className="px-10 py-4 bg-transparent border border-white text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white hover:text-black transition-all duration-500 w-full sm:w-auto backdrop-blur-sm"
                    >
                        View Our Work
                    </a>
                </motion.div>
            </motion.div>



            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-20"
            >
                <span className="text-white/70 text-xs uppercase tracking-widest">Scroll to Explore</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
            </motion.div>
        </section>
    );
}
