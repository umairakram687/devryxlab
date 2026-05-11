"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Mail, ChevronDown } from "lucide-react";
import { useDrawer } from "@/context/DrawerContext";
import { Button } from "@/components/ui/Button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const regions = [
  "Select Region",
  "Middle East & North Africa",
  "USA",
  "Canada",
  "Kingdom of Saudi Arabia",
  "Australia & New Zealand",
  "Asia",
  "Europe",
  "Rest of World",
];

const countryCodes = [
  { code: "+1", country: "US", flag: "🇺🇸", placeholder: "(555) 000-0000" },
  { code: "+1", country: "CA", flag: "🇨🇦", placeholder: "(555) 000-0000" },
  { code: "+44", country: "UK", flag: "🇬🇧", placeholder: "07700 900000" },
  { code: "+92", country: "PK", flag: "🇵🇰", placeholder: "0300 1234567" },
  { code: "+91", country: "IN", flag: "🇮🇳", placeholder: "98765 43210" },
  { code: "+61", country: "AU", flag: "🇦🇺", placeholder: "0400 123 456" },
  { code: "+971", country: "AE", flag: "🇦🇪", placeholder: "050 123 4567" },
  { code: "+966", country: "SA", flag: "🇸🇦", placeholder: "050 123 4567" },
  { code: "+49", country: "DE", flag: "🇩🇪", placeholder: "0151 12345678" },
];

export default function ContactDrawer() {
  const { isOpen, closeDrawer } = useDrawer();
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);

  // Prevent scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDrawer}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[60]"
          />

          {/* Drawer Container - Floating Card */}
          <div className="fixed inset-0 pointer-events-none z-[70] flex justify-end items-center p-4 md:p-8">
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="pointer-events-auto h-full max-h-[90vh] md:max-h-[80vh] w-full md:w-[500px] bg-background border border-border/50 shadow-2xl rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="p-6 md:p-8 flex flex-col h-full overflow-y-auto custom-scrollbar">
                {/* Header */}
                <div className="flex items-center justify-between mb-8 flex-shrink-0">
                  <h2 className="text-3xl font-bold font-heading tracking-tight text-primary">Get In Touch</h2>
                  <button
                    onClick={closeDrawer}
                    className="p-2 rounded-full hover:bg-muted transition-colors border border-transparent hover:border-border"
                  >
                    <X className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    We help companies across North America, Middle East, Africa and Asia Pacific with technological development.
                  </p>

                  <form className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground/80">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3.5 rounded-xl bg-muted/30 border border-input focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-200"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground/80">
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="you@company.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-muted/30 border border-input focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-200"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-foreground/80">
                        Phone Number*
                      </label>
                      <div className="flex gap-3">
                         <div className="relative shrink-0 w-[140px]">
                            <select
                                value={selectedCountry.country}
                                onChange={(e) => {
                                  const country = countryCodes.find(c => c.country === e.target.value);
                                  if (country) setSelectedCountry(country);
                                }}
                                className="w-full pl-3 pr-8 py-3.5 rounded-xl bg-muted/30 border border-input focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-200 appearance-none font-medium text-sm"
                            >
                                {countryCodes.map((c, i) => (
                                    <option key={`${c.country}-${i}`} value={c.country}>
                                      {c.flag} {c.code}
                                    </option>
                                ))}
                            </select>
                             <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                                <ChevronDown className="w-4 h-4 text-muted-foreground" />
                             </div>
                         </div>
                        <input
                          type="tel"
                          id="phone"
                          required
                          placeholder={selectedCountry.placeholder}
                          className="w-full px-4 py-3.5 rounded-xl bg-muted/30 border border-input focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="details" className="text-sm font-medium text-foreground/80">
                         Project Details
                      </label>
                      <textarea
                        id="details"
                        rows={5}
                        placeholder="Tell us about your project..."
                        className="w-full px-4 py-3.5 rounded-xl bg-muted/30 border border-input focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-200 resize-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="region" className="text-sm font-medium text-foreground/80">
                        Region*
                      </label>
                      <div className="relative">
                        <select
                          id="region"
                          required
                          className="w-full px-4 py-3.5 rounded-xl bg-muted/30 border border-input focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-200 appearance-none"
                          defaultValue="Select Region"
                        >

                          {regions.map((region) => (
                             <option key={region} value={region} disabled={region === "Select Region"}>
                               {region}
                             </option>
                          ))}
                        </select>
                         <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                            <ChevronDown className="w-4 h-4 text-muted-foreground" />
                        </div>
                      </div>
                    </div>

                    <Button className="w-full py-6 text-lg rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 group bg-primary hover:bg-primary/90 text-primary-foreground border-none mt-4 cursor-pointer">
                      Send Message
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>

                  <div className="mt-10 pt-8 border-t border-border/50">
                    <div className="flex flex-col gap-4">
                      <h3 className="font-bold text-lg">Contact Details</h3>
                      <a href="mailto:hello@mycompany.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group p-3 rounded-lg hover:bg-muted/50 cursor-pointer">
                        <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                            <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-lg">hello@mycompany.com</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
