"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const galleryImages = [
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop", // Crowd
    "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop", // Party
    "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=2070&auto=format&fit=crop", // Concert
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop", // New Event 4 (Party/Club)
    "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2070&auto=format&fit=crop", // New Event 5 (Stage/Lights)
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop", // DJ
];

export default function Gallery() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
    const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

    return (
        <section id="gallery" ref={container} className="py-20 bg-black overflow-hidden relative">
            <div className="container mx-auto px-6 mb-12 relative z-10">
                <h2 className="text-6xl md:text-9xl font-oswald font-bold text-white uppercase tracking-tighter text-right">
                    Past <span className="text-[#E60000]">Experiences</span>
                </h2>
            </div>

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                <motion.div style={{ y }} className="space-y-8 flex flex-col md:pt-20">
                    <GalleryItem src={galleryImages[0]} height="h-[400px]" />
                    <GalleryItem src={galleryImages[1]} height="h-[500px]" />
                </motion.div>

                <motion.div style={{ y: y2 }} className="space-y-8 flex flex-col">
                    <GalleryItem src={galleryImages[2]} height="h-[600px]" />
                    <GalleryItem src={galleryImages[3]} height="h-[300px]" />
                </motion.div>

                <motion.div style={{ y: y3 }} className="space-y-8 flex flex-col md:pt-40">
                    <GalleryItem src={galleryImages[4]} height="h-[450px]" />
                    <GalleryItem src={galleryImages[5]} height="h-[350px]" />
                </motion.div>
            </div>
        </section>
    );
}

function GalleryItem({ src, height }: { src: string, height: string }) {
    return (
        <motion.div
            className={`relative ${height} w-full border border-[#222] overflow-hidden group`}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.9, once: false }}
        >
            <motion.div
                variants={{
                    hidden: { filter: "grayscale(100%)" },
                    visible: { filter: "grayscale(0%)" }
                }}
                transition={{ duration: 0.5 }}
                className="w-full h-full relative"
            >
                <Image
                    src={src}
                    alt="Event details"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </motion.div>
            {/* Mobile: Effect triggers at 90% view. Desktop: Hover still works via group-hover on Image scale, but grayscale might depend on scroll now or we can mix them. 
                Actually, to keep desktop hover behavior whilst adding mobile scroll behavior:
                The challenge is that 'hover' and 'whileInView' might conflict if we use the same property.
                
                Simpler approach for hybrid:
                Use CSS for hover on desktop (md:hover:grayscale-0). 
                Use framer motion to force grayscale-0 when in view on mobile only? 
                
                Actually, the user asked for "in mobile... make the images go hover effects when card 90% shows".
                This implies simulating the hover state.
            */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
        </motion.div>
    );
}
