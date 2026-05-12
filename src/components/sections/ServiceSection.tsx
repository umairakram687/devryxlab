"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/data/services";

export default function ServiceSection() {
  return (
    <section className="relative py-24 md:py-32 bg-neutral-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px]" />
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold font-heading text-white">
            Our Services
          </h2>
          <p className="mt-6 text-xl text-neutral-400 max-w-2xl mx-auto">
            Crafting digital experiences with precision and passion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {services.map((service, index) => {
            return (
              <Link key={service.id} href={`/services/${service.slug}`} className="block h-full">
                <ServiceCard 
                  service={service} 
                  index={index}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ 
  service,
  index
}: { 
  service: typeof services[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02]"
    >
      <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
        <service.icon className="w-8 h-8" />
        
      </div>
      
      <h3 className="mb-3 text-2xl font-bold text-white transition-transform duration-300 origin-left group-hover:scale-105">
        {service.title}
      </h3>
      <p className="text-neutral-400 leading-relaxed text-lg">
        {service.description}
      </p>
      
      <div className="absolute bottom-6 right-6 opacity-0 transform translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
        <div className="p-2 rounded-full bg-white/10 text-white">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
    </motion.div>
  );
}
