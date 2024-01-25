import { About, Hero } from "./components";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      <div className="mt-[1000px]"></div>
    </main>
  );
}
