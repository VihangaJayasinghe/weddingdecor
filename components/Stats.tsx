"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Star, Heart, Trophy, Calendar } from "lucide-react";

// Simple CountUp component
const CountUp = ({ end, duration }: { end: number, duration: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / (duration * 1000), 1);

            setCount(Math.floor(end * percentage));

            if (progress < duration * 1000) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return <>{count}</>;
};

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
    const ref = useRef(null);
    const isinView = useInView(ref, { once: true });
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        if (isinView) {
            setAnimated(true);
        }
    }, [isinView]);

    return (
        <section ref={ref} className="bg-[#0b162c] py-24 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#112240_1px,transparent_1px),linear-gradient(to_bottom,#112240_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-10"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index} // Changed key to index as stat.id is no longer present in new stats array
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: stat.id * 0.1 }}
                            className="flex flex-col items-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-[#e6f1ff] mb-2 font-oswald flex justify-center items-center">
                                {animated ? (
                                    <CountUp end={stat.value} duration={2} />
                                ) : (
                                    0
                                )}
                                <span className="text-[#64ffda]">+</span>
                            </div>
                            <p className="text-[#8892b0] uppercase tracking-widest text-sm font-mono">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
