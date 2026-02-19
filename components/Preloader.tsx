"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootSequence = [
    "INITIALIZING ZYN KERNEL...",
    "LOADING ASSETS [||||||||||] 100%",
    "BYPASSING SECURITY PROTOCOLS...",
    "ACCESS GRANTED.",
    "WELCOME TO THE VOID."
];

export default function Preloader() {
    const [index, setIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => {
                if (prev >= bootSequence.length - 1) {
                    clearInterval(interval);
                    setTimeout(() => setIsVisible(false), 1000); // Fade out after last message
                    return prev;
                }
                return prev + 1;
            });
        }, 800); // Speed of each message

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[99999] bg-[#050505] flex flex-col items-center justify-center font-mono text-[#ccff00] p-6 cursor-wait"
                >
                    <div className="w-full max-w-md">
                        {bootSequence.slice(0, index + 1).map((text, i) => (
                            <motion.p
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="mb-2 text-sm md:text-base tracking-wider"
                            >
                                <span className="mr-2 opacity-50">{`>`}</span>
                                {text}
                            </motion.p>
                        ))}
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.5 }}
                            className="inline-block w-3 h-5 bg-[#ccff00] ml-2 align-middle"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
