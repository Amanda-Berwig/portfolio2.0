"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const timeline = [
  {
    period: "2019 — 2022",
    title: "Graduação em Biomedicina",
    description:
      "4 anos em ambientes hospitalares e laboratoriais de alta demanda.",
    current: false,
  },
  {
    period: "2024",
    title: "Transição para tech",
    description: "Início dos estudos em programação com foco em React.",
    current: false,
  },
  {
    period: "2025",
    title: "Primeiro emprego/projetos",
    description:
      "Dev Frontend Jr. — automação com Puppeteer, expansão de integrações via scraping e desenvolvimento de features em React.",
    current: false,
  },
  {
    period: "Agora",
    title: "Dev Frontend Jr.",
    description: "Início de ADS — buscando oportunidades.",
    current: true,
  },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [timelineVisible, setTimelineVisible] = useState(false);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTimelineVisible(true);
      },
      { threshold: 0.1 },
    );
    if (timelineRef.current) observer.observe(timelineRef.current);
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
            De biomédica a dev —{" "}
            <span className="italic text-[#D094EA]">em constante</span> evolução
          </h2>
          <p className="text-[#888] text-base leading-relaxed mb-5">
            Formada em Biomedicina, com 3 anos em ambientes hospitalares onde
            erro não é opção. Essa disciplina me acompanhou na transição para a
            tecnologia. Hoje curso Análise e Desenvolvimento de Sistemas e
            trabalho com React, web scraping e ferramentas de IA no dia a dia.
            Entrego código limpo, aprendo rápido e sei trabalhar com autonomia.
          </p>

          {/* <a
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
          </a> */}
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
              <Image
                src="/imagem1.png"
                alt="Foto de Amanda Berwig"
                className="w-full h-full object-cover object-top"
                width={400}
                height={300}
              ></Image>
              <div className="flex flex-col items-center gap-3 text-[#333]"></div>
            </div>
            {/* Decorative corner */}
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#D094EA] rounded-br-lg" />
          </div>
        </div>
      </div>
      {/* ── Bottom: timeline horizontal ── */}
      <div ref={timelineRef} className="mt-20 relative">
        <p className="text-xs text-[#D094EA] tracking-widest uppercase mb-8">
          Trajetória
        </p>

        {/* Linha base */}
        <div className="absolute top-[4.5rem] left-0 right-0 h-px bg-gradient-to-r from-[#D094EA44] via-[#D094EA22] to-[#1F1F1F]" />

        {/* Grid de itens */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {timeline.map((item, i) => (
            <div
              key={item.title}
              className={`relative pt-7 transition-all duration-700 ${
                timelineVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Dot */}
              <div
                className={`absolute top-0 left-0 rounded-full transition-all duration-500 ${
                  item.current
                    ? "w-3.5 h-3.5 bg-[#D094EA] shadow-[0_0_12px_#D094EA88] -top-0.5"
                    : "w-2.5 h-2.5 bg-[#D094EA] opacity-40"
                }`}
              />

              {/* Period */}
              <p
                className={`text-[10px] mb-1.5 tracking-widest uppercase ${
                  item.current ? "text-[#D094EA]" : "text-[#444]"
                }`}
              >
                {item.period}
              </p>

              {/* Title */}
              <p
                className="text-sm font-semibold text-[#F5F5F5] mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.title}
              </p>

              {/* Description */}
              <p className="text-xs text-[#555] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
