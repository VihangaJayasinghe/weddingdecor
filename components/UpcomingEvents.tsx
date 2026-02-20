"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

// Placeholder data - replace with real API data if needed
const events = [
    {
        id: 1,
        title: "Neon Horizon Festival",
        date: "MAR 12, 2026",
        location: "TOKYO DOME",
        image: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=1000&auto=format&fit=crop",
        category: "MUSIC FESTIVAL"
    },
    {
        id: 2,
        title: "Cyberpunk Rave 2077",
        date: "APR 05, 2026",
        location: "BERLIN UNDERGROUND",
        image: "https://images.unsplash.com/photo-1574391884720-385e6e2887c2?q=80&w=1000&auto=format&fit=crop",
        category: "NIGHTLIFE"
    },
    {
        id: 3,
        title: "Tech Summit X",
        date: "MAY 20, 2026",
        location: "SILICON VALLEY",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop",
        category: "CORPORATE"
    },
    {
        id: 4,
        title: "Red Velvet Gala",
        date: "JUN 15, 2026",
        location: "PARIS OPERA",
        image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=1000&auto=format&fit=crop",
        category: "GALA"
    }
];

export default function UpcomingEvents() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

    return (
        <section ref={targetRef} id="events" className="relative h-[300vh] bg-[#050505]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="absolute top-10 left-10 md:left-20 z-20">
                    <h2 className="text-6xl md:text-9xl font-oswald font-bold text-white uppercase tracking-tighter mix-blend-difference">
                        Upcoming <span className="text-transparent stroke-text">Events</span>
                    </h2>
                </div>

                <motion.div style={{ x }} className="flex gap-10 pl-[10vw]">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="group relative h-[60vh] w-[80vw] md:w-[35vw] flex-shrink-0 overflow-hidden bg-[#111] border border-[#333] hover:border-[#E60000] transition-colors duration-500"
                        >
                            <div className="absolute inset-0">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="font-mono text-[#E60000] text-xs uppercase tracking-widest bg-black/80 px-2 py-1">
                                        {event.category}
                                    </span>
                                </div>
                                <h3 className="text-3xl md:text-5xl font-oswald font-bold text-white uppercase mb-4 leading-none">
                                    {event.title}
                                </h3>
                                <div className="flex flex-col space-y-2 font-mono text-sm text-gray-300 border-t border-[#333] pt-4 group-hover:border-[#E60000] transition-colors">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} className="text-[#E60000]" />
                                        {event.date}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} className="text-[#E60000]" />
                                        {event.location}
                                    </div>
                                </div>
                                <button className="mt-6 flex items-center gap-2 text-white font-mono text-xs uppercase tracking-widest hover:text-[#E60000] transition-colors group/btn">
                                    Get Tickets <ArrowRight size={16} className="transform group-hover/btn:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                    {/* "View All" Card */}
                    <div className="h-[60vh] w-[20vw] flex-shrink-0 flex items-center justify-center border-l border-[#333]">
                        <a href="#" className="font-oswald text-4xl text-white hover:text-[#E60000] transition-colors uppercase -rotate-90 whitespace-nowrap">
                            View All Events -&gt;
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
