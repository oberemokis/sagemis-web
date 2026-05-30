import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: { lang: "ru" },
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/logo.svg" },
        { rel: "apple-touch-icon", href: "/logo.svg" },
      ],
      meta: [{ name: "format-detection", content: "telephone=no" }],
    },
  },
  css: ["~/assets/css/main.css"],
  components: [{ path: "~/components", pathPrefix: false }],
  vite: {
    plugins: [tailwindcss()],
  },
});
