import { Features } from "../components/home/Feature";
import { Hero } from "../components/home/Hero";

export default function Home() {  
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
    </div>
  );
}