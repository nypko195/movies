// https://vitejs.dev/config/
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import stylelint from 'vite-plugin-stylelint';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    vue(),
    stylelint({
      fix: true,
      include: ['src/**/*.{scss,vue,}'],
    }),
    eslintPlugin(),
  ],

  css: { 
    preprocessorOptions : { 
        scss : { 
          additionalData: '@import "./src/styles/bundle";' 
        } 
    } 
  },
});
