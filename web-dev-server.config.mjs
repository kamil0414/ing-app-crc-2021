import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
  appIndex: 'index.html',
  nodeResolve: true,
  open: true,
  plugins: [esbuildPlugin({ jsx: true, jsxFactory: 'h', jsxFragment: 'Fragment' })],
  watch: true,
};