"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const testimonials = [
  {
    id: 1,
    name: "Elena Rodriguez",
    role: "Marketing Director",
    company: "TechNova",
    content: "The attention to detail and creative approach completely transformed our brand identity. The team was responsive, professional, and delivered beyond our expectations.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Founder",
    company: "StartUp Flow",
    content: "An absolute game-changer for our business. The web application they built is not only stunning but incredibly performant. User engagement has doubled since launch.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    role: "CTO",
    company: "CloudScale",
    content: "Technical expertise is top-notch. They handled complex backend integrations seamlessly while maintaining a beautiful frontend user experience.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=600",
    rating: 5,
  },
  {
    id: 4,
    name: "David Miller",
    role: "VP of Product",
    company: "InnovateX",
    content: "Professional, creative, and reliable. They took our vague ideas and turned them into a concrete, market-ready product in record time.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600",
    rating: 5,
  },
  {
    id: 5,
    name: "Jessica Wong",
    role: "Design Lead",
    company: "Creative Studio",
    content: "As a designer myself, I'm hard to please. But their eye for aesthetics and animation details is truly impressive. Highly recommended.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600",
    rating: 5,
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(1); // Start with second item for visual balance

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, []);

  const getSlideStyles = (index: number) => {
    const total = testimonials.length;
    // Calculate distance from active index, handling wrap-around
    let distance = (index - activeIndex + total) % total;
    if (distance > total / 2) distance -= total;

    if (distance === 0) {
      return {
        zIndex: 20,
        scale: 1,
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
      };
    } else if (Math.abs(distance) === 1) {
      return {
        zIndex: 10,
        scale: 0.85,
        opacity: 0.5,
        x: distance > 0 ? "60%" : "-60%",
        filter: "blur(2px)",
      };
    } else {
      return {
        zIndex: 0,
        scale: 0.7,
        opacity: 0,
        x: distance > 0 ? "100%" : "-100%",
        filter: "blur(4px)",
      };
    }
  };

  return (
    <section className="py-24 bg-neutral-950 relative overflow-hidden min-h-[800px] flex flex-col justify-center">
      {/* Background Gradients */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-neutral-950 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent z-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading"
          >
            Testimonials
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-primary mx-auto rounded-full"
          />
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-5xl mx-auto h-[450px] md:h-[400px] perspective-1000 flex items-center justify-center">
           {testimonials.map((testimonial, index) => {
             const styles = getSlideStyles(index);
             const isActive = index === activeIndex;

             return (
               <motion.div
                 key={testimonial.id}
                 className={cn(
                   "absolute w-full max-w-[800px] p-0 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500",
                   isActive ? "cursor-default" : "cursor-pointer"
                 )}
                 initial={false}
                 animate={styles}
                 transition={{ duration: 0.5, ease: "easeInOut" }}
                 onClick={() => !isActive && setActiveIndex(index)}
               >
                 {/* Split Layout Card */}
                 <div className="flex flex-col md:flex-row h-full bg-neutral-900/80 backdrop-blur-xl border border-white/10">
                   
                   {/* Left Side: Content */}
                   <div className="flex-1 p-8 md:p-10 flex flex-col justify-center relative">
                      <Quote className="absolute top-8 left-8 w-10 h-10 text-primary/20 rotate-180" />
                      
                      <div className="relative z-10 pt-4">
                        <div className="flex gap-1 mb-6">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={cn("w-4 h-4 fill-primary text-primary", i >= testimonial.rating && "opacity-30")} />
                            ))}
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-relaxed">
                          "{testimonial.content}"
                        </h3>

                        <div className="mt-4">
                          <p className="text-primary font-bold text-lg">{testimonial.name}</p>
                          <p className="text-neutral-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                        </div>
                      </div>
                   </div>

                   {/* Right Side: Image */}
                   <div className="w-full md:w-[350px] h-[250px] md:h-auto relative bg-neutral-800">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-neutral-900/80 md:bg-gradient-to-r md:from-neutral-900/80 md:to-transparent opacity-50" />
                      
                      {/* Decorative Icon on Image */}
                      <div className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                         <Quote className="w-5 h-5 text-white" />
                      </div>
                   </div>
                 </div>
               </motion.div>
             );
           })}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-8 mt-12 relative z-30">
           <Button
             variant="outline"
             size="icon"
             onClick={prevSlide}
             className="rounded-full w-12 h-12 border-white/10 hover:bg-primary hover:text-white hover:border-primary transition-colors"
           >
             <ChevronLeft className="w-6 h-6" />
           </Button>
           
           <div className="flex gap-3">
             {testimonials.map((_, index) => (
               <button
                 key={index}
                 onClick={() => setActiveIndex(index)}
                 className={cn(
                   "w-2.5 h-2.5 rounded-full transition-all duration-300",
                   activeIndex === index ? "bg-primary w-8" : "bg-white/20 hover:bg-white/40"
                 )}
               />
             ))}
           </div>

           <Button
             variant="outline"
             size="icon"
             onClick={nextSlide}
             className="rounded-full w-12 h-12 border-white/10 hover:bg-primary hover:text-white hover:border-primary transition-colors"
           >
             <ChevronRight className="w-6 h-6" />
           </Button>
        </div>
      </div>
    </section>
  );
}
