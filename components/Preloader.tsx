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

export default function Preloader({ onComplete }: { onComplete: () => void }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        // Dynamic delay based on current step
        const delays = [3000, 800, 800, 800, 1500];
        const currentDelay = delays[index] || 800;

        const timer = setTimeout(() => {
            if (index < bootSequence.length - 1) {
                setIndex((prev) => prev + 1);
            } else {
                // Sequence complete
                onComplete();
            }
        }, currentDelay);

        return () => clearTimeout(timer);
    }, [index, onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
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
    );
}
