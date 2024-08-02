import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://stunning-douhua-60b2ec.netlify.app/",
  integrations: [preact()]
});