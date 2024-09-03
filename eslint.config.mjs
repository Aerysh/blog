import eslintPluginAstro from 'eslint-plugin-astro';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
	{ ignores: ['dist', 'node_modules'] },
	...eslintPluginAstro.configs.recommended,
	eslintConfigPrettier,
];
