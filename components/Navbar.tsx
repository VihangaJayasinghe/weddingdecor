"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Our Work", href: "#work" },
        { name: "Services", href: "#services" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "circOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? "bg-white/90 backdrop-blur-lg shadow-md py-4 border-b border-stone-200/50"
                : "bg-gradient-to-b from-black/60 to-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between relative">
                {/* Mobile Menu Button - Left */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`p-2 focus:outline-none transition-colors ${isScrolled ? "text-slate-900" : "text-white"
                            }`}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Centered Logo */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <Link href="/" className={`text-2xl font-serif font-bold tracking-tighter transition-all duration-500 ${isScrolled ? "opacity-100 translate-y-0 text-slate-900" : "opacity-0 -translate-y-4 pointer-events-none"
                        }`}>
                        WeddingDreams
                    </Link>
                </div>

                {/* Empty div for spacing on mobile if needed, or just let justify-between handle it */}
                <div className="md:hidden w-10"></div>

                {/* Desktop Menu - Right */}
                <div className="hidden md:flex items-center space-x-8 ml-auto">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-semibold tracking-wide transition-colors ${isScrolled
                                ? "text-slate-800 hover:text-rose-600"
                                : "text-white/90 hover:text-white"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="px-5 py-2.5 rounded-full bg-rose-500 text-white text-sm font-medium hover:bg-rose-600 transition-all transform hover:scale-105"
                    >
                        Book Now
                    </Link>
                </div>


            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-xl font-serif font-medium text-slate-800 hover:text-rose-500 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="#contact"
                                className="w-full text-center px-5 py-3 rounded-full bg-rose-500 text-white font-medium hover:bg-rose-600"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Book Now
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
