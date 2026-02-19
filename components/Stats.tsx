"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
    { id: 1, value: 500, label: "Weddings Designed", suffix: "+" },
    { id: 2, value: 12, label: "Years Experience", suffix: "" },
    { id: 3, value: 100, label: "Satisfaction Rate", suffix: "%" },
    { id: 4, value: 50, label: "Partner Venues", suffix: "+" },
];

function Counter({ from, to, duration }: { from: number; to: number; duration: number }) {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;

        const element = nodeRef.current;
        if (!element) return;

        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);

            element.textContent = Math.floor(progress * (to - from) + from).toString();

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [isInView, from, to, duration]);

    return <span ref={nodeRef} />;
}

export default function Stats() {
    return (
        <section className="py-20 bg-rose-500 text-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: stat.id * 0.1 }}
                            className="flex flex-col items-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold mb-2 font-serif">
                                <Counter from={0} to={stat.value} duration={2} />
                                {stat.suffix}
                            </div>
                            <div className="text-white/80 text-sm md:text-base uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
