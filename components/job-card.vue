<template>
	<div :id="`job-${props.job.Id}`" class="card">
		<h3>{{ props.job.Company }}</h3>
		<div v-if="props.job.Address">{{ FormatAddress(props.job.Address) }}</div>
		<div v-if="props.job.From && props.job.To" class="flex flex-wrap">
			<strong class="w-16">From</strong>
			<div class="w-32">
				{{ props.job.From.Month }} {{ props.job.From.Year }}
			</div>
			<strong class="w-12">To</strong>
			<div class="w-32">{{ props.job.To.Month }} {{ props.job.To.Year }}</div>
		</div>
		<div v-if="props.job.Title">
			<strong class="mr-2">Title</strong>
			{{ props.job.Title }}
		</div>
		<div v-if="props.job.Duties">
			<strong class="mr-2">Duties</strong>
			{{ props.job.Duties }}
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { Job } from '../types/job.type'
import { FormatAddress } from '../utils/format-address'
const props = defineProps<{ job: Job }>()
</script>
