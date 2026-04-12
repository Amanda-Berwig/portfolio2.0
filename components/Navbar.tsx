"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Sobre", href: "#about" },
  { label: "Projetos", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contato", href: "#contact" },
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
          SEU NOME<span className="text-[#D094EA]">.</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[#888] hover:text-[#F5F5F5] transition-colors tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 border border-[#D094EA] text-[#D094EA] text-sm rounded-full hover:bg-[#D094EA] hover:text-[#0A0A0A] transition-all duration-200 font-medium"
        >
          Trabalhe comigo
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
            Trabalhe comigo
          </a>
        </div>
      )}
    </header>
  );
}
