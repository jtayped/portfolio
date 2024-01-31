import {
  About,
  Hero,
  Portfolio,
  Testimonials,
  Contact,
  Research,
} from "./components";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
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
