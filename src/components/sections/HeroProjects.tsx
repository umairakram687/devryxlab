"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Alura Reset",
    image: "/portfolio/alura.png",
    link: "https://alurareset.com/",
    className: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 scale-110",
    delay: 0.1,
  },
  {
    title: "Tabbna Academy",
    image: "/portfolio/tabbna.png",
    link: "https://academy.tabbna.sa/",
    className: "top-0 left-0 z-30",
    delay: 0.2,
  },
  {
    title: "ExerciseNow",
    image: "/portfolio/exercisenow.png",
    link: "https://exercisenow.org/",
    className: "top-20 -right-10 z-20",
    delay: 0.4,
  },
  {
    title: "Spectrum Cares",
    image: "/portfolio/spectrumcares.png",
    link: "https://spectrumcares.ca/",
    className: "bottom-10 left-10 z-40",
    delay: 0.6,
  },
  {
    title: "Your Diamond Guys",
    image: "/portfolio/diamondguys.png",
    link: "https://yourdiamondguys.com/",
    className: "-bottom-5 -right-5 z-10",
    delay: 0.8,
  },
];

const HeroProjects = () => {
  return (
    <div className="relative w-full h-[500px] lg:h-[600px] perspective-1000 flex items-center justify-center">
      <div className="relative w-full h-full max-w-[500px]">
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ 
              opacity: 1, 
              scale: project.className.includes("scale-110") ? 1.1 : 1, 
              y: [0, -10, 0], // Floating effect
            }}
            transition={{
              opacity: { duration: 1, delay: project.delay },
              scale: { duration: 1, delay: project.delay },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: project.delay,
              }
            }}
            whileHover={{ 
              scale: 1.15, 
              zIndex: 100,
              y: -20,
              transition: { duration: 0.3, y: { duration: 0.3 } } 
            }}
            className={`absolute w-[260px] md:w-[320px] aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] bg-neutral-900 group cursor-pointer ${project.className}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-20" />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end z-30 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center gap-2 mb-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                 <span className="text-[10px] text-primary font-bold uppercase tracking-widest">Case Study</span>
              </div>
              <h3 className="text-white font-bold text-lg md:text-xl leading-tight">
                {project.title}
              </h3>
            </div>

            {/* Glassmorphism Badge */}
            <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
               <span className="text-[10px] text-white font-medium uppercase tracking-tighter">View Project</span>
            </div>
          </motion.a>
        ))}
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
      </div>
    </div>
  );
};

export default HeroProjects;
