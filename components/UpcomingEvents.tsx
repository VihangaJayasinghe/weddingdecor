"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";

const events = [
    {
        id: 1,
        title: "NEON HORIZON",
        date: "MAR 12, 2026",
        location: "TOKYO DOME",
        image: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=1200", // Festival Crowd (Blue/Red)
        category: "FESTIVAL",
        size: "col-span-1 md:col-span-7"
    },
    {
        id: 2,
        title: "CYBER RAVE",
        date: "APR 05, 2026",
        location: "BERLIN",
        image: "https://images.unsplash.com/photo-1574391884720-385e6e2887c2?q=80&w=1200", // Laser Club (Green/Dark)
        category: "NIGHTLIFE",
        size: "col-span-1 md:col-span-5"
    },
    {
        id: 3,
        title: "TECH SUMMIT",
        date: "MAY 20, 2026",
        location: "SF BAY",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200", // Conference (Blue)
        category: "CORPORATE",
        size: "col-span-1 md:col-span-5"
    },
    {
        id: 4,
        title: "VELVET GALA",
        date: "JUN 15, 2026",
        location: "PARIS",
        image: "https://images.unsplash.com/photo-1519671482538-307eb0c5c4f2?q=80&w=1200", // Gala/Ballroom (Warm/Gold)
        category: "GALA",
        size: "col-span-1 md:col-span-7"
    }
];

export default function UpcomingEvents() {
    return (
        <section id="events" className="py-20 bg-black text-white">
            <div className="container mx-auto px-6 mb-12">
                <h2 className="text-6xl md:text-9xl font-oswald font-bold uppercase tracking-tighter">
                    Upcoming <span className="text-[#E60000]">Events</span>
                </h2>
            </div>

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-6 h-auto">
                {events.map((event, i) => (
                    <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        className={`group relative overflow-hidden bg-[#111] border border-[#222] hover:border-[#E60000] transition-colors duration-500 ${event.size} min-h-[400px] md:min-h-[500px] flex flex-col justify-end`}
                    >
                        {/* Image Container */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src={event.image}
                                alt={event.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                        </div>

                        {/* Hover Icon */}
                        <div className="absolute top-6 right-6 z-20">
                            <div className="bg-[#E60000] rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 scale-75 group-hover:scale-100 shadow-[0_0_20px_rgba(230,0,0,0.5)]">
                                <ArrowUpRight size={24} className="text-black" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <span className="font-mono text-[#E60000] text-xs uppercase tracking-[0.2em] mb-3 block">
                                {event.category}
                            </span>
                            <h3 className="text-4xl md:text-6xl font-oswald font-bold uppercase leading-[0.9] mb-6 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                {event.title}
                            </h3>

                            <div className="flex flex-col md:flex-row gap-4 md:gap-8 font-mono text-sm text-gray-300 border-t border-white/20 pt-6 opacity-80 group-hover:opacity-100 transition-opacity">
                                <span className="flex items-center gap-2">
                                    <Calendar size={16} className="text-[#E60000]" /> {event.date}
                                </span>
                                <span className="flex items-center gap-2">
                                    <MapPin size={16} className="text-[#E60000]" /> {event.location}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
