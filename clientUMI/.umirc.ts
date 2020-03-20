import { defineConfig } from 'umi';

export default defineConfig({
  // layout:{}
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  dva: {
    immer: true,
    hmr: false,
  },
});
