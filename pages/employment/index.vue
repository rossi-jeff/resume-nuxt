<template>
	<div id="employment-page">
		<h2>Employment</h2>
		<job-card v-for="job of jobs" :key="job.Id" :job="job" />
	</div>
</template>

<script lang="ts" setup>
import { GET_JOBS_QUERY } from '../../graphql/queries/get-jobs'
import { Job } from '../../types/job.type'
const { data } = await useAsyncQuery<{ getJobs: Job[] }>(GET_JOBS_QUERY)
const jobs: Job[] = data.value ? data.value.getJobs : []
</script>
