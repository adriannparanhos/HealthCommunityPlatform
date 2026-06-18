import Link from 'next/link';

export function Header() {
  return (
    <header className="w-full border-b border-slate-200 bg-white p-4 shadow-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Link href="/" className="text-xl font-bold text-slate-800">
          MindHealth
        </Link>
        <nav>
        </nav>
      </div>
    </header>
  );
}