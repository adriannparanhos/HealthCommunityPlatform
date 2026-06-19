import Link from 'next/link';
import { Button } from '../ui/Button';

export function Header() {
  return (
    <header className="sticky top-0 z-10 w-full border-b border-slate-800 bg-slate-950/80 p-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white flex items-center gap-2">
          <span className="bg-brand-primary text-slate-950 p-1 rounded">⚡</span> MindHealth
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link href="/features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Features</Link>
          <Link href="/pricing" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Pricing</Link>
          <Link href="/login" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Sign in</Link>
          
          <Link href="/cadastro">
            <Button variant="primary" size="sm">Get started</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}