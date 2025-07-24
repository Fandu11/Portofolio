import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      // Utilisation du runtime classique pour de meilleures performances
      jsxRuntime: 'classic',
      // Configuration du babel pour la production
      babel: {
        configFile: false,
        babelrc: false,
        compact: true,
      },
    }),
  ],
  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
        passes: 2,
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom')) return 'vendor_react-dom';
            if (id.includes('react')) return 'vendor_react';
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
    // Désactive le rechargement complet de la page pour les erreurs mineures
    hmr: {
      overlay: false,
    },
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
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
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
  },
});
