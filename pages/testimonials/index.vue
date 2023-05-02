<template>
	<div id="education-page">{{ JSON.stringify(data) }}</div>
</template>

<script lang="ts" setup>
import { GET_COMMENTS_QUERY } from '../../graphql/queries/get-comments'
const { data } = await useAsyncQuery(GET_COMMENTS_QUERY)
</script>
