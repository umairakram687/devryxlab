"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

const CustomCursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    
    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
            setIsVisible(true);
        };

        const handleMouseDown = () => {
           document.body.classList.add("cursor-clicked");
        };

        const handleMouseUp = () => {
            document.body.classList.remove("cursor-clicked");
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className={cn(
                "fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] hidden md:block",
                !isVisible && "opacity-0"
            )}
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
            }}
        >
            <div className="absolute inset-0 border-2 border-primary rounded-full" />
            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
        </motion.div>
    );
};

export default CustomCursor;
