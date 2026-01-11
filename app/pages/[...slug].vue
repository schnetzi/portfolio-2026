<template>
	<StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup lang="ts">
const route = useRoute();

const slug = route.path === '/' ? 'index' : route.path.replace(/\/$/, '');

const isDev = import.meta.dev || route.query._storyblok;
const version = isDev ? 'draft' : 'published';

const { story } = await useAsyncStoryblok(
	slug,
	{
		api: {
			version: version,
			resolve_links: 'url',
			resolve_relations: 'global-reference.reference',
		},
	},
);

if (!story.value) {
	throw createError({
		statusCode: 404,
		statusMessage: 'Page not found',
		fatal: true,
	});
}

const openGraphBlok = computed(() => {
	return story.value?.content?.openGraph?.[0];
});

useOpenGraph(openGraphBlok);
</script>
