<template>
	<div :id="`school-${props.school.Id}`" class="p-2">
		<h3>{{ props.school.Name }}</h3>
		<div v-if="props.school.Address">
			{{ FormatAddress(props.school.Address) }}
		</div>
		<div
			v-if="props.school.From && props.school.To"
			class="flex flex-wrap justify-between"
		>
			<strong>From</strong>
			<div>{{ props.school.From.Month }} {{ props.school.From.Year }}</div>
			<strong>To</strong>
			<div>{{ props.school.To.Month }} {{ props.school.To.Year }}</div>
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
