<template>
	<div :id="`job-${props.job.Id}`">{{ JSON.stringify(props) }}</div>
</template>

<script lang="ts" setup>
import type { Job } from '../types/job.type'
const props = defineProps<{ job: Job }>()
</script>
