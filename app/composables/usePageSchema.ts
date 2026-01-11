import type { Address, AlumniOf, SameAs, TheSchema, WorksFor } from '~~/types/types/100825/storyblok-components';
import type { StoryblokAsset } from '~~/types/types/storyblok';

export const usePageSchema = (blok: Ref<TheSchema | undefined>) => {
	const getGender = (gender: string) =>
		gender === 'm' ? 'https://schema.org/Male' : 'https://schema.org/Female';

	const getAddress = (address?: Address | undefined) => {
		if (!address) {
			return null;
		}

		return {
			'@type': 'PostalAddress',
			'addressRegion': address.addressRegion,
			'postalCode': address.postalCode,
			'addressCountry': address.addressCountry,
			'streetAddress': address.streetAddress,
		};
	};

	const jsonLd = computed(() => {
		const data = blok.value;

		// Safety check: if data isn't loaded yet
		if (!data || !data.personal?.[0]) return null;

		const personal = data.personal[0];

		// Construct the main object
		return {
			'@context': 'https://schema.org',
			'@type': 'Person',
			'name': personal.name,
			'image': personal.image?.filename,
			'jobTitle': personal.jobTitle,
			'description': personal.description,
			'telephone': personal.telephone,
			'gender': personal.gender ? getGender(personal.gender) : null,
			'nationality': personal.nationality,
			'url': personal.url?.url,

			// Relations
			'address': getAddress(data.address?.[0]),

			'sameAs': data.links?.map((l: SameAs) => l.url?.url) || null,

			'alumniOf': data.alumni?.map((a: AlumniOf) => ({
				'@type': a.type,
				'name': a.name,
				'url': a.url?.url,
			})) || null,

			'worksFor': data.work?.map((w: WorksFor) => ({
				'@type': w.type,
				'name': w.name,
				'url': w.url?.url,
				'logo': w.logo?.filename,
				'telephone': w.telephone,
				'image': w.images?.map((i: StoryblokAsset) => i.filename) || [],
				'address': getAddress(w.address?.[0]),
			})) || null,
		};
	});

	useHead({
		script: [
			{
				type: 'application/ld+json',
				innerHTML: jsonLd,
				key: 'schema-org-person',
			},
		],
	});
};
