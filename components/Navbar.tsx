"use client";

import { Code2, Folder, Mail, User } from "lucide-react";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Sobre", href: "#about", icon: User },
  { label: "Projetos", href: "#projects", icon: Folder },
  { label: "Skills", href: "#skills", icon: Code2 },
  { label: "Contato", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#1F1F1F]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#"
          className="font-display text-[#F5F5F5] text-lg font-bold tracking-tight hover:text-[#D094EA] transition-colors"
          style={{ fontFamily: "var(--font-display)" }}
        >
          AMANDA BERWIG<span className="text-[#D094EA]">.</span>
          {/* NAV COM LOGO
          <a href="#" className="group relative flex items-center h-20 w-[120px]"> 
           <Image
            src="/logo-light.png"
            alt="Logo"
            fill
            className="object-contain transition-opacity duration-300 group-hover:opacity-0"
            priority
          />
          <Image
            src="/logo-purple.png"
            alt="Logo hover"
            fill
            className="object-contain absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            priority
          />*/}
        </a>

        <ul className="hidden md:flex items-center gap-6 px-5 py-2 bg-zinc-800 rounded-xl">
          {navLinks.map((link) => {
            const Icon = link.icon;

            return (
              <li key={link.href} className="relative group">
                <a
                  href={link.href}
                  aria-label={link.label}
                  className="flex items-center justify-center rounded-md p-1 text-white hover:bg-[#914bf1] transition-colors"
                >
                  <Icon size={22} strokeWidth={1.8} />

                  {/* Tooltip */}
                  <span
                    className="absolute -bottom-9 left-1/2 -translate-x-1/2 
                           whitespace-nowrap rounded-md bg-[#111] px-3 py-1.5 
                           text-xs text-[#F5F5F5] opacity-0 shadow-md 
                           transition-all duration-200 
                           group-hover:opacity-100 group-hover:translate-y-1"
                  >
                    {link.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 border border-[#D094EA] text-[#D094EA] text-sm rounded-full hover:bg-[#D094EA] hover:text-[#0A0A0A] transition-all duration-200 font-medium"
        >
          Vamos conversar
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`w-6 h-px bg-[#F5F5F5] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-6 h-px bg-[#F5F5F5] transition-all ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-6 h-px bg-[#F5F5F5] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111] border-t border-[#1F1F1F] px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#F5F5F5] text-base"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-2 px-4 py-2 border border-[#D094EA] text-[#D094EA] text-sm rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            Vamos conversar
          </a>
        </div>
      )}
    </header>
  );
}
