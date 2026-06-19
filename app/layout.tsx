import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

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
      {}
      <body className="flex min-h-screen flex-col bg-slate-950 text-slate-50 antialiased">
        <Header />
        
        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}