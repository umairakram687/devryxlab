"use client";

import { motion } from "framer-motion";
import { 
  Heart,
  Activity,
  Shield,
  Zap,
  Layers,
  ShoppingBag
} from "lucide-react";

// Initial set of logos using project names
const logos = [
  { name: "eGP Health", icon: Heart },
  { name: "MediRecords", icon: Activity },
  { name: "PanAsia", icon: Heart },
  { name: "Spectrum", icon: Heart },
  { name: "NeoTest", icon: Activity },
  { name: "Tabbna", icon: Heart },
  { name: "Medi-QR", icon: Shield },
  { name: "ExerciseNow", icon: Activity },
  { name: "Ribbon & Bow", icon: ShoppingBag },
  { name: "Diamond Guys", icon: Zap },
];

export default function MarqueeSection() {
  // Split logos for visual variety if desired, or use same set
  const row1 = logos.slice(0, 6);
  const row2 = logos.slice(6, 12);

  return (
    <section className="pt-24 pb-12 bg-neutral-950 overflow-hidden relative border-t border-white/10">
       <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">Trusted Partners</h2>
        <p className="text-neutral-400 text-center max-w-2xl mx-auto">
          We collaborate with leading companies to deliver exceptional digital experiences.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {/* Row 1: Left to Right */}
        <div className="flex relative overflow-hidden">
             {/* Gradient Masks */}
             <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
             <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />
             
             <motion.div
              className="flex gap-12 md:gap-24 min-w-full flex-nowrap items-center"
              initial={{ x: "-50%" }}
              animate={{ x: "0%" }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* Quadruple the content to ensure smooth looping on large screens */}
              {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                <div key={`r1-${index}`} className="flex items-center gap-3 shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-pointer group">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl group-hover:bg-white/10 transition-colors">
                     <logo.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                  </div>
                  <span className="text-xl font-semibold text-white">
                    {logo.name}
                  </span>
                </div>
              ))}
            </motion.div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex relative overflow-hidden">
             {/* Gradient Masks */}
             <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
             <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex gap-12 md:gap-24 min-w-full flex-nowrap items-center"
              initial={{ x: "0%" }}
              animate={{ x: "-50%" }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...logos, ...logos, ...logos, ...logos].reverse().map((logo, index) => (
                 <div key={`r2-${index}`} className="flex items-center gap-3 shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-pointer group">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl group-hover:bg-white/10 transition-colors">
                     <logo.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                  </div>
                  <span className="text-xl font-semibold text-white">
                    {logo.name}
                  </span>
                </div>
              ))}
            </motion.div>
        </div>
      </div>
    </section>
  );
}
