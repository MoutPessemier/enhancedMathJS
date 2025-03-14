/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [tsconfigPaths()],
	test: {
		coverage: {
			include: ['src'],
			exclude: ['**/node_modules/**'],
			reporter: ['text', 'cobertura', 'html'],
		},
		reporters: ['junit', ['default', { summary: false }]],
		environment: 'node',
		globals: true,
		outputFile: 'test/test-results.xml',
		setupFiles: ['./test/setup-test-env.ts'],
	},
});
