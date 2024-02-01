export default function manifest() {
  return {
    name: "Joel Taylor | Front-end Developer",
    short_name: "Joel Taylor",
    "start-url": "https://joeltaylor.business",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/maskable_icon_x192.png",
        sizes: "196x196",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    theme_color: "#000",
    background_color: "#FAE534",
    display: "standalone",
  };
}
