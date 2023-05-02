<template>
	<div id="education-page">{{ JSON.stringify(data) }}</div>
</template>

<script lang="ts" setup>
import { GET_REFERENCES_QUERY } from '../../graphql/queries/get-references'
const { data } = await useAsyncQuery(GET_REFERENCES_QUERY)
</script>
