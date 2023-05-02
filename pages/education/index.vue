<template>
	<div id="education-page">{{ JSON.stringify(data) }}</div>
</template>

<script lang="ts" setup>
import { GET_SCHOOLS_QUERY } from '../../graphql/queries/get-schools'
const { data } = await useAsyncQuery(GET_SCHOOLS_QUERY)
</script>
