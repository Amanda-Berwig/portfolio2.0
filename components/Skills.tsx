"use client";

import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    category: "Design",
    skills: ["Figma", "Design System", "Responsividade"],
  },
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    category: "Automações & Backend",
    skills: ["Node.js", "Puppeteer", "Web Scraping"],
  },
  {
    category: "Ferramentas",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Linear",
      "Git Kraken",
      "VS Code",
      "IA",
    ],
  },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-28 px-6 max-w-6xl mx-auto">
      {/* Divider */}
      <div className="w-full h-px bg-[#1F1F1F] mb-28" />

      {/* Header */}
      <div className="mb-16">
        <p className="text-xs text-[#D094EA] tracking-widest uppercase mb-4">
          — Stack
        </p>
        <h2
          className="text-4xl md:text-5xl font-bold text-[#F5F5F5]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Ferramentas & <span className="text-[#444]">tecnologias</span>
        </h2>
      </div>

      {/* Skill groups */}
      <div
        className={`grid md:grid-cols-2 gap-10 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {skillGroups.map((group, gi) => (
          <div
            key={group.category}
            className="p-6 rounded-2xl bg-[#111] border border-[#1F1F1F] hover:border-[#2A2A2A] transition-colors"
            style={{ transitionDelay: `${gi * 80}ms` }}
          >
            <p className="text-xs text-[#D094EA] tracking-widest uppercase mb-5 font-medium">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-3 py-1.5 rounded-lg bg-[#0A0A0A] border border-[#1F1F1F] text-[#888] hover:text-[#F5F5F5] hover:border-[#333] transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Marquee strip */}
      <div className="relative mt-20 overflow-hidden">
        <div className="flex gap-8 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          {[
            ...skillGroups.flatMap((g) => g.skills),
            ...skillGroups.flatMap((g) => g.skills),
          ].map((skill, i) => (
            <span
              key={i}
              className="text-[#1F1F1F] text-6xl font-bold shrink-0"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
