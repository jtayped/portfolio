import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Joel Taylor | Front-end Developer",
  description:
    "Hi! I'm Joel Taylor, a passionate front-end developer dedicated to crafting innovative web solutions.",
  keywords: [
    "Front-end",
    "Developer",
    "React JS",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Python",
    "First Lego League",
    "SEO",
  ],
};

export const viewport = {
  themeColor: "#000",
};

export default function RootLayout({ children, params }) {
  const locale = useLocale();

  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className={`${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
