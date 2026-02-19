"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="min-h-screen bg-[#050505] flex items-center justify-center relative overflow-hidden px-6">
            <div className="container mx-auto text-center z-10">
                <p className="text-[#ccff00] font-mono mb-8 tracking-widest uppercase font-bold">// Ready to disrupt?</p>

                <motion.a
                    href="mailto:hello@zyn.agency"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="group relative inline-block"
                >
                    <h2 className="text-[18vw] md:text-[12vw] leading-none font-oswald font-bold text-[#f0f0f0] group-hover:text-[#ccff00] transition-colors duration-200 tracking-tighter mix-blend-difference">
                        SAY HELLO
                    </h2>
                    <ArrowUpRight className="absolute -top-4 -right-8 md:-right-24 text-[#ccff00] w-12 h-12 md:w-32 md:h-32 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300 transform md:group-hover:translate-x-4 md:group-hover:-translate-y-4" />
                </motion.a>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-[#888] font-mono text-sm tracking-wider uppercase">
                    <div>
                        <span className="block text-[#f0f0f0] mb-2 font-bold">Email</span>
                        hello@zyn.agency
                    </div>
                    <div>
                        <span className="block text-[#f0f0f0] mb-2 font-bold">Location</span>
                        Neo-Tokyo, Sector 7
                    </div>
                    <div>
                        <span className="block text-[#f0f0f0] mb-2 font-bold">Socials</span>
                        @zyn_agency
                    </div>
                </div>
            </div>
        </section>
    );
}
