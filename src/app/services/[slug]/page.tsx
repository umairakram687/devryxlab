"use client";

import { use, useEffect } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import ContactSection from "@/components/sections/ContactSection";
import { services } from "@/lib/data/services";

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  // Unwrap params using React.use()
  const { slug } = use(params);
  
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return notFound();
  }

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-neutral-950 text-white selection:bg-primary/30">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Link 
            href="/#services" 
            className="inline-flex items-center text-neutral-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-8 shadow-2xl`}>
                <service.icon className="w-12 h-12 text-white" />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
                {service.title}
              </h1>
              
              <p className="text-xl text-neutral-300 leading-relaxed max-w-xl">
                {service.longDescription}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
               {/* Abstract Visual Representation */}
               <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl p-8 flex items-center justify-center">
                 <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10`} />
                 <service.icon className="w-64 h-64 text-white/20" />
                 
                 {/* Floating Feature Cards */}
                 <motion.div 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 right-0 bg-neutral-900/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl max-w-[200px]"
                 >
                   <div className="h-2 w-20 bg-neutral-700 rounded mb-2" />
                   <div className="h-2 w-12 bg-neutral-700 rounded" />
                 </motion.div>

                 <motion.div 
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 left-0 bg-neutral-900/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl max-w-[200px]"
                 >
                   <div className="flex items-center gap-2">
                     <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center">
                       <CheckCircle2 className="w-5 h-5 text-green-500" />
                     </div>
                     <div>
                       <div className="h-2 w-16 bg-neutral-700 rounded mb-1" />
                       <div className="h-2 w-10 bg-neutral-700 rounded" />
                     </div>
                   </div>
                 </motion.div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-16 text-center">Key Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white/5 relative overflow-hidden">
         <div className="container mx-auto px-4">
           <h2 className="text-3xl md:text-4xl font-bold font-heading mb-16 text-center">Our Process</h2>
           
           <div className="grid md:grid-cols-3 gap-8 relative">
             {/* Connector Line (Desktop) */}
             <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
             
             {service.process.map((step, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: index * 0.2 }}
                 className="relative text-center"
               >
                 <div className="w-24 h-24 rounded-full bg-neutral-900 border-4 border-white/10 flex items-center justify-center mx-auto mb-6 relative z-10 shadow-xl">
                   <span className="text-3xl font-bold bg-gradient-to-br from-white to-neutral-500 bg-clip-text text-transparent">
                     0{index + 1}
                   </span>
                 </div>
                 <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                 <p className="text-neutral-400 max-w-xs mx-auto">{step.description}</p>
               </motion.div>
             ))}
           </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8">
            Ready to Build Your {service.title}?
          </h2>
          <p className="text-xl text-neutral-300 mb-12 max-w-2xl mx-auto">
            Let's turn your vision into reality. Contact us today to get started.
          </p>
          <Link 
            href="/#contact" 
            className="inline-flex items-center px-8 py-4 rounded-full bg-white text-neutral-950 font-bold text-lg hover:scale-105 transition-transform"
          >
            Start Project <ArrowUpRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}
