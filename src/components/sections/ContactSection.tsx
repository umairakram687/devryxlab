"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, Mail } from "lucide-react";

export default function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden bg-background">
      {/* Background Scrolling Elements */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="flex gap-8 absolute top-0 left-1/2 -translate-x-1/2 -rotate-12 w-[150%] h-[150%]">
           {/* Column 1 - Up */}
           <motion.div style={{ y: y1 }} className="flex flex-col gap-8 w-60 md:w-80">
             {[1, 2, 3, 4, 5].map((i) => (
               <div key={`c1-${i}`} className="w-full aspect-[3/4] bg-primary rounded-2xl" />
             ))}
           </motion.div>
           
           {/* Column 2 - Down */}
           <motion.div style={{ y: y2 }} className="flex flex-col gap-8 w-60 md:w-80 mt-20">
             {[1, 2, 3, 4, 5].map((i) => (
               <div key={`c2-${i}`} className="w-full aspect-[3/4] bg-secondary rounded-2xl" />
             ))}
           </motion.div>

           {/* Column 3 - Up */}
           <motion.div style={{ y: y1 }} className="flex flex-col gap-8 w-60 md:w-80">
             {[1, 2, 3, 4, 5].map((i) => (
               <div key={`c3-${i}`} className="w-full aspect-[3/4] bg-primary rounded-2xl" />
             ))}
           </motion.div>

           {/* Column 4 - Down */}
           <motion.div style={{ y: y2 }} className="flex flex-col gap-8 w-60 md:w-80 mt-20">
             {[1, 2, 3, 4, 5].map((i) => (
               <div key={`c4-${i}`} className="w-full aspect-[3/4] bg-secondary rounded-2xl" />
             ))}
           </motion.div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
             <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
              Ready to start your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Next Project?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              We help ambitious brands and startups create digital products that stand out.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button 
               onClick={() => {
                 const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                 
                 if (isMobile) {
                   // Default mail client on mobile (Safari/Mail app etc)
                   window.location.href = "mailto:hello@mycompany.com";
                 } else {
                   // Desktop: Try Gmail Web first
                   window.open(
                     "https://mail.google.com/mail/?view=cm&fs=1&to=hello@mycompany.com",
                     "_blank"
                   );
                 }
               }}
               className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-full bg-primary px-10 font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-105 cursor-pointer"
             >
                <span className="mr-2 text-lg">Send us an email</span>
                <Mail className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
             </button>
             
             <Button 
               variant="outline" 
               size="lg" 
               className="h-16 rounded-full px-10 text-lg border-2 hover:bg-muted cursor-pointer text-black"
               onClick={() => window.open("https://calendar.google.com/calendar/render?action=TEMPLATE&text=Meeting+with+Digital+Agency&add=hello@mycompany.com", "_blank")}
             >
                Schedule a Call <ArrowUpRight className="ml-2 h-5 w-5" />
             </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
