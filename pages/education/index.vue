<template>
	<div id="education-page">
		<h2>Education</h2>
		<school-card v-for="school of schools" :key="school.Id" :school="school" />
	</div>
</template>

<script lang="ts" setup>
import { GET_SCHOOLS_QUERY } from '../../graphql/queries/get-schools'
import { School } from '../../types/school.type'
const { data } = await useAsyncQuery<{ getSchools: School[] }>(
	GET_SCHOOLS_QUERY
)
const schools: School[] = data.value ? data.value.getSchools : []
</script>
