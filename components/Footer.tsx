import Link from "next/link";
import { Instagram, Facebook, Twitter, ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#050505] pt-20 pb-10 px-6 border-t border-[#121212] overflow-hidden">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="md:col-span-2">
                        <Link href="/" className="text-[4rem] md:text-[8rem] leading-[0.8] font-oswald font-bold tracking-tighter text-[#121212] hover:text-[#ccff00] transition-colors duration-500 block mb-8">
                            ZYN.AGNCY
                        </Link>
                        <p className="font-mono text-[#444] text-sm md:max-w-md uppercase tracking-wider">
                            // Based in Neo-Tokyo<br />
                            // Operating Global.<br />
                            // Since 2026.
                        </p>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <h4 className="font-mono text-[#ccff00] text-xs uppercase tracking-widest mb-4">Sitemap</h4>
                        {["Work", "Services", "Manifesto", "Contact"].map((item) => (
                            <Link key={item} href={`#${item.toLowerCase()}`} className="text-[#888] hover:text-[#f0f0f0] text-lg font-bold font-oswald uppercase tracking-wide transition-colors flex items-center group">
                                <ArrowUpRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-[#ccff00]" />
                                {item}
                            </Link>
                        ))}
                    </div>

                    <div className="flex flex-col space-y-4">
                        <h4 className="font-mono text-[#ccff00] text-xs uppercase tracking-widest mb-4">Socials</h4>
                        {["Instagram", "Twitter", "LinkedIn", "Behance"].map((item) => (
                            <a key={item} href="#" className="text-[#888] hover:text-[#f0f0f0] text-lg font-bold font-oswald uppercase tracking-wide transition-colors flex items-center group">
                                <ArrowUpRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-[#ccff00]" />
                                {item}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="border-t border-[#121212] pt-8 flex flex-col md:flex-row justify-between items-end md:items-center text-[#333] font-mono text-xs uppercase tracking-widest">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-4 md:mb-0">
                        <span>© 2026 ZYN AGENCY</span>
                        <span>Privacy Policy</span>
                        <span>Terms of Chaos</span>
                    </div>
                    <p className="text-[#ccff00]/20">ENGINEERED BY NANOPIX</p>
                </div>
            </div>
        </footer>
    );
}
