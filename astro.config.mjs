import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://stumpyblogs.netlify.app",
  integrations: [preact(), tailwind(), icon()]
});