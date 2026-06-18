import Link from "next/link";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";

export default function Cadastro() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-xl border border-slate-100 bg-white p-8 shadow-sm">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Crie sua conta</h1>
          <p className="text-sm text-slate-500">
            Comece a monitorar sua saúde mental hoje.
          </p>
        </div>

        <form className="flex flex-col gap-4">
          <Input 
            label="Nome completo" 
            id="name" 
            type="text" 
            placeholder="Ex: João da Silva" 
          />
          
          <Input 
            label="E-mail" 
            id="email" 
            type="email" 
            placeholder="voce@exemplo.com" 
          />
          
          <Input 
            label="Senha" 
            id="password" 
            type="password" 
            placeholder="Mínimo 8 caracteres" 
          />

          <Button type="button" className="mt-4 w-full">
            Criar conta
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-600">
          Já tem uma conta?{" "}
          <Link href="/login" className="font-semibold text-brand-primary hover:underline">
            Faça login
          </Link>
        </div>
      </div>
    </div>
  );
}