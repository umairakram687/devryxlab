"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  const [imgError, setImgError] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset state when project changes
  useEffect(() => {
    setImgError(false);
    setCurrentImageIndex(0);
  }, [project]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  if (!project) return null;

  // For future multi-image support, currently single image
  const images = [project.image];
  const totalImages = images.length;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % totalImages);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

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
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-neutral-900 border border-white/10 rounded-2xl shadow-2xl pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Bar with Visit Site & Close */}
              <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-neutral-900/95 backdrop-blur-md border-b border-white/10">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-white text-sm font-semibold rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit Site
                </a>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Image Slider */}
              <div className="relative w-full aspect-video bg-neutral-800 overflow-hidden">
                {imgError ? (
                  /* Fallback: Project Name Display */
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary/20 via-neutral-800 to-secondary/20">
                    <div className="w-24 h-24 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                      <span className="text-3xl font-bold text-primary">
                        {getInitials(project.title)}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white text-center px-8">
                      {project.title}
                    </h3>
                    <p className="text-neutral-500 text-sm mt-2">Preview unavailable</p>
                  </div>
                ) : (
                  <>
                    <Image
                      src={images[currentImageIndex]}
                      alt={`${project.title} - Screenshot ${currentImageIndex + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 768px"
                      className="object-cover"
                      onError={() => setImgError(true)}
                      priority
                    />

                    {/* Image Navigation (for future multi-image support) */}
                    {totalImages > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors backdrop-blur-sm"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors backdrop-blur-sm"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>

                        {/* Dots */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                          {images.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setCurrentImageIndex(i)}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                i === currentImageIndex
                                  ? "bg-white w-6"
                                  : "bg-white/40 hover:bg-white/60"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>

              {/* Project Details */}
              <div className="p-6 md:p-8">
                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Technology Section */}
                <div>
                  <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border border-primary/20 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
