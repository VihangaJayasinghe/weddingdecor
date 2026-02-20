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
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop", // Concert crowd
        category: "FESTIVAL",
        size: "col-span-1 md:col-span-2 row-span-2"
    },
    {
        id: 2,
        title: "CYBER RAVE",
        date: "APR 05, 2026",
        location: "BERLIN",
        image: "https://images.unsplash.com/photo-1571266028243-371695039989?q=80&w=1000&auto=format&fit=crop", // Club lighting
        category: "NIGHTLIFE",
        size: "col-span-1 md:col-span-1 row-span-1"
    },
    {
        id: 3,
        title: "TECH SUMMIT",
        date: "MAY 20, 2026",
        location: "SF BAY",
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000&auto=format&fit=crop", // Speaker
        category: "CORPORATE",
        size: "col-span-1 md:col-span-1 row-span-1"
    },
    {
        id: 4,
        title: "VELVET GALA",
        date: "JUN 15, 2026",
        location: "PARIS",
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop", // Party
        category: "GALA",
        size: "col-span-1 md:col-span-2 row-span-1"
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

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 grid-rows-none md:grid-rows-2 gap-4 h-auto md:h-[80vh]">
                {events.map((event, i) => (
                    <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={`group relative overflow-hidden bg-[#111] border border-[#222] hover:border-[#E60000] transition-colors duration-500 ${event.size} min-h-[300px]`}
                    >
                        <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                        <div className="absolute top-4 right-4 z-20">
                            <div className="bg-[#E60000] rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <ArrowUpRight size={20} className="text-black" />
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                            <span className="font-mono text-[#E60000] text-xs uppercase tracking-widest mb-2 block">
                                {event.category}
                            </span>
                            <h3 className="text-3xl md:text-5xl font-oswald font-bold uppercase leading-none mb-4">
                                {event.title}
                            </h3>
                            <div className="flex gap-6 font-mono text-sm text-gray-300">
                                <span className="flex items-center gap-2">
                                    <Calendar size={14} className="text-[#E60000]" /> {event.date}
                                </span>
                                <span className="flex items-center gap-2">
                                    <MapPin size={14} className="text-[#E60000]" /> {event.location}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
