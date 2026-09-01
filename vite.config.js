import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Base path: '/' when deployed on Vercel or local dev, '/cargo-company/' when building for GitHub Pages
const isVercel = process.env.VERCEL === '1' || process.env.VERCEL === 'true' || process.env.NOW_BUILDER;
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: isVercel ? '/' : (isGitHubPages ? '/cargo-company/' : (process.env.NODE_ENV === 'production' && !isVercel ? '/cargo-company/' : '/')),
})
