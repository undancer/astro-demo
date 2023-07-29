import type { APIRoute } from 'astro';

export const get: APIRoute =  () => ({
  body: `# www.robotstxt.org/

# Allow crawling of all content
User-agent: *
Disallow:`,
});
