import Link from "next/link";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";

export default function Login() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-xl border border-slate-100 bg-white p-8 shadow-sm">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Acesse sua conta</h1>
          <p className="text-sm text-slate-500">
            Seja bem-vindo de volta à nossa comunidade.
          </p>
        </div>

        <form className="flex flex-col gap-4">
          <Input 
            label="E-mail" 
            id="email" 
            type="email" 
            placeholder="voce@exemplo.com" 
            required
          />
          
          <div className="flex flex-col">
            <Input 
              label="Senha" 
              id="password" 
              type="password" 
              placeholder="Sua senha secreta" 
              required
            />
            <Link 
              href="/recuperar-senha" 
              className="mt-1 text-right text-xs text-slate-500 hover:text-brand-primary"
            >
              Esqueceu a senha?
            </Link>
          </div>

          <Button type="button" className="mt-4 w-full">
            Entrar
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-600">
          Ainda não tem uma conta?{" "}
          <Link href="/cadastro" className="font-semibold text-brand-primary hover:underline">
            Cadastre-se agora
          </Link>
        </div>
      </div>
    </div>
  );
}