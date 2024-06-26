import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://minji0214.github.io',
	base: 'minglog.github.io',
	integrations: [mdx(), sitemap()],
});
