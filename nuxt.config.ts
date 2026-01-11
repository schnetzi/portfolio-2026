// https://nuxt.com/docs/api/configuration/nuxt-config
import pkg from './package.json';

const authorName = pkg.author.name;
const profession = 'Web Developer';
const title = `${authorName} - ${profession}`;
const language = `en`;

export default defineNuxtConfig({
	modules: [
		'@nuxt/eslint',
		'@nuxt/fonts',
		'@nuxt/hints',
		'@nuxt/image',
		'@nuxt/scripts',
		'nuxt-svgo',
		[
			'@storyblok/nuxt',
			{
				accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
				apiOptions: {
					region: 'eu',
				},
			},
		],
	],
	devtools: { enabled: true },
	app: {
		head: {
			title,
			htmlAttrs: {
				lang: language,
			},
			meta: [
				{ name: 'keywords', content: pkg.keywords ? pkg.keywords.join(',') : '' },
				{ name: 'robots', content: 'index, nofollow' },

				{ property: 'profile:first_name', content: 'Paul' },
				{ property: 'profile:last_name', content: 'Schnetzinger' },
				{ property: 'profile:gender', content: 'male' },
			],
			link: [
				{
					rel: 'icon',
					type: 'image/x-icon',
					href: '/favicon.ico',
				},
				{
					rel: 'canonical',
					href: process.env.BASE_URL,
				},
			],
		},
	},
	css: [
		'~/assets/scss/base.scss',
		'~/assets/scss/font.scss',
		'~/assets/scss/layout.scss',
	],
	compatibilityDate: '2025-07-15',
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				quotes: 'single',
				semi: true,
				commaDangle: 'always-multiline',
			},
		},
	},
	fonts: {
		defaults: {
			weights: [400, 900],
			styles: ['normal'],
			subsets: ['latin'],
		},
		families: [
			{ name: 'Lato', provider: 'google' },
			{ name: 'Source Code Pro', provider: 'google' },
		],
	},
	image: {
		provider: 'storyblok',
		storyblok: {
			baseURL: 'https://a.storyblok.com',
		},
	},
	svgo: {
		autoImportPath: './assets/img/',
	},
});
