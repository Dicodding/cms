import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '#': resolve(__dirname, './src/types'),
      utils: resolve(__dirname, './src/utils'),
      api: resolve(__dirname, './src/api')
    }
  },
  plugins: [vue(), vueJsx()],
  build: {
    target: 'esnext',
    minify: 'terser', // 混淆器，terser构建后文件体积更小
    sourcemap: false
  }
});
