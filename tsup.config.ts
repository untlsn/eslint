import { defineConfig } from 'tsup';

export default defineConfig({
	entry:     ['index.ts'],
	sourcemap: true,
	clean:     true,
	dts:       true,
	format:    ['esm'],
});
