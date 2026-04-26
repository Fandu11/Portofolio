import { defineConfig, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// Configuration pour mesurer la taille du bundle en production
const plugins: PluginOption[] = [
  react({
    // Configuration minimale de Babel
    babel: {
      // Désactive les transformations inutiles en production
      compact: process.env.NODE_ENV === 'production',
    },
  }),
];

// Ajout du visualiseur uniquement en mode analyse
if (process.env.ANALYZE) {
  plugins.push(
    visualizer({
      open: true,
      filename: 'bundle-stats.html',
      gzipSize: true,
      brotliSize: true,
    }) as PluginOption
  );
}

export default defineConfig({
  plugins,
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
