"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <div ref={container} className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
            {/* Dynamic Background */}
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black z-10" />
                <div
                    className="w-full h-full bg-cover bg-center opacity-60"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop')" }}
                />
            </motion.div>

            {/* Content */}
            <motion.div style={{ y: textY }} className="relative z-20 text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "circOut" }}
                    className="text-[15vw] md:text-[20vw] leading-[0.8] font-oswald font-bold text-white tracking-tighter mix-blend-difference"
                >
                    EVENT<span className="text-[#E60000]">x</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="font-mono text-[#E60000] text-sm md:text-xl tracking-[0.5em] mt-4 md:mt-8 uppercase bg-black px-6 py-3 border border-[#333] inline-block shadow-2xl"
                >
                    Experience The Unforgettable
                </motion.p>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white flex flex-col items-center gap-2"
            >
                <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-[#E60000] to-transparent" />
            </motion.div>
        </div>
    );
}
