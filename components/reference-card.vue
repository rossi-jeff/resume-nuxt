<template>
	<div :id="`reference-${props.reference.Id}`" class="p-2">
		<h3 v-if="props.reference.Name">{{ FormatName(props.reference.Name) }}</h3>
		<div v-if="props.reference.Company">
			<strong class="mr-2">Company</strong>
			{{ props.reference.Company }}
		</div>
		<div v-if="props.reference.Title">
			<strong class="mr-2">Title</strong>
			{{ props.reference.Title }}
		</div>
		<div v-if="props.reference.Phones && props.reference.Phones.length">
			<strong class="mr-2">Phone</strong>
			{{ props.reference.Phones.map((p) => p.Number).join(', ') }}
		</div>
		<div v-if="props.reference.Emails && props.reference.Emails.length">
			<strong class="mr-2">Email</strong>
			{{ props.reference.Emails.map((e) => e.Address).join(', ') }}
		</div>
		<div v-if="props.reference.Comments && props.reference.Comments.length">
			<div v-for="comment of props.reference.Comments" :key="comment.Id">
				{{ comment.Message }}
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { Reference } from '../types/reference.type'
const props = defineProps<{ reference: Reference }>()
</script>
