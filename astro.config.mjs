import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://lovania.dev',
	integrations: [mdx(), sitemap()],
	routes: {
		'/': { view: '/' },
		'blog.lovania.dev': { view: '/blog' },
	},
});
