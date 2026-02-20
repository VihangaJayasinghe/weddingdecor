"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const galleryImages = [
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop", // Crowd
    "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop", // Party
    "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=2070&auto=format&fit=crop", // Concert
    "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=2070&auto=format&fit=crop", // Club
    "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=2070&auto=format&fit=crop", // Stage
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop", // DJ
];

export default function Gallery() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

    return (
        <section id="gallery" ref={container} className="py-20 bg-black overflow-hidden relative">
            <div className="container mx-auto px-6 mb-12 relative z-10">
                <h2 className="text-6xl md:text-9xl font-oswald font-bold text-white uppercase tracking-tighter text-right">
                    Past <span className="text-[#E60000]">Experiences</span>
                </h2>
            </div>

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                <motion.div style={{ y }} className="space-y-8 flex flex-col pt-20">
                    <div className="relative h-[400px] w-full border border-[#222]">
                        <Image src={galleryImages[0]} alt="Event 1" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <div className="relative h-[500px] w-full border border-[#222]">
                        <Image src={galleryImages[1]} alt="Event 2" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                    </div>
                </motion.div>

                <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "10%"]) }} className="space-y-8 flex flex-col">
                    <div className="relative h-[600px] w-full border border-[#222]">
                        <Image src={galleryImages[2]} alt="Event 3" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <div className="relative h-[300px] w-full border border-[#222]">
                        <Image src={galleryImages[3]} alt="Event 4" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                    </div>
                </motion.div>

                <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]) }} className="space-y-8 flex flex-col pt-40">
                    <div className="relative h-[450px] w-full border border-[#222]">
                        <Image src={galleryImages[4]} alt="Event 5" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <div className="relative h-[350px] w-full border border-[#222]">
                        <Image src={galleryImages[5]} alt="Event 6" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
