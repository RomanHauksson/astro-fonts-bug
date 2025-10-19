// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Noto Sans",
        cssVariable: "--astro-noto-sans",
      },
    ],
  },
});
