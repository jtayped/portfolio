import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Joel Taylor | Web Developer",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
