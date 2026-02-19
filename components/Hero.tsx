"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={targetRef} className="relative h-screen w-full bg-[#050505] overflow-hidden flex flex-col justify-center px-6 md:px-12">
            {/* Raw Data Background - Subtle */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden font-mono text-xs leading-none break-all text-[#ccff00]">
                {Array(100).fill("01011001 ZYN SYSTEM INITIALIZED 0010101 ERROR 404 REALITY NOT FOUND ").join("")}
            </div>

            {/* Main Content */}
            <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-[90vw]">
                <div className="flex flex-col items-start border-l-4 border-[#ccff00] pl-6 md:pl-12">
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        className="text-[25vw] md:text-[15vw] leading-[0.8] md:leading-[0.85] font-oswald font-bold text-[#f0f0f0] tracking-tighter mix-blend-difference"
                    >
                        ZYN
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="mt-8 flex flex-col md:flex-row gap-8 md:items-end"
                    >
                        <p className="font-mono text-[#ccff00] text-sm md:text-base tracking-widest uppercase max-w-md font-bold">
                        // We do not design.<br />
                        // We engineer culture.<br />
                        // EST. 2026
                        </p>

                        <div className="h-[2px] w-24 bg-[#ccff00] hidden md:block mb-4"></div>

                        <p className="text-[#888] text-sm max-w-sm leading-relaxed font-mono">
                            Rejecting the template. Embracing the noise. Digital experiences for brands that aren't afraid of the dark.
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Floating Abstract Element */}
            <div className="absolute top-[20%] right-[10%] w-[30vh] h-[30vh] border-2 border-[#ccff00]/40 rounded-full mix-blend-overlay animate-pulse"></div>
            <div className="absolute bottom-[20%] left-[10%] w-[20vh] h-[20vh] border border-[#f0f0f0]/20 rotate-45 mix-blend-overlay"></div>

            {/* Abstract Futuristic Background */}
            <div className="absolute inset-0 -z-0">
                <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#121212] via-[#050505] to-[#000000] opacity-80" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay grayscale contrast-125" />

                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ccff00_1px,transparent_1px),linear-gradient(to_bottom,#ccff00_1px,transparent_1px)] bg-[size:100px_100px] opacity-[0.03]"></div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 right-10 flex flex-col items-end">
                <span className="text-[#ccff00] font-mono text-xs mb-2 font-bold">SCROLL_DOWN</span>
                <div className="w-1 h-12 bg-[#121212] overflow-hidden">
                    <motion.div
                        animate={{ y: ["-100%", "100%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="w-full h-1/2 bg-[#ccff00]"
                    />
                </div>
            </div>
        </section>
    );
}
