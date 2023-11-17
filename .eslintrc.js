module.exports = {
	env: {
		browser: true,
		es6: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	overrides: [
		{
			files: ['**/*.ts'],
			extends: [
				'eslint:recommended',
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
				'plugin:import/typescript',
			],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				ecmaVersion: 12,
				sourceType: 'module',
				project: 'tsconfig.json',
			},
			plugins: ['import', '@typescript-eslint'],
			rules: {
				'no-sparse-arrays': 'off',
				'@typescript-eslint/no-unused-vars': 'error',
				'@typescript-eslint/no-non-null-assertion': 'off',
				'@typescript-eslint/explicit-module-boundary-types': 'off',
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
	],
	plugins: ['@typescript-eslint', 'import', 'prettier'],
	rules: {
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
		'@typescript-eslint/type-annotation-spacing': 'error',
	},
};
