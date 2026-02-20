"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-[#E60000] text-black relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-12 items-start md:items-center">

                <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                        <ArrowLeft size={32} className="text-black" />
                        <span className="font-mono uppercase tracking-widest text-sm font-bold">Get In Touch</span>
                    </div>
                    <h2 className="text-[12vw] leading-[0.8] font-oswald font-bold tracking-tighter mix-blend-multiply">
                        <span className="block">PLAN</span>
                        <span className="block pl-[10vw]">YOUR</span>
                        <span className="block text-white">EVENT</span>
                    </h2>
                </div>

                <div className="flex-1 w-full md:w-auto bg-black p-8 md:p-12">
                    <form className="flex flex-col gap-6">
                        <div>
                            <label className="block font-mono text-[#E60000] text-xs uppercase tracking-widest mb-2">Name</label>
                            <input type="text" className="w-full bg-transparent border-b border-[#333] py-2 text-white outline-none focus:border-[#E60000] transition-colors font-oswald text-xl uppercase" placeholder="JOHN DOE" />
                        </div>
                        <div>
                            <label className="block font-mono text-[#E60000] text-xs uppercase tracking-widest mb-2">Email</label>
                            <input type="email" className="w-full bg-transparent border-b border-[#333] py-2 text-white outline-none focus:border-[#E60000] transition-colors font-oswald text-xl uppercase" placeholder="HELLO@EVENTX.COM" />
                        </div>
                        <div>
                            <label className="block font-mono text-[#E60000] text-xs uppercase tracking-widest mb-2">Event Details</label>
                            <textarea rows={4} className="w-full bg-transparent border-b border-[#333] py-2 text-white outline-none focus:border-[#E60000] transition-colors font-mono text-sm" placeholder="Tell us about your vision..." />
                        </div>
                        <button className="mt-4 bg-[#E60000] text-black font-oswald font-bold text-xl uppercase py-4 hover:bg-white transition-colors">
                            Submit Request
                        </button>
                    </form>
                </div>

            </div>

            {/* Background Text Texture */}
            <div className="absolute -bottom-20 -right-20 text-[20vw] font-oswald font-bold opacity-10 pointer-events-none select-none text-black leading-none">
                CONTACT
            </div>
        </section>
    );
}
