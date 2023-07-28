import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'
import react from '@astrojs/react'
import svelte from '@astrojs/svelte'
import vue from '@astrojs/vue'
import solid from '@astrojs/solid-js'
import sitemap from '@astrojs/sitemap'

// import mdx from "@astrojs/mdx";
// @ts-expect-error
import netlify from '@astrojs/netlify/functions'
import addClasses from './add-classes.mjs'

// https://astro.build/config
export default defineConfig({
  // 你的配置项都在这里
  // https://docs.astro.build/zh-cn/reference/configuration-reference/

  // site: 'https://example.com',
  // Enable many frameworks to support all different kinds of components.
  integrations: [
    preact(),
    react(),
    svelte(),
    vue(),
    solid(),
    // mdx(),
    sitemap(),
  ],
  // Enable Custom Markdown options, plugins, etc.
  markdown: {
    remarkPlugins: ['remark-code-titles'],
    rehypePlugins: [
      'rehype-slug',
      ['rehype-autolink-headings', { behavior: 'prepend' }],
      ['rehype-toc', { headings: ['h2', 'h3'] }],
      [addClasses, { 'h1,h2,h3': 'title' }],
    ],
  },
  output: 'server',
  adapter: netlify(),
})
