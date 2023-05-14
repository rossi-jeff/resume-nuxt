<template>
	<div :id="`school-${props.school.Id}`" class="card">
		<h3>{{ props.school.Name }}</h3>
		<div v-if="props.school.Address">
			{{ FormatAddress(props.school.Address) }}
		</div>
		<div v-if="props.school.From && props.school.To" class="flex flex-wrap">
			<strong class="w-16">From</strong>
			<div class="w-32">
				{{ props.school.From.Month }} {{ props.school.From.Year }}
			</div>
			<strong class="w-12">To</strong>
			<div class="w-32">
				{{ props.school.To.Month }} {{ props.school.To.Year }}
			</div>
		</div>
		<div v-if="props.school.Degree">
			<strong class="mr-2">Degree</strong>
			{{ props.school.Degree }}
		</div>
		<div v-if="props.school.Program">
			<strong class="mr-2">Program</strong>
			{{ props.school.Program }}
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { School } from '../types/school.type'
import { FormatAddress } from '../utils/format-address'
const props = defineProps<{ school: School }>()
</script>
