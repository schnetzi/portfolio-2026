<template>
	<div v-editable="blok">
		<StoryblokComponent
			v-for="bodyBlok in pageData"
			:key="bodyBlok._uid"
			:blok="bodyBlok"
		/>

		<LazyTheFooter
			v-if="footerData"
			:blok="footerData"
		/>
	</div>
</template>

<script setup lang="ts">
import type { Global, GlobalReference, Page } from '~~/types/types/100825/storyblok-components';
import type { ISbStoryData } from '@storyblok/js';

type PageBodyItem = NonNullable<Page['body']>[number];
type PageComponent = Exclude<PageBodyItem, GlobalReference>;

const props = defineProps<{
	blok: Page;
}>();

const splitContent = computed(() => {
	const body = props.blok.body || [];

	const initial: [PageComponent[], ISbStoryData<Global>[]] = [[], []];

	return body.reduce((result, component) => {
		if (component.component === 'global-reference') {
			const globalRef = component as GlobalReference;

			if (globalRef.reference) {
				const resolvedRefs = globalRef.reference.filter(
					(ref): ref is ISbStoryData<Global> => typeof ref !== 'string',
				);

				result[1].push(...resolvedRefs);
			}
		}
		else {
			result[0].push(component as PageComponent);
		}
		return result;
	}, initial);
});

const pageData = computed(() => splitContent.value[0]);
const globalReferences = computed(() => splitContent.value[1]);

const footerData = computed(() => {
	return globalReferences.value.find(
		reference => reference.name === 'Footer',
	)?.content?.global?.[0];
});

const schemaData = computed(() => {
	return globalReferences.value.find(
		reference => reference.name === 'Schema',
	)?.content?.global?.[0];
});
usePageSchema(schemaData);
</script>
