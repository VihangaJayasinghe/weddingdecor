"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function IntroModal() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        // Show for 5 seconds then exit
        const timer = setTimeout(() => {
            setShow(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
                    onClick={() => setShow(false)} // Allow early dismissal
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 1.1, opacity: 0, y: -20 }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 20,
                            duration: 0.8
                        }}
                        className="flex flex-col items-center justify-center p-8 text-center"
                    >
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                                filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative w-[90vw] max-w-5xl h-[40vh] mb-2"
                        >
                            <Image
                                src="/images/nanopix_logo.png"
                                alt="Nanopix Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-6 flex flex-col items-center"
                        >
                            <div className="space-y-2 text-center">
                                <p className="text-stone-400 text-xs sm:text-sm uppercase tracking-[0.2em] font-light">
                                    This is a mockup design by
                                </p>
                                <h2 className="text-white text-sm sm:text-base uppercase tracking-[0.3em] font-light">
                                    Nanopix Web Solutions
                                </h2>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShow(false);
                                }}
                                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-full text-sm font-medium tracking-wider backdrop-blur-sm transition-colors"
                            >
                                Continue to Site
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
