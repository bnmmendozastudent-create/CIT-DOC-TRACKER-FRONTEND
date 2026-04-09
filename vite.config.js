import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    target: 'esnext',        // ← often fixes top-level await & hanging
    // or try: 'es2022'
    minify: 'esbuild',       // or 'terser' if you prefer
    rollupOptions: {
      // If you suspect a specific heavy file, you can externalize or optimize it
    }
  },
  // Optional: increase timeout or log more
  logLevel: 'info',
})
