import Link from "next/link";
import { pages } from "@/constants/pages";
import { Menu } from ".";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between py-8 sm:py-10 px-8 md:px-20 text-black z-10 bg-yellow/80 backdrop-blur-sm">
      <Link href="/">
        <p className="text-2xl sm:text-4xl font-extrabold">TAYLOR</p>
      </Link>
      <nav className="hidden md:flex items-center gap-10 text-lg uppercase">
        {pages.map((page, i) => (
          <Link
            href={page.path}
            key={i}
            className={`${
              page.accent
                ? "bg-black text-yellow hover:bg-black/90 transition-colors px-3 py-1 rounded-sm shadow"
                : "tracking-wider"
            }`}
          >
            {page.name}
          </Link>
        ))}
      </nav>
      <Menu />
    </header>
  );
};

export default Navbar;
