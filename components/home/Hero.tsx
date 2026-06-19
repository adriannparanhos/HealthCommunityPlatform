import Link from "next/link";
import { Button } from "../ui/Button";
import { HeroCarousel } from "./HeroCarousel";

export function Hero() {
  return (
    <section className="w-full px-4 pt-24 pb-16 text-center">
      <div className="mx-auto flex max-w-4xl flex-col items-center">
        
        {}
        <div className="mb-8 flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-4 py-1.5 text-sm font-medium text-slate-300">
          <span>🔥</span> Now with AI-powered wellness insights
        </div>

        {}
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white md:text-7xl">
          Your wellness journey, <span className="text-brand-primary">amplified by community</span>
        </h1>
        
        <p className="mb-10 max-w-2xl text-lg text-slate-400">
          Track habits, share routines, connect with like-minded people, and build the healthy life you deserve. Join 200,000+ members on MindHealth.
        </p>
        
        {}
        <div className="flex flex-col items-center gap-4 sm:flex-row justify-center">
          <Link href="/cadastro">
            <Button variant="primary" size="lg" className="w-full sm:w-auto font-bold px-8">
              Start for free &rarr;
            </Button>
          </Link>
          <Link href="/sobre">
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-slate-700 hover:bg-slate-800 hover:text-white">
              View demo
            </Button>
          </Link>
        </div>
        
        <p className="mt-4 text-xs text-slate-500">
          No credit card required &middot; Cancel anytime
        </p>

      </div>

      {}
      <HeroCarousel />

    </section>
  );
}