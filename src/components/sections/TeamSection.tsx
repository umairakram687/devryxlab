"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram, Github } from "lucide-react";
import Image from "next/image";

const team = [
  {
    name: "Umair Akram",
    role: "Chief Executive Officer",
    bio: "Visionary leader with a passion for technology and innovation, steering the company toward new horizons of success.",
    image: "/images/CEO.png",
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
    shape: "blob-1", // CSS class or SVG shape identifier
    accent: "bg-blue-500",
  },
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    bio: "Expert in product strategy and execution, ensuring that every project is aligned with our clients' visions and market needs.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
    shape: "blob-2",
    accent: "bg-pink-500",
  },
  {
    name: "William Anderson",
    role: "Chief Technology Officer",
    bio: "Tech innovator with a focus on creating scalable, robust, and forward-thinking digital solutions.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
    shape: "blob-3",
    accent: "bg-purple-500",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400 mb-6 uppercase tracking-wider"
          >
            Meet The Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 max-w-2xl mx-auto text-lg"
          >
            Our strength lies in our people. Meet the innovators, strategists, and creators driving excellence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-neutral-900/50 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 h-full flex flex-col"
              >
                  {/* Image Area with Organic Shapes */}
                  <div className="relative h-80 flex items-center justify-center p-6 bg-gradient-to-b from-neutral-800/30 to-transparent">
                     {/* Decorative Blob */}
                     <div className={`absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500 ${member.accent} blur-2xl rounded-full transform scale-75`} />
                     
                     {/* Image Container with varying border radii for organic feel */}
                     <div className="relative w-48 h-48 md:w-56 md:h-56">
                        <div className={`absolute inset-0 ${member.accent} opacity-20 rounded-[2rem] rotate-6 group-hover:rotate-12 transition-transform duration-500`} />
                        <div className="absolute inset-0 bg-neutral-800 rounded-[2rem] -rotate-3 overflow-hidden border-2 border-white/10 group-hover:border-primary/50 transition-colors duration-500">
                           <Image
                             src={member.image}
                             alt={member.name}
                             width={300}
                             height={300}
                             className="object-cover group-hover:scale-110 transition-transform duration-700"
                           />
                        </div>
                     </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-8 pb-10 flex-grow flex flex-col bg-neutral-900">
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                    <p className="text-primary/80 font-medium text-sm uppercase tracking-wider mb-4">{member.role}</p>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow">
                      {member.bio}
                    </p>
                    
                    {/* Social Icons */}
                    <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                      {member.socials.linkedin && (
                        <a href={member.socials.linkedin} className="text-neutral-500 hover:text-white transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                       {member.socials.twitter && (
                        <a href={member.socials.twitter} className="text-neutral-500 hover:text-white transition-colors">
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                       {member.socials.instagram && (
                        <a href={member.socials.instagram} className="text-neutral-500 hover:text-white transition-colors">
                          <Instagram className="w-5 h-5" />
                        </a>
                      )}
                       {member.socials.github && (
                        <a href={member.socials.github} className="text-neutral-500 hover:text-white transition-colors">
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
