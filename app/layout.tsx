import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../components/layout/Header";

export const metadata: Metadata = {
  title: "Plataforma de Saúde Mental",
  description: "Monitoramento inteligente com IA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}