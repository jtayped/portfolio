import { About, Hero, Portfolio, Testimonials, Contact } from "./components";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <div className="flex flex-col gap-[25px] sm:gap-[100px] mb-14">
        <About />
        <Portfolio />
        <Testimonials />
        <Contact />
      </div>
    </main>
  );
}
