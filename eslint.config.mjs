// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
	{
		ignores: [
			'.nuxt/**',
			'.output/**',
			'dist/**',
			'node_modules/**',
			'**/*.d.ts',
			'.gitignore',
		],
	},
	{
		files: ['**/*.vue'],
		rules: {
			'vue/multi-word-component-names': ['error', {
				ignores: ['Page', 'Richtext'],
			}],
			'vue/max-attributes-per-line': [
				'error',
				{
					singleline: {
						max: 20,
					},
					multiline: {
						max: 1,
					},
				},
			],
			'vue/block-order': ['error', {
				order: ['template', 'script', 'style'],
			}],
			'vue/first-attribute-linebreak': [
				'error',
				{
					singleline: 'ignore',
					multiline: 'below',
				},
			],
		},
	},
	{
		files: [
			'**/pages/**/*.vue',
			'**/layouts/**/*.vue',
			'app/error.vue',
			'error.vue',
		],
		rules: {
			'vue/multi-word-component-names': 'off',
		},
	},
);
