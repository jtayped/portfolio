import { About, Hero, Portfolio } from "./components";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      <Portfolio />
      <div className="mt-[1000px]"></div>
    </main>
  );
}
