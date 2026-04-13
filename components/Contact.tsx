"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

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

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSent(true);
        setFormState({
          name: "",
          email: "",
          message: "",
        });
      } else {
        console.error("Failed to send message");
        alert("Erro ao enviar mensagem. Tente novamente.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Ocorreu um erro ao enviar a mensagem.");
    }
  }

  return (
    <section id="contact" ref={ref} className="py-28 px-6 max-w-6xl mx-auto">
      {/* Divider */}
      <div className="w-full h-px bg-[#1F1F1F] mb-28" />

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left: copy */}
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs text-[#D094EA] tracking-widest uppercase mb-4">
            — Contato
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#F5F5F5] leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Tem um projeto
            <br />
            em mente?
          </h2>
          <p className="text-[#666] text-base leading-relaxed mb-10">
            Estou sempre aberta a conversar sobre novos projetos, ideias
            criativas ou oportunidades de colaboração. Me manda uma mensagem!
          </p>

          {/* Contact info */}
          <div className="flex flex-col gap-4">
            <a
              href="amanda.berwig@gmail.com"
              className="group flex items-center gap-3 text-[#888] hover:text-[#D094EA] transition-colors"
            >
              <div className="w-9 h-9 rounded-full border border-[#1F1F1F] group-hover:border-[#D094EA]/50 flex items-center justify-center transition-colors">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <span className="text-sm">amanda.berwig@gmail.com</span>
            </a>

            <a
              href="https://linkedin.com/in/amanda-berwig"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-[#888] hover:text-[#D094EA] transition-colors"
            >
              <div className="w-9 h-9 rounded-full border border-[#1F1F1F] group-hover:border-[#D094EA]/50 flex items-center justify-center transition-colors">
                <svg
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <span className="text-sm">linkedin.com/in/amanda-berwig</span>
            </a>
          </div>
        </div>

        {/* Right: form */}
        <div
          className={`transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {sent ? (
            <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-[#D094EA]/10 flex items-center justify-center">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D094EA"
                  strokeWidth="2"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3
                className="text-xl font-bold text-[#F5F5F5]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Mensagem enviada!
              </h3>
              <p className="text-[#666] text-sm">Retorno em até 24 horas.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name */}
              <div>
                <label className="block text-xs text-[#555] mb-2 tracking-wide uppercase">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  className="w-full bg-[#111] border border-[#1F1F1F] rounded-xl px-4 py-3.5 text-sm text-[#F5F5F5] placeholder-[#333] focus:outline-none focus:border-[#D094EA]/50 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs text-[#555] mb-2 tracking-wide uppercase">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full bg-[#111] border border-[#1F1F1F] rounded-xl px-4 py-3.5 text-sm text-[#F5F5F5] placeholder-[#333] focus:outline-none focus:border-[#D094EA]/50 transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs text-[#555] mb-2 tracking-wide uppercase">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Me conta sobre seu projeto..."
                  className="w-full bg-[#111] border border-[#1F1F1F] rounded-xl px-4 py-3.5 text-sm text-[#F5F5F5] placeholder-[#333] focus:outline-none focus:border-[#D094EA]/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full py-4 bg-[#D094EA] text-[#0A0A0A] rounded-xl font-bold text-sm tracking-wide hover:bg-[#c47ee0] active:scale-95 transition-all duration-200"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Enviar mensagem
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
