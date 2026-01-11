export const transformImage = (image: string, option: string): string => {
	if (!image) return '';
	if (!option) return '';

	const imageService = 'https://img2.storyblok.com/';

	const path = image.replace(/^https?:\/\/a\.storyblok\.com/, '');

	return imageService + option + path;
};
