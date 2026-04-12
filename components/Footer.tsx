export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1F1F1F] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[#333]">
          © {year} Seu Nome. Feito com Next.js & Tailwind.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/seuperfil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#444] hover:text-[#888] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/seuperfil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#444] hover:text-[#888] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/seuperfil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#444] hover:text-[#888] transition-colors"
          >
            Twitter
          </a>
          <a
            href="mailto:seu@email.com"
            className="text-xs text-[#444] hover:text-[#D094EA] transition-colors"
          >
            seu@email.com
          </a>
        </div>
      </div>
    </footer>
  );
}
