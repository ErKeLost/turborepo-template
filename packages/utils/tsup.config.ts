import type { Options } from 'tsup'

export default <Options>{
  entryPoints: ['src/*.ts'],
  clean: true,
  format: ['cjs', 'esm'],
  dts: true
  // sourcemap: 'inline',
  // onSuccess: 'npm run build:fix'
}
