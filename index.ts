// @ts-ignore
import eslint from '@eslint/js';
// @ts-ignore
import react from 'eslint-plugin-react';
import stylistic from '@stylistic/eslint-plugin'
import * as tsParser from '@typescript-eslint/parser';
import solid from 'eslint-plugin-solid';
import tsEslint from 'typescript-eslint';
import type { ConfigWithExtends } from 'typescript-eslint';

/**
 * Configs for SolidJS
 */
export const solidConfig: ConfigWithExtends[] = [
	{
		...solid.configs['flat/recommended'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: 'tsconfig.json',
			},
		},
	},
	{
		plugins: { react },
		rules: {
			'react/button-has-type': [1, { reset: true }],
		},
	}
]

/**
 * My default eslint config for working with projects
 * For SolidJS support add solid {@link solidConfig}
 */
export function defineConfig(...config: ConfigWithExtends[]): ConfigWithExtends[] {
	return tsEslint.config(
		eslint.configs.recommended,
		...tsEslint.configs.recommended,
		{
			rules: {
				'prefer-const': 1,
				'space-infix-ops': 1,
				'no-console': [1, { allow: ['warn', 'error'] }],
				'@typescript-eslint/no-unused-vars': 1,
				'@typescript-eslint/ban-types': 1,
				'@typescript-eslint/method-signature-style': 1,
				'@typescript-eslint/no-explicit-any': 0,
				'@typescript-eslint/no-non-null-assertion': 0,
				'@typescript-eslint/ban-ts-comment': 0,
				'@typescript-eslint/consistent-type-imports':        1,
				'@typescript-eslint/explicit-module-boundary-types': 1,
			}
		},
		{
			plugins: { '@stylistic': stylistic },
			rules: {
				'@stylistic/semi': [1, 'always'],
				'@stylistic/no-multiple-empty-lines': [1, { max: 2, maxEOF: 0 }],
				'@stylistic/arrow-parens': [1, 'always'],
				'@stylistic/indent': [1, 'tab', { SwitchCase: 1 }],
				'@stylistic/comma-dangle': [1, 'always-multiline'],
				'@stylistic/quote-props': [1, 'as-needed'],
				'@stylistic/object-curly-spacing': [1, 'always'],
				'@stylistic/object-curly-newline': [1, { multiline: true, consistent: true }],
				'@stylistic/no-trailing-spaces': 1,
				'@stylistic/quotes': [1, 'single'],
				'@stylistic/key-spacing': [1, { align: 'value' }],
				'@stylistic/space-before-blocks': 1,
				'@stylistic/comma-spacing': 1,

				'@stylistic/jsx-max-props-per-line': [1, { maximum: 1, when: 'multiline' }],
				'@stylistic/jsx-closing-bracket-location': 1,
				'@stylistic/jsx-indent': [1, 'tab'],
				'@stylistic/jsx-first-prop-new-line': 1,
				'@stylistic/jsx-tag-spacing': 1,
				'@stylistic/jsx-quotes': 1,
			},
		},
		...config,
	)
}
