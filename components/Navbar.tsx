"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "WORK", href: "#work" },
    { name: "SERVICES", href: "#services" },
    { name: "ABOUT", href: "#about" },
    { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#020c1b]/90 backdrop-blur-md py-4 shadow-lg border-b border-[#112240]" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className={`text-2xl font-oswald font-bold tracking-tighter transition-all duration-500 ${isScrolled ? "opacity-100 translate-y-0 text-[#f0f0f0]" : "opacity-0 -translate-y-4 pointer-events-none"
                    }`}>
                    ZYN<span className="text-[#ccff00]">.</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {["Work", "Manifesto", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={item === "Manifesto" ? "#manifesto" : `#${item.toLowerCase()}`}
                            className={`text-sm font-mono uppercase tracking-widest hover:text-[#ccff00] transition-colors ${isScrolled ? "text-[#f0f0f0]" : "text-[#f0f0f0]"
                                }`}
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden z-50">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-[#ccff00] focus:outline-none"
                    >
                        {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-0 bg-[#050505] z-40 flex flex-col items-center justify-center md:hidden"
                    >
                        <div className="flex flex-col space-y-8 text-center">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-4xl font-oswald text-[#f0f0f0] hover:text-[#ccff00] tracking-tighter"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <span className="text-[#ccff00] text-lg mr-2">0{index + 1}.</span>{link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
