<template>
	<div id="education-page">{{ JSON.stringify(data) }}</div>
</template>

<script lang="ts" setup>
import { GET_LINKS_QUERY } from '../../graphql/queries/get-links'
const { data } = await useAsyncQuery(GET_LINKS_QUERY)
</script>
