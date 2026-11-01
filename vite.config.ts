import { defineConfig, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path';

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
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    reportCompressedSize: false,
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096, // 4kb
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'vendor_framer';
            if (id.includes('i18next') || id.includes('react-i18next')) return 'vendor_i18n';
            if (id.includes('lucide-react')) return 'vendor_lucide';
            return 'vendor';
          }
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
