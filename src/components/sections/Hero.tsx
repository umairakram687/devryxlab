"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import heroData from "@/../data/hero.json";
import { Button } from "@/components/ui/Button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useDrawer } from "@/context/DrawerContext";
import HeroProjects from "./HeroProjects";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = heroData.slides;
  const { openDrawer } = useDrawer();
  
  // Mouse interaction state
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

  // Background parallax effects
  const bgX = useTransform(mouseX, [-0.5, 0.5], ["-50px", "50px"]);
  const bgY = useTransform(mouseY, [-0.5, 0.5], ["-50px", "50px"]);
  
  const bgXInv = useTransform(mouseX, [-0.5, 0.5], ["50px", "-50px"]);
  const bgYInv = useTransform(mouseY, [-0.5, 0.5], ["50px", "-50px"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;
    x.set(mouseXFromCenter / width);
    y.set(mouseYFromCenter / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-screen w-full overflow-hidden bg-[#0a0a0a] flex items-center text-white"
    >
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          style={{ x: bgXInv, y: bgYInv }}
          className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-40 animate-pulse" 
        />
        <motion.div 
          style={{ x: bgX, y: bgY }}
          className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] opacity-30" 
        />
        {/* Grid Pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        {/* Mouse Spotlight */}
        <motion.div
           style={{
             left: useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]), 
             top: useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]),
           }}
           className="absolute w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] opacity-30 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 will-change-transform"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Animated */}
          <div className="order-2 lg:order-1 text-center lg:text-left relative h-[450px] flex flex-col justify-center">
            <AnimatePresence>
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8, position: "absolute" }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col justify-center items-center lg:items-start"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  <span className="text-sm font-medium">{slides[currentSlide].highlight}</span>
                </motion.div>

                <motion.h1 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className="mb-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
                >
                  {slides[currentSlide].title.split(' & ').map((part: string, i: number, arr: string[]) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && <span className="text-primary"> & </span>}
                    </span>
                  ))}
                </motion.h1>
                
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  className="mb-8 text-xl text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed"
                >
                  {slides[currentSlide].description}
                </motion.p>
                
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
                >
                  <Button size="lg" className="cursor-pointer rounded-full px-8 text-base h-12" onClick={openDrawer}>
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Link href="#projects">
                    <Button size="lg" variant="outline" className="cursor-pointer rounded-full px-8 text-base text-black h-12 border-gray-700 hover:bg-white/10 hover:text-white">
                      View Case Studies
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Modern Project Cards - Persistent */}
          <div className="lg:h-[600px] flex items-center justify-center order-1 lg:order-2">
            <HeroProjects />
          </div>
        </div>
      </div>
      {/* Progress Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-500",
              currentSlide === index ? "bg-primary w-12" : "bg-white/20 w-8 hover:bg-white/40"
            )}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
