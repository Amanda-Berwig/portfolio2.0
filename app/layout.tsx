import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seu Nome — Designer & Developer",
  description: "Portfolio pessoal de Seu Nome, designer e desenvolvedor.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
