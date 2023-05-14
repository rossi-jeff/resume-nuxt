<template>
	<div :id="`reference-${props.reference.Id}`" class="card">
		<h3 v-if="props.reference.Name">{{ FormatName(props.reference.Name) }}</h3>
		<div v-if="props.reference.Company">
			<strong class="mr-2">Company</strong>
			{{ props.reference.Company }}
		</div>
		<div v-if="props.reference.Title">
			<strong class="mr-2">Title</strong>
			{{ props.reference.Title }}
		</div>
		<button v-if="(props.reference.Phones && props.reference.Phones.length) ||
			(props.reference.Emails && props.reference.Emails.length)
			" @click="toggleDiv(`reference-contact-${props.reference.Id}`)">
			Contact
		</button>
		<div :id="`reference-contact-${props.reference.Id}`" style="display: none">
			<div v-if="props.reference.Phones && props.reference.Phones.length">
				<strong class="mr-2">Phone</strong>
				{{ props.reference.Phones.map((p) => p.Number).join(', ') }}
			</div>
			<div v-if="props.reference.Emails && props.reference.Emails.length">
				<strong class="mr-2">Email</strong>
				{{ props.reference.Emails.map((e) => e.Address).join(', ') }}
			</div>
		</div>
		<button v-if="props.reference.Comments && props.reference.Comments.length"
			@click="toggleDiv(`reference-comments-${props.reference.Id}`)">
			Comments
		</button>
		<div :id="`reference-comments-${props.reference.Id}`" style="display: none">
			<div v-if="props.reference.Comments && props.reference.Comments.length">
				<div v-for="comment of props.reference.Comments" :key="comment.Id">
					{{ comment.Message }}
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { Reference } from '../types/reference.type'
const props = defineProps<{ reference: Reference }>()

const toggleDiv = (id: string) => {
	const el = document.getElementById(id)
	if (el) el.style.display = el.style.display == 'none' ? 'block' : 'none'
}
</script>

<style lang="postcss" scoped>
button {
	@apply font-bold block text-three;
}

button:hover {
	@apply underline;
}
</style>
