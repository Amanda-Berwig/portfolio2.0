"use client";

import { useEffect, useRef, useState } from "react";

// ────────────────────────────────────────────────
// EDITE AQUI OS SEUS PROJETOS
// ────────────────────────────────────────────────
const projects = [
  {
    id: "01",
    title: "Projeto Alpha",
    category: "Design de Produto",
    description:
      "Redesign completo da experiência de onboarding, resultando em 40% mais retenção de usuários.",
    tags: ["Figma", "React", "TypeScript"],
    link: "#",
    image: "/project-1.jpg", // coloque sua imagem em /public/project-1.jpg
    featured: true,
  },
  {
    id: "02",
    title: "Projeto Beta",
    category: "Web App",
    description:
      "Plataforma SaaS de gestão de equipes remotas com design system próprio.",
    tags: ["Next.js", "Tailwind", "Prisma"],
    link: "#",
    image: "/project-2.jpg",
    featured: true,
  },
  {
    id: "03",
    title: "Projeto Gamma",
    category: "E-commerce",
    description:
      "Loja virtual com foco em conversão e experiência de compra premium.",
    tags: ["Shopify", "React", "Framer Motion"],
    link: "#",
    image: "/project-3.jpg",
    featured: false,
  },
  {
    id: "04",
    title: "Projeto Delta",
    category: "Branding",
    description: "Identidade visual e design system para startup de fintech.",
    tags: ["Figma", "Illustrator", "Brand"],
    link: "#",
    image: "/project-4.jpg",
    featured: false,
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
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
    <div
      ref={ref}
      className={`group transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {/* Image */}
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#111] border border-[#1F1F1F] mb-5 group-hover:border-[#D094EA]/30 transition-colors">
          {/* Replace with <img src={project.image} ... /> when you have images */}
          <div className="absolute inset-0 flex items-center justify-center text-[#222] group-hover:text-[#333] transition-colors">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[#D094EA]/0 group-hover:bg-[#D094EA]/5 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-2 bg-[#0A0A0A] px-4 py-2 rounded-full text-sm text-[#F5F5F5]">
              Ver projeto
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
            </div>
          </div>

          {/* Number badge */}
          <div className="absolute top-4 left-4 text-xs text-[#555] font-mono">
            {project.id}
          </div>
        </div>

        {/* Info */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs text-[#555] mb-1 tracking-wide">
              {project.category}
            </p>
            <h3
              className="text-xl font-bold text-[#F5F5F5] group-hover:text-[#D094EA] transition-colors mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {project.title}
            </h3>
            <p className="text-sm text-[#666] leading-relaxed">
              {project.description}
            </p>
          </div>
          <div className="shrink-0 mt-1">
            <div className="w-8 h-8 rounded-full border border-[#1F1F1F] group-hover:border-[#D094EA] flex items-center justify-center transition-colors">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-[#555] group-hover:text-[#D094EA] transition-colors"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-[#111] border border-[#1F1F1F] text-[#666]"
            >
              {tag}
            </span>
          ))}
        </div>
      </a>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 max-w-6xl mx-auto">
      {/* Section header */}
      <div className="flex items-end justify-between mb-16 gap-6 flex-wrap">
        <div>
          <p className="text-xs text-[#D094EA] tracking-widest uppercase mb-4">
            — Projetos
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#F5F5F5]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Trabalhos
            <br />
            <span className="text-[#444]">selecionados</span>
          </h2>
        </div>

        <a
          href="https://github.com/seuperfil"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-[#888] hover:text-[#F5F5F5] transition-colors border-b border-[#333] hover:border-[#888] pb-1"
        >
          Ver todos no GitHub
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
