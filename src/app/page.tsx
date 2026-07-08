import Hero from "../components/layout/hero";
import LifestyleCarousel from "../components/layout/LifestyleCarousel"; // cámbialo a minúsculas si guardaste el carrusel en minúsculas

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <LifestyleCarousel />
    </main>
  );
}