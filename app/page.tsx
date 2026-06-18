import Link from "next/link";
import { Button } from "../components/ui/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-50 p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-2">
          Plataforma de Saúde Mental
        </h1>
        <p className="text-slate-600 max-w-md mx-auto">
          Registre seu humor diário, escreva no seu diário pessoal e receba insights emocionais gerados por Inteligência Artificial.
        </p>
      </div>

      <div className="flex gap-4">
        <Link href="/cadastro">
          <Button variant="primary">
            Começar Agora
          </Button>
        </Link>
        
        <Link href="/sobre">
          <Button variant="outline">
            Saber mais
          </Button>
        </Link>
      </div>
    </main>
  );
}