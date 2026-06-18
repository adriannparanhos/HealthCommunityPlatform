import Link from "next/link";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section className="w-full bg-slate-50 px-4 py-24 text-center">
      <h1 className="mb-6 text-5xl font-extrabold text-slate-900 md:text-6xl">
        Sua mente em <span className="text-brand-primary">equilíbrio</span>
      </h1>
      <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600">
        Registre seu humor diário, escreva no seu diário pessoal e receba insights emocionais gerados por Inteligência Artificial para uma vida mais saudável.
      </p>
      <div className="flex justify-center gap-4">
        <Link href="/cadastro">
          <Button variant="primary">Começar Gratuitamente</Button>
        </Link>
        <Link href="/sobre">
          <Button variant="outline">Como funciona</Button>
        </Link>
      </div>
    </section>
  );
}