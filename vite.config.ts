import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import legacy from '@vitejs/plugin-legacy';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// Configuration pour mesurer la taille du bundle en production
const plugins = [
  react({
    // Configuration minimale de Babel
    babel: {
      // Désactive les transformations inutiles en production
      compact: process.env.NODE_ENV === 'production',
    },
  }),
  // Support des navigateurs plus anciens
  legacy({
    targets: ['defaults', 'not IE 11'],
  }),
  // Optimisation des images (uniquement en production)
  ...(process.env.NODE_ENV === 'production' ? [ViteImageOptimizer({
    png: {
      quality: 75,
    },
    jpeg: {
      quality: 70,
    },
    jpg: {
      quality: 70,
    },
    webp: {
      quality: 75,
    },
    avif: {
      quality: 60,
    },
  })] : []),
  
  // Ajout du visualiseur uniquement en mode analyse
  ...(process.env.ANALYZE ? [
    visualizer({
      open: true,
      filename: 'bundle-stats.html',
      gzipSize: true,
      brotliSize: true,
    })
  ] : [])
];

// Filtrer les plugins undefined (imagemin en développement)
const filteredPlugins = plugins.filter(Boolean);

export default defineConfig({
  plugins: filteredPlugins,
  build: {
    target: 'esnext',
    minify: 'terser',
    reportCompressedSize: false,
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          framer: ['framer-motion'],
          i18n: ['i18next', 'react-i18next'],
          lucide: ['lucide-react'],
        },
      },
    },
  },
  server: {
    host: true,
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-dom/client',
      'framer-motion',
      'i18next',
      'react-i18next',
      'lucide-react',
    ],
    // Force la pré-optimisation des dépendances
    force: true,
  },
  // Configuration pour le mode développement
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  },
});
