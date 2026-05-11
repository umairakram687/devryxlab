"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Heart, Activity, DollarSign, ShoppingBag, LayoutGrid, Figma } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import ProjectDetailModal from "@/components/ui/ProjectDetailModal";

import { categories, projects } from "@/data/projects";

const ProjectCard = ({ project, onClick, priority }: { project: any; onClick: () => void; priority?: boolean }) => {
  const [imgError, setImgError] = useState(false);

  // Generate initials from project title for fallback
  const getInitials = (title: string) => {
    return title
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 3);
  };

  return (
    <div
      onClick={onClick}
      className="group relative bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 block cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden bg-neutral-800">
        {imgError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 to-neutral-800">
             <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">{getInitials(project.title)}</span>
             </div>
             <h3 className="text-xl font-bold text-white text-center px-6">{project.title}</h3>
          </div>
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
            priority={priority}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-semibold text-white group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <div className="p-2 bg-white/5 rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
        
        <p className="text-neutral-400 mb-6 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string, i: number) => (
            <span 
              key={i} 
              className="px-3 py-1 text-xs font-medium bg-white/5 text-neutral-300 rounded-full border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function ProjectSection() {
  const [activeCategory, setActiveCategory] = useState("healthcare");
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProject = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCategoryChange = (id: string) => {
    if (activeCategory !== id) {
      setActiveCategory(id);
      setShowAll(false);
    }
  };

  const currentProjects = projects[activeCategory as keyof typeof projects];
  const displayedProjects = showAll ? currentProjects : currentProjects.slice(0, 6);
  const hasMore = currentProjects.length > 6 && !showAll;

  return (
    <section id="projects" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400 mb-4"
          >
            Our Case Studies
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 max-w-2xl mx-auto"
          >
            Explore our diverse portfolio of successful projects across various industries.
          </motion.p>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={cn(
                "relative px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300",
                activeCategory === category.id 
                  ? "text-white" 
                  : "text-neutral-400 hover:text-white"
              )}
            >
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary/20 border border-primary/50 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <category.icon className="w-4 h-4 relative z-10" />
              <span className="relative z-10 font-medium">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {displayedProjects.map((project, index) => (
                <ProjectCard 
                  key={index} 
                  project={project} 
                  onClick={() => openProject(project)}
                  priority={index < 2}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <ProjectDetailModal 
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
        
        {hasMore && (
          <div className="mt-12 text-center">
               <Button 
                  variant="outline" 
                  onClick={() => setShowAll(true)}
                  className="rounded-full cursor-pointer border-white/10 text-black hover:bg-black/5 hover:text-white"
                >
                  View All Projects
               </Button>
          </div>
        )}
      </div>
    </section>
  );
}
