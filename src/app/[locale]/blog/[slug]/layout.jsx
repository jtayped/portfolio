export const metadata = {
  title: "Title",
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

export default function RootLayout({ children, params }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
