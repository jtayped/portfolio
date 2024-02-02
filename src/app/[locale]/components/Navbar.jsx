import { Link } from "@/navigation";
import { Menu } from ".";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const t = useTranslations("Header");
  const keys = ["about", "portfolio", "blog", "contact"];

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between py-8 sm:py-10 px-8 md:px-20 text-black z-10 bg-yellow/80 backdrop-blur-sm">
      <Link href="/">
        <p className="text-2xl sm:text-4xl font-extrabold">TAYLOR</p>
      </Link>
      <nav className="hidden md:flex items-center gap-10 text-lg uppercase">
        {keys.map((key, i) => (
          <Link
            href={t(`${key}.path`)}
            key={i}
            className={`${
              t(key + ".accent")
                ? "bg-black text-yellow hover:bg-black/90 transition-colors px-3 py-1 rounded-sm shadow"
                : "tracking-wider"
            }`}
          >
            {t(`${key}.name`)}
          </Link>
        ))}
      </nav>
      <Menu />
    </header>
  );
};

export default Navbar;
