/// <reference types="vitest" />
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [tsconfigPaths()],
	test: {
		coverage: {
			include: ['src'],
			reporter: ['text', 'cobertura', 'html'],
		},
		reporters: ['junit', 'basic'],
		environment: 'node',
		globals: true,
		outputFile: 'test/test-results.xml',
		setupFiles: ['./test/setup-test-env.ts'],
	},
});
