"use client";

import { motion } from "framer-motion";
// import img1 from "../../../public/portfolio/egplogomain2.svg";
// import img2 from "../../../public/portfolio/Medirecords1.png";
import { 
  Heart,
  Activity,
  Shield,
  Zap,
  Layers,
  ShoppingBag
} from "lucide-react";
import Image from "next/image";



// Initial set of logos using project names // official set of logos using project names
const logos = [
  { name: "eGP Health", icon: "/portfolio/egplogomain2.svg"  },
  { name: "MediRecords", icon: "/portfolio/Medirecords1.png" },
  { name: "PanAsia", icon: "/portfolio/panasia-logo.png" },
  { name: "Spectrum", icon: "/portfolio/spectrum-logo.png" },
  { name: "NeoTest", icon: "/portfolio/neotest-logo.png" },
  { name: "Tabbna", icon: "/portfolio/tabbnalogo.svg"  },
  { name: "Medi-QR", icon: "/portfolio/medi-qr-logo.png" },
  { name: "ExerciseNow", icon: "/portfolio/exercisenow-logo.svg" },
  { name: "Ribbon & Bow", icon: "/portfolio/ribbonandbow-logo.svg" },
  { name: "Diamond Guys", icon: "/portfolio/DiamondLogo.png" },
  { name: "Alura", icon: "/portfolio/Alura.svg"},
  { name: "Astroshop", icon: "/portfolio/astroshop.png"},
  { name: "Auto Funnel", icon: "/portfolio/autofunnel-logo.png"},
  { name: "Boise Mold", icon: "/portfolio/boise-mold.png"},
  { name: "Check Mybills", icon: "/portfolio/check-mybills.png"},
  { name: "Dental Care", icon: "/portfolio/dentalcare.png"},
  { name: "Doctorim", icon: "/portfolio/doctrim.png"},
  { name: "Expat Cares", icon: "/portfolio/expatcares.png"},
  { name: "Flow Care", icon: "/portfolio/flowCare.png"},
  { name: "Foreign Match", icon: "/portfolio/foreign-match.png"},
  { name: "Frame Explorer", icon: "/portfolio/frame-explorer.png"},
  { name: "Girls Chat", icon: "/portfolio/girls-chat.png"},
  { name: "Hala Air", icon: "/portfolio/hala-air.png"},
  { name: "Jackpot Competition", icon: "/portfolio/jackpot-competition.png"},
  { name: "Ketofit", icon: "/portfolio/keto-fit.png"},
  { name: "Kitchen-Wrap", icon: "/portfolio/kitchen-wrap.png"},
  { name: "Mart Mint", icon: "/portfolio/mart-mint.png"},
  { name: "Max Bid", icon: "/portfolio/max-bid.png"},
  { name: "Mobibo", icon: "/portfolio/mobibo-logo.png"},
  { name: "Nawa Qare", icon: "/portfolio/nawacare.png"},
  { name: "Nonly", icon: "/portfolio/nonly-logo.png"},
  { name: "No Stress", icon: "/portfolio/no-stress.png"},
  { name: "Slot Machine", icon: "/portfolio/slot-machine.png"},
  { name: "Special Forces", icon: "/portfolio/special-forces.png"},
  { name: "Stoned Collective", icon: "/portfolio/Stoned-Collective.png"},
  { name: "Top Supply", icon: "/portfolio/top-supply.png"},
  { name: "U.S.NRC", icon: "/portfolio/usnrc.png"},
  { name: "Zinatghar", icon: "/portfolio/zinatghar.png"},




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
                <div key={`r1-${index}`} className="flex items-center gap-3 shrink-0 opacity-100 transition-opacity duration-300 grayscale-0 cursor-pointer group">
                  <div className="p-3  border border-white/10 rounded-xl bg-white/10 transition-colors">
                  
                     <Image src={logo.icon} height={70} width={100} alt="jdkk" />
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
                 <div key={`r2-${index}`} className="flex items-center gap-3 shrink-0 opacity-100 transition-opacity duration-300 grayscale-0 cursor-pointer group">
                  <div className="p-3 border border-white/10 rounded-xl bg-white/10 transition-colors">
                    <Image src={logo.icon} height={70} width={100} alt="jdkk" />
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
