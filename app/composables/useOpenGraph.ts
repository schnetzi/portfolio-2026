import type { OpenGraph } from '~~/types/types/100825/storyblok-components';
import type { StoryblokAsset } from '~~/types/types/storyblok';

export const useOpenGraph = (blok: Ref<OpenGraph>) => {
	const data = computed(() => toValue(blok));

	const getImagePath = (image: StoryblokAsset, format: 'jpg' | 'webp') => {
		if (!image?.filename) {
			return '';
		}

		return transformImage(image.filename, `600x600/filters:format(${format})`);
	};

	useHead(() => {
		const content = data.value;

		if (!content || Object.keys(content).length === 0 || content.image === undefined) {
			return {};
		}

		const jpgPath = getImagePath(content.image, 'jpg');
		const webpPath = getImagePath(content.image, 'webp');
		const width = '600';
		const height = '600';

		return {
			meta: [
				// --- JPG Version ---
				{ property: 'og:image', content: jpgPath },
				{ property: 'og:image:secure_url', content: jpgPath },
				{ property: 'og:image:width', content: width },
				{ property: 'og:image:height', content: height },
				{ property: 'og:image:type', content: 'image/jpg' },
				{ property: 'og:image:alt', content: content.image?.name },

				// --- WebP Version ---
				{ property: 'og:image', content: webpPath },
				{ property: 'og:image:secure_url', content: webpPath },
				{ property: 'og:image:width', content: width },
				{ property: 'og:image:height', content: height },
				{ property: 'og:image:type', content: 'image/webp' },
				{ property: 'og:image:alt', content: content.image?.name },

				// --- Twitter Card ---
				{ name: 'twitter:card', content: 'summary' },
				{ name: 'twitter:site', content: content.twitter_handle },
				{ name: 'twitter:creator', content: content.twitter_handle },
				{ name: 'twitter:title', content: content.title },
				{ name: 'twitter:description', content: content.description },
				{ name: 'twitter:image:src', content: jpgPath },
				{ name: 'twitter:image:width', content: width },
				{ name: 'twitter:image:height', content: height },
				{ name: 'twitter:image:alt', content: content.image?.name },
			],
		};
	});
};
