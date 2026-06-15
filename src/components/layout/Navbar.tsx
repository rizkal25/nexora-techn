"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: "Arsitektur", href: "/#solusi" },
    { name: "Produk", href: "/#produk" },
    { name: "Fitur", href: "/#fitur" },
    { name: "Galeri", href: "/#galeri" },
    { name: "Keamanan", href: "/#keamanan" },
    { 
      name: "Resources", 
      href: "#",
      dropdown: [
        { name: "Blog & Artikel", href: "/blog", desc: "Tutorial dan insight" },
        { name: "Dokumentasi", href: "/docs", desc: "API & SDK docs" },
        { name: "Case Studies", href: "/blog#case-studies", desc: "Success stories" },
      ]
    },
    { name: "Tentang", href: "/about" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      setOpenDropdown(null);
      if (pathname !== "/") {
        window.location.href = href;
        return;
      }
      const element = document.querySelector(href.replace("/", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-slate-950/90 backdrop-blur-md border-b border-white/10 shadow-xl" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo - Arvana Digital Nusantara */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center gap-2">
              {/* Logo SVG - More Accurate */}
              <svg 
                width="48" 
                height="48" 
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:scale-105 transition-transform duration-300"
              >
                {/* Outer Circle - Navy Blue */}
                <circle 
                  cx="50" 
                  cy="50" 
                  r="42" 
                  stroke="#0d2847" 
                  strokeWidth="3"
                  fill="none"
                />
                
                {/* Top Compass Point */}
                <path 
                  d="M50 8 L54 28 L50 24 L46 28 Z" 
                  fill="#0d2847"
                />
                
                {/* Bottom Compass Point */}
                <path 
                  d="M50 92 L54 72 L50 76 L46 72 Z" 
                  fill="#0d2847"
                />
                
                {/* Left Compass Point */}
                <path 
                  d="M8 50 L28 46 L24 50 L28 54 Z" 
                  fill="#0d2847"
                />
                
                {/* Right Compass Point */}
                <path 
                  d="M92 50 L72 46 L76 50 L72 54 Z" 
                  fill="#0d2847"
                />
                
                {/* Letter A - Main Shape */}
                <path 
                  d="M50 28 L30 68 L35 68 L38 62 L62 62 L65 68 L70 68 Z" 
                  fill="#0d2847"
                />
                
                {/* Letter A - Inner Triangle */}
                <path 
                  d="M50 38 L42 56 L58 56 Z" 
                  fill="white"
                />
                
                {/* Curved Blue Swoosh */}
                <path 
                  d="M28 65 Q50 75 72 65" 
                  stroke="#1a73e8" 
                  strokeWidth="5"
                  strokeLinecap="round"
                  fill="none"
                />
                
                {/* Lighter Blue Accent on Swoosh */}
                <path 
                  d="M30 67 Q50 74 70 67" 
                  stroke="#4da3ff" 
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.6"
                />
              </svg>
              
              {/* Brand Text */}
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white tracking-[0.15em] leading-none" style={{ fontFamily: "'Inter', sans-serif" }}>
                  ARVANA
                </span>
                <span className="text-[10px] font-medium text-slate-400 tracking-[0.25em] leading-none mt-1 uppercase">
                  DIGITAL NUSANTARA
                </span>
                {/* Decorative Lines */}
                <div className="flex items-center gap-1 mt-1.5">
                  <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                  <div className="w-8 h-0.5 bg-slate-600"></div>
                  <div className="w-6 h-0.5 bg-blue-500"></div>
                  <div className="w-8 h-0.5 bg-slate-600"></div>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 flex items-center gap-1">
                      {link.name}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    
                    {openDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-3 hover:bg-white/5 transition-colors"
                          >
                            <div className="text-sm font-medium text-white">{item.name}</div>
                            <div className="text-xs text-slate-400 mt-0.5">{item.desc}</div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/docs" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Docs
            </Link>
            <Link 
              href="/#kontak"
              onClick={(e) => handleLinkClick(e, "/#kontak")}
              className="group flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/40"
            >
              Hubungi Kami
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0, y: -20 }}
          animate={{ opacity: 1, height: "auto", y: 0 }}
          exit={{ opacity: 0, height: 0, y: -20 }}
          className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-b border-white/10"
        >
          <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-colors flex items-center justify-between"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
                {link.dropdown && (
                  <div className="ml-4 mt-1 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-2 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 mt-2 border-t border-white/10 space-y-2">
              <Link 
                href="/docs"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full py-3 text-sm font-medium text-slate-300 hover:text-white bg-white/5 rounded-lg text-center"
              >
                Dokumentasi
              </Link>
              <Link 
                href="/#kontak"
                onClick={(e) => handleLinkClick(e, "/#kontak")}
                className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all"
              >
                Hubungi Tim Kami
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
