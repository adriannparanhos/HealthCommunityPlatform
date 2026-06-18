import Link from "next/link";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section className="w-full bg-slate-50 px-4 py-24 text-center">
      <h1 className="mb-6 text-5xl font-extrabold text-slate-900 md:text-6xl">
        Um espaço seguro para o seu <span className="text-brand-primary">bem-estar</span>
      </h1>
      <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600">
        Conecte-se com pessoas reais. Compartilhe sua jornada, fale sobre sua vida e encontre apoio para cuidar da sua saúde mental e física todos os dias.
      </p>
      <div className="flex justify-center gap-4">
        <Link href="/cadastro">
          <Button variant="primary">Junte-se à Comunidade</Button>
        </Link>
        <Link href="/sobre">
          <Button variant="outline">Entenda o Propósito</Button>
        </Link>
      </div>
    </section>
  );
}