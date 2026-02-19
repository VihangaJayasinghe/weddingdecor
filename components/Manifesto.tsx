"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Manifesto() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

    return (
        <section ref={container} className="relative py-40 px-6 bg-[#ccff00] text-[#050505] overflow-hidden">
            <motion.div style={{ y }} className="container mx-auto">
                <h2 className="text-[3rem] md:text-[5rem] font-oswald font-bold leading-[0.9] tracking-tighter uppercase">
                    We don't just build websites <br />
                    We build <span className="underline decoration-4 decoration-black text-[#050505] bg-white px-2">Digital Empires</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
                    <p className="text-xl md:text-2xl font-mono border-l-4 border-black pl-6 font-bold">
                        Most agencies play it safe. They give you what you ask for. We give you what you didn't know you needed.
                    </p>
                    <p className="text-lg font-sans opacity-90 leading-relaxed font-semibold">
                        In a world of templates and AI-generated noise, true impact comes from disruption. Precision engineering meets raw artistic chaos. That is Zyn.
                    </p>
                </div>

                <div className="mt-24 border-t-2 border-black pt-6 flex justify-between font-mono text-sm uppercase font-bold tracking-widest">
                    <span>// Manifesto 001</span>
                    <span>Est. 2026</span>
                </div>
            </motion.div>
        </section>
    );
}
