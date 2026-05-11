"use client";

import { useDrawer } from "@/context/DrawerContext";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare } from "lucide-react";

export default function FloatingContactButton() {
  const { isOpen, openDrawer } = useDrawer();

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.button
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={openDrawer}
          className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-1 rounded-l-lg shadow-lg flex items-center justify-center gap-2 transition-colors group"
          style={{ writingMode: "vertical-rl" }}
        >
          <span className="rotate-180 py-2 tracking-wide text-sm md:text-base whitespace-nowrap">
            Let's Talk Business
          </span>
          <MessageSquare className="w-5 h-5 -rotate-90 mb-2" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
