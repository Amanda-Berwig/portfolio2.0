"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax subtle on mouse move
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const xRatio = (clientX / window.innerWidth - 0.5) * 20;
      const yRatio = (clientY / window.innerHeight - 0.5) * 10;
      containerRef.current.style.setProperty("--mx", `${xRatio}px`);
      containerRef.current.style.setProperty("--my", `${yRatio}px`);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #D094EA 0%, transparent 70%)",
          transform: `translate(calc(-50% + var(--mx, 0px)), calc(-50% + var(--my, 0px)))`,
        }}
      />

      {/* Available badge */}
      <div
        className="inline-flex items-center gap-2 mb-10 opacity-0 animate-fade-up delay-100"
        style={{ animationFillMode: "forwards" }}
      >
        <span className="w-2 h-2 rounded-full bg-[#D094EA] animate-pulse" />
        <span className="text-sm text-[#888] tracking-widest uppercase">
          Disponível para projetos
        </span>
      </div>

      {/* Main heading */}
      <h1
        className="opacity-0 animate-fade-up delay-200 text-[clamp(3rem,10vw,8rem)] font-extrabold leading-[0.9] tracking-tighter text-[#F5F5F5] uppercase mb-6"
        style={{
          fontFamily: "var(--font-display)",
          animationFillMode: "forwards",
        }}
      >
        Designer
        <br />
        <span className="text-[#D094EA]">&</span> Dev
        <span className="text-[#D094EA]">.</span>
      </h1>

      {/* Tagline + scroll cta */}
      <div
        className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-6 opacity-0 animate-fade-up delay-300"
        style={{ animationFillMode: "forwards" }}
      >
        <p className="text-[#888] text-lg md:text-xl max-w-md leading-relaxed">
          Crio experiências digitais que unem{" "}
          <span className="text-[#F5F5F5]">design elegante</span> com{" "}
          <span className="text-[#F5F5F5]">código limpo</span>.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="#projects"
            className="group flex items-center gap-3 text-sm text-[#888] hover:text-[#F5F5F5] transition-colors"
          >
            <span className="w-10 h-px bg-[#333] group-hover:w-16 group-hover:bg-[#D094EA] transition-all duration-300" />
            Ver projetos
          </a>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/seuperfil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#555] hover:text-[#F5F5F5] transition-colors"
              aria-label="GitHub"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/seuperfil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#555] hover:text-[#F5F5F5] transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/seuperfil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#555] hover:text-[#F5F5F5] transition-colors"
              aria-label="Twitter / X"
            >
              <svg
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in delay-500"
        style={{ animationFillMode: "forwards" }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-[#D094EA] to-transparent" />
        <span className="text-[10px] text-[#555] tracking-widest uppercase rotate-90">
          scroll
        </span>
      </div>
    </section>
  );
}
