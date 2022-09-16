import { webpackBundler } from '@vuepress/bundler-webpack';
import { defineUserConfig } from 'vuepress';
import { typedocPlugin } from 'vuepress-plugin-typedoc/next';

export default defineUserConfig({
  title: 'bug reproduce repo',
  bundler: webpackBundler({
    postcss: {},
    vue: {},
  }),
  plugins: [
    typedocPlugin({
      entryPoints: ['packages/package1/src/index.ts'],
      tsconfig: 'packages/package1/tsconfig.json',
      out: 'api/package1',
    }),
    typedocPlugin({
      entryPoints: ['packages/package2/src/index.ts'],
      tsconfig: 'packages/package2/tsconfig.json',
      out: 'api/package2',
    }),
  ]
});
