export default function manifest() {
  return {
    name: "Joel Taylor | Front-end Developer",
    short_name: "Joel Taylor",
    description:
      "Hi! I'm Joel Taylor, a passionate front-end developer dedicated to crafting innovative web solutions.",
    "start-url": "https://yellow-concept.vercel.app",
    icons: [
      {
        src: "metadata/android-chrome-196x196.png",
        sizes: "196x196",
        type: "image/png",
      },
      {
        src: "metadata/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "metadata/maskable_icon_x196.png",
        sizes: "196x196",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    screenshots: [
      {
        src: "metadata/screenshots/wide.png",
        sizes: "640x320",
        type: "image/png",
        form_factor: "wide",
      },
      {
        src: "metadata/screenshots/narrow.png",
        sizes: "390x800",
        type: "image/png",
        form_factor: "narrow",
      },
    ],
    theme_color: "#000",
    background_color: "#FAE534",
    display: "standalone",
  };
}
