"use client";

import * as React from "react";
import { Moon, Sun, Palette } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const themes = [
  {
    name: "Default",
    primary: "#4f46e5", // Indigo 600
    secondary: "#ec4899", // Pink 500
  },
  {
    name: "Emerald",
    primary: "#10b981", // Emerald 500
    secondary: "#3b82f6", // Blue 500
  },
  {
    name: "Orange",
    primary: "#f97316", // Orange 500
    secondary: "#8b5cf6", // Violet 500
  },
  {
    name: "Cyber",
    primary: "#0ea5e9", // Sky 500
    secondary: "#f43f5e", // Rose 500
  },
];

export function ThemeSwitcher() {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const setTheme = (primary: string, secondary: string) => {
    // Update CSS variables on the root element with high priority
    document.documentElement.style.setProperty("--primary", primary, "important");
    document.documentElement.style.setProperty("--secondary", secondary, "important");
    
    // Also update specific color variables that might be used by Tailwind's theme system
    document.documentElement.style.setProperty("--color-primary", primary, "important");
    document.documentElement.style.setProperty("--color-secondary", secondary, "important");
    
    setIsOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="relative group overflow-hidden hover:bg-primary/10 text-primary transition-all duration-300"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        <Palette className="h-5 w-5 z-10 relative" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 rounded-xl bg-background/90 backdrop-blur-xl border border-white/10 shadow-2xl p-2 z-50 ring-1 ring-black/5"
          >
            <div className="space-y-1">
              <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Select Theme
              </div>
              {themes.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => setTheme(theme.primary, theme.secondary)}
                  className="w-full flex items-center gap-3 px-2 py-2 text-sm font-medium rounded-lg hover:bg-white/5 transition-colors group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  
                  <div className="flex -space-x-1">
                    <div 
                      className="w-4 h-4 rounded-full border border-white/20 shadow-sm" 
                      style={{ backgroundColor: theme.primary }} 
                    />
                    <div 
                      className="w-4 h-4 rounded-full border border-white/20 shadow-sm" 
                      style={{ backgroundColor: theme.secondary }} 
                    />
                  </div>
                  <span className="text-foreground">{theme.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
