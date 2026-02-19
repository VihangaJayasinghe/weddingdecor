"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function IntroModal({ onComplete }: { onComplete: () => void }) {
    // Force scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-[99999] bg-[#050505] flex flex-col items-center justify-center cursor-default"
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "circOut" }}
                className="text-center mb-12"
            >
                <p className="font-mono text-[#444] text-xs tracking-[0.5em] mb-4">ENGINEERED BY</p>
                <h1 className="text-[12vw] md:text-[8vw] font-oswald font-bold leading-none tracking-tighter text-[#f0f0f0]">
                    NANOPIX
                </h1>
            </motion.div>

            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                onClick={(e) => {
                    console.log("Continue button clicked");
                    if (typeof onComplete === 'function') {
                        onComplete();
                    } else {
                        console.error("onComplete is not a function:", onComplete);
                    }
                }}
                className="group relative px-8 py-3 bg-transparent overflow-hidden cursor-pointer z-50"
            >
                <span className="relative z-10 font-mono text-[#ccff00] text-sm tracking-widest uppercase group-hover:text-[#050505] transition-colors duration-300 pointer-events-none">
                    [ Continue ]
                </span>
                <div className="absolute inset-0 bg-[#ccff00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left pointer-events-none"></div>
            </motion.button>
        </motion.div>
    );
}
