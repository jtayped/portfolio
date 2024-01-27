import {
  About,
  Hero,
  Portfolio,
  Testimonials,
  Contact,
  Research,
} from "./components";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <div className="flex flex-col gap-[25px] sm:gap-[100px] sm:mb-14">
        <About />
        <Portfolio />
        <Research />
        <Testimonials />
        <Contact />
      </div>
    </main>
  );
}
