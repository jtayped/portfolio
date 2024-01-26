import { About, Hero, Portfolio, Testimonials } from "./components";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      <Portfolio />
      <Testimonials />
      <div className="mt-[1000px]"></div>
    </main>
  );
}
