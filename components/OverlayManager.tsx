"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "./Preloader";
import IntroModal from "./IntroModal";

export default function OverlayManager() {
    const [stage, setStage] = useState<"boot" | "intro" | "complete">("boot");

    // Lock scroll while overlay is active and force top
    useEffect(() => {
        // Prevent browser from restoring scroll position
        if (typeof window !== "undefined") {
            window.history.scrollRestoration = "manual";
        }

        if (stage !== "complete") {
            document.body.style.overflow = "hidden";
            window.scrollTo(0, 0);
        } else {
            document.body.style.overflow = "auto";
            // Ensure we are still at top when revealing
            window.scrollTo(0, 0);
        }
    }, [stage]);

    return (
        <AnimatePresence mode="wait">
            {stage === "boot" && (
                <Preloader key="preloader" onComplete={() => setStage("intro")} />
            )}
            {stage === "intro" && (
                <IntroModal key="intro" onComplete={() => setStage("complete")} />
            )}
        </AnimatePresence>
    );
}
