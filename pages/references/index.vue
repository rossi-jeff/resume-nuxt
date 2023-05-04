<template>
	<div id="references-page">
		<h2 class="ml-2">References</h2>
		<reference-card
			v-for="reference of references"
			:key="reference.Id"
			:reference="reference"
		/>
	</div>
</template>

<script lang="ts" setup>
import { GET_REFERENCES_QUERY } from '../../graphql/queries/get-references'
import { Reference } from '../../types/reference.type'
const { data } = await useAsyncQuery<{ getReferences: Reference[] }>(
	GET_REFERENCES_QUERY
)
const references: Reference[] = data.value ? data.value.getReferences : []
</script>
