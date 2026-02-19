import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black py-12 border-t border-[#112240]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">

                    {/* Branding */}
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <Link href="/" className="text-2xl font-oswald font-bold tracking-tighter text-[#e6f1ff]">
                            ZYN<span className="text-[#64ffda]">.</span>
                        </Link>
                        <p className="text-[#8892b0] text-xs font-mono tracking-widest mt-2">
                            DIGITAL EXPERIENCE AGENCY
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="flex space-x-8 mb-6 md:mb-0">
                        {["Work", "Services", "About", "Contact"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-[#8892b0] hover:text-[#64ffda] text-sm uppercase tracking-wider transition-colors"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* Socials */}
                    <div className="flex space-x-4">
                        <a href="#" className="text-[#8892b0] hover:text-[#64ffda] transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="text-[#8892b0] hover:text-[#64ffda] transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="text-[#8892b0] hover:text-[#64ffda] transition-colors"><Facebook size={20} /></a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-[#112240] flex flex-col md:flex-row justify-between items-center text-[#8892b0] text-xs font-mono">
                    <p>&copy; {new Date().getFullYear()} ZYN AGENCY. ALL RIGHTS RESERVED.</p>
                    <p>DESIGNED BY NANOPIX</p>
                </div>
            </div>
        </footer>
    );
}
