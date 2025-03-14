import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';

export default tseslint.config(
	{
		ignores: [
			'lib/**',
			'node_modules/**',
			'vitest.config.ts',
			'coverage/**',
			'.eslintrc.js',
			'.prettierrc.js',
			'.stylelintrc.js',
			'eslint.config.js',
			'update-imports.js',
		],
	},
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	{
		files: ['src/**/*.ts'],
		languageOptions: {
			ecmaVersion: 2021,
			sourceType: 'module',
			parser: tseslint.parser,
			parserOptions: {
				project: './tsconfig.json',
			},
		},
		plugins: {
			'@typescript-eslint': tseslint.plugin,
			import: importPlugin,
			prettier: prettierPlugin,
		},
		rules: {
			'no-sparse-arrays': 'off',
			'@typescript-eslint/no-unused-vars': 'error',
			'@typescript-eslint/no-non-null-assertion': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'import/first': 'error',
			'prettier/prettier': 'error',
			'import/newline-after-import': 'error',
			'import/no-duplicates': 'error',
			'import/order': [
				'error',
				{
					'newlines-between': 'always',
					alphabetize: {
						order: 'asc',
						caseInsensitive: true,
					},
				},
			],
			'no-useless-rename': 'error',
			'object-shorthand': 'error',
			'@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
			'@typescript-eslint/consistent-type-imports': 'error',
			'@typescript-eslint/method-signature-style': 'error',
			'no-use-before-define': 'off',
			'@typescript-eslint/no-use-before-define': 'error',
			'@typescript-eslint/prefer-ts-expect-error': 'error',
			'@typescript-eslint/prefer-function-type': 'error',
			'@typescript-eslint/prefer-includes': 'error',
			'@typescript-eslint/prefer-reduce-type-parameter': 'error',
			'@typescript-eslint/prefer-string-starts-ends-with': 'error',
			'@typescript-eslint/switch-exhaustiveness-check': 'error',
		},
		settings: {
			'import/parsers': {
				'@typescript-eslint/parser': ['.ts'],
			},
			'import/resolver': {
				typescript: {
					alwaysTryTypes: true,
					project: 'tsconfig.json',
				},
			},
		},
	},
	{
		files: ['src/**/*.ts'],
		...tseslint.configs.recommendedRequiringTypeChecking,
	},
);
