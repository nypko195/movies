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
      cache: false,
      include: ['src/**/*.{scss,vue,}'],
    }),
    eslintPlugin({
      fix: true,
      cache: false,
      include: ['src/**/*.{scss,vue,}'],
      emitError: true,
      emitWarning: true,
    }),
  ],

  css: { 
    preprocessorOptions : { 
        scss : { 
          additionalData: '@import "./src/styles/bundle";' 
        } 
    } 
  },
});
