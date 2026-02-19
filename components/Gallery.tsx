"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const galleryImages = [
    { id: 1, title: "Garden Romance", category: "Outdoor", image: "/images/gallery1.png" },
    { id: 2, title: "Royal Banquet", category: "Indoor", image: "/images/gallery2.png" },
    { id: 3, title: "Elegant Dining", category: "Table Setting", image: "/images/gallery3.png" },
    { id: 4, title: "Floral Fantasy", category: "Decor", image: "/images/gallery4.png" },
];

function TiltCard({ image }: { image: typeof galleryImages[0] }) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="group relative h-72 md:h-96 w-full rounded-xl bg-slate-200 cursor-pointer"
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg overflow-hidden"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${image.image}')` }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
            </div>

            <div
                style={{ transform: "translateZ(100px)" }}
                className="absolute bottom-10 left-10 z-10"
            >
                <h3 className="text-3xl font-serif font-bold text-white mb-1 shadow-black/50 drop-shadow-lg">
                    {image.title}
                </h3>
                <p className="text-white/90 font-medium tracking-wide shadow-black/50 drop-shadow-lg">
                    {image.category}
                </p>
            </div>
        </motion.div>
    );
}

export default function Gallery() {
    return (
        <section id="work" className="py-24 bg-stone-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4"
                    >
                        Our Masterpieces
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 max-w-2xl mx-auto"
                    >
                        Hover over the images to experience the depth of our work.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {galleryImages.map((image) => (
                        <TiltCard key={image.id} image={image} />
                    ))}
                </div>
            </div>
        </section>
    );
}
