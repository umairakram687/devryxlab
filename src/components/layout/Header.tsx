"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import headerData from "@/../data/header.json";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";
import { useDrawer } from "@/context/DrawerContext";
import { Logo } from "@/components/ui/Logo";

const Header = () => {
  const pathname = usePathname();
  const isDarkHeroPage = pathname === "/" || pathname.startsWith("/services/");
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openDrawer } = useDrawer();

  // Only track scroll depth for background blur — never hide
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm text-foreground"
          : isDarkHeroPage
          ? "bg-transparent text-white"
          : "bg-transparent text-foreground"
      )}
    >
      <div className="container mx-auto px-4 py-4 h-20 flex items-center justify-between">
        {/* Logo with reveal animation */}
        <Link href="/" className="group block relative">
          <div className="relative h-10 w-10 group-hover:w-[145px] transition-all duration-500 ease-in-out overflow-hidden">
            <Logo className="max-w-none h-10 w-auto absolute left-0 top-0 pointer-events-none" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {headerData.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <ThemeSwitcher />
          <Button onClick={openDrawer}>Get Started</Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 p-4 shadow-lg"
        >
          <nav className="flex flex-col gap-4">
            {headerData.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-colors block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button className="w-full" onClick={openDrawer}>Get Started</Button>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
