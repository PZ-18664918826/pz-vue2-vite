import { fileURLToPath } from 'url';
import { defineConfig, loadEnv } from 'vite';
import { setupVitePlugins } from './build';

export default defineConfig(configEnv => {
  const viteEnv = loadEnv(configEnv.mode, `.env.${configEnv.mode}`);

  return {
    base: viteEnv.BASE_URL,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '~': fileURLToPath(new URL('./', import.meta.url))
      }
    },
    plugins: setupVitePlugins(configEnv),
    server: {
      fs: {
        strict: false
      },
      host: '0.0.0.0',
      port: 3300,
      open: true
    },
    build: {
      brotliSize: false,
      sourcemap: false
    }
  };
});
