import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import cloudflare from "@astrojs/cloudflare"

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: cloudflare(),
	site: 'https://lovania.dev',
	integrations: [mdx(), sitemap()],
});
