"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "3+", label: "Anos de experiência" },
  { value: "20+", label: "Projetos entregues" },
  { value: "15+", label: "Clientes satisfeitos" },
  { value: "5+", label: "Países atendidos" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-28 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left: text */}
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs text-[#D094EA] tracking-widest uppercase mb-4">
            — Sobre mim
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#F5F5F5] leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Transformo ideias em{" "}
            <span className="italic text-[#888]">experiências</span> reais
          </h2>
          <p className="text-[#888] text-base leading-relaxed mb-5">
            Sou um designer e desenvolvedor apaixonado por criar interfaces que
            realmente importam. Combino pensamento visual com código para
            entregar produtos que encantam usuários e geram resultados.
          </p>
          <p className="text-[#888] text-base leading-relaxed mb-8">
            Com background em design de produto e desenvolvimento front-end,
            trabalho na interseção entre estética e funcionalidade — onde o bom
            design encontra a engenharia sólida.
          </p>

          <a
            href="/curriculo.pdf"
            className="inline-flex items-center gap-2 text-sm text-[#F5F5F5] border-b border-[#333] hover:border-[#D094EA] hover:text-[#D094EA] transition-all pb-1"
          >
            Download CV
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>

        {/* Right: stats + photo placeholder */}
        <div
          className={`transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Photo */}
          <div className="relative mb-8">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#111] border border-[#1F1F1F] flex items-center justify-center">
              {/* Replace the img below with your actual photo */}
              {/* <img src="/sua-foto.jpg" alt="Seu Nome" className="w-full h-full object-cover" /> */}
              <div className="flex flex-col items-center gap-3 text-[#333]">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
                <span className="text-sm text-[#444]">
                  Adicione sua foto aqui
                </span>
              </div>
            </div>
            {/* Decorative corner */}
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#D094EA] rounded-br-lg" />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-xl bg-[#111] border border-[#1F1F1F] hover:border-[#D094EA]/30 transition-colors"
              >
                <p
                  className="text-3xl font-bold text-[#D094EA] mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat.value}
                </p>
                <p className="text-xs text-[#555]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
