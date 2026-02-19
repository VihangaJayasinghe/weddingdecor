import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-stone-900 text-stone-300 py-16 border-t border-stone-800">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-3xl font-serif font-bold text-white mb-6 block tracking-tighter">
                            WeddingDreams
                        </Link>
                        <p className="text-stone-400 max-w-sm mb-8 leading-relaxed">
                            Crafting unforgettable moments through exquisite design and decor. Your vision, our masterpiece.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all duration-300" aria-label="Instagram">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all duration-300" aria-label="Pinterest">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all duration-300" aria-label="Facebook">
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white text-lg font-bold mb-6 font-serif">Quick Links</h4>
                        <ul className="space-y-4">
                            {[
                                { name: "Home", href: "/" },
                                { name: "Our Work", href: "#work" },
                                { name: "Services", href: "#services" },
                                { name: "Contact", href: "#contact" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="hover:text-rose-500 transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white text-lg font-bold mb-6 font-serif">Contact</h4>
                        <ul className="space-y-4 text-stone-400">
                            <li>123 Wedding Lane</li>
                            <li>Love City, WD 56789</li>
                            <li>+1 (555) 123-4567</li>
                            <li>hello@weddingdreams.com</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-stone-500">
                        &copy; {new Date().getFullYear()} WeddingDreams Decor. All rights reserved.
                    </p>

                    {/* Nanopix Branding */}
                    <div className="flex items-center gap-3 bg-stone-800/50 py-2 px-4 rounded-full border border-stone-700/50 hover:bg-stone-800 transition-colors">
                        <span className="text-xs text-stone-400 uppercase tracking-wider font-semibold">
                            Mockup design by
                        </span>
                        <div className="flex items-center gap-2">
                            <div className="relative w-24 h-6">
                                <Image
                                    src="/images/nanopix_logo.png"
                                    alt="Nanopix Web Solutions"
                                    fill
                                    className="object-contain opacity-80"
                                />
                            </div>
                            <span className="text-xs font-bold text-white tracking-wide hidden">Nanopix Web Solutions</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
