import CoreAlias from '@core/alias';
import react from '@vitejs/plugin-react';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, loadEnv,PluginOption } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), visualizer({}) as PluginOption],
    server: {
      port: 3000,
    },
    preview: {
      port: 4000,
    },
    resolve: {
      alias: [
        ...CoreAlias,
        {
          find: '@router',
          replacement: path.join(__dirname, './src/router'),
        },
        {
          find: '@pages',
          replacement: path.join(__dirname, './src/pages'),
        },
        {
          find: '@styles',
          replacement: path.join(__dirname, './src/styles'),
        },
      ],
    },
    define: {
      'process.env.API_BASE_URL': JSON.stringify(env.API_BASE_URL),
    },
  };
});
