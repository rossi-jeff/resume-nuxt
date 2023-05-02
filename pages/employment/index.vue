<template>
	<div id="education-page">{{ JSON.stringify(data) }}</div>
</template>

<script lang="ts" setup>
import { GET_JOBS_QUERY } from '../../graphql/queries/get-jobs'
const { data } = await useAsyncQuery(GET_JOBS_QUERY)
</script>
