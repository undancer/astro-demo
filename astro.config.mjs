import {defineConfig} from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import vue from '@astrojs/vue';
import solid from '@astrojs/solid-js';
import addClasses from './add-classes.mjs';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    // Enable many frameworks to support all different kinds of components.
    integrations: [preact(), react(), svelte(), vue(), solid(), mdx(), sitemap()],
    // Enable Custom Markdown options, plugins, etc.
    markdown: {
        remarkPlugins: ['remark-code-titles'],
        rehypePlugins: [
            'rehype-slug',
            ['rehype-autolink-headings', {behavior: 'prepend'}],
            ['rehype-toc', {headings: ['h2', 'h3']}],
            [addClasses, {'h1,h2,h3': 'title'}],
        ],
    },
});
