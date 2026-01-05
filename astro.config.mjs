import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';


export default defineConfig({
   site: 'https://www.just-andy.uk',
   integrations: [icon(), mdx(), sitemap()]
  });
