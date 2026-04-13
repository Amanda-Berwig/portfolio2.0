import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amanda | Desenvolvedora Frontend",
  description: "Portfolio pessoal de Amanda Berwig, desenvolvedora frontend.",
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
