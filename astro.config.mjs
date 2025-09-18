import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import AstroPWA from '@vite-pwa/astro';
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://zaplytnyy.netlify.app",
  integrations: [
  image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }),
  mdx(), 
  sitemap({
    filter: (page) =>
      page !== "https://zaplytnyy.netlify.app/booking/"    
  }), 
  AstroPWA({
    mode: 'production',
    base: '/',
    strategies: "generateSW",
    scope: '/',
    includeAssets: ["favicon.ico"],
    workbox: {
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,mp4}']
    },
    manifest: {
      short_name: "shortname",
      name: "examplename",
      id: "/",
      start_url: "/",
      background_color: "#212121",
      display: "standalone",
      scope: "/",
      theme_color: "#f28c18",
      description: "Astro PWA Starter is an opionated Astro starter for building robust static websites.",
      theme_color: "#30E130",
      background_color: "#ffffff",
      display: "minimal-ui",
      icons: [{
        src: "/favicons/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png"
      }, {
        src: "/favicons/favicon-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }, {
        src: "/favicons/favicon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable"
      }],
      shortcuts: []
    },
    output: 'server',
  }), 
  react()],
});