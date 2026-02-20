"use client";

import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black pt-20 pb-10 px-6 border-t border-[#222]">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <div>
                        <h2 className="text-[12vw] leading-[0.8] font-oswald font-bold text-white tracking-tighter mb-8">
                            LET'S <br /> <span className="text-[#E60000]">ROCK.</span>
                        </h2>
                    </div>
                    <div className="flex flex-col justify-end items-start md:items-end">
                        <Link
                            href="mailto:bookings@eventx.com"
                            className="text-2xl md:text-5xl font-oswald text-white hover:text-[#E60000] transition-colors mb-8 flex items-center gap-4 group"
                        >
                            <Mail size={40} className="text-[#E60000]" />
                            bookings@eventx.com
                            <ArrowUpRight size={40} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>

                        <div className="flex gap-6">
                            {[Instagram, Twitter, Facebook].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 rounded-full border border-[#333] hover:border-[#E60000] hover:bg-[#E60000] flex items-center justify-center transition-all duration-300 text-white group">
                                    <Icon size={20} className="group-hover:text-black transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#222] pt-8 flex flex-col md:flex-row justify-between items-center text-[#666] font-mono text-xs uppercase tracking-widest">
                    <p>© 2026 EVENTx ENTERTAINMENT.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Careers</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
