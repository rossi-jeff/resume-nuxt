<template>
	<div id="footer-bar" class="flex flex-wrap justify-between mx-4 mb-4">
		<select name="pallete" @change="onSelectChanged" class="bg-four text-one">
			<option
				v-for="(name, index) of props.palleteNames"
				:key="index"
				:value="name"
			>
				{{ name }}
			</option>
		</select>
		<div class="w-20 bg-one text-four border-four border">One</div>
		<div class="w-20 bg-two text-three border-three border">Two</div>
		<div class="w-20 bg-three text-two border-two border">Three</div>
		<div class="w-20 bg-four text-one border-one border">Four</div>
	</div>
</template>

<script lang="ts" setup>
const props = defineProps<{ palleteNames: string[] }>()
const emit = defineEmits(['palleteChanged'])

const onSelectChanged = (ev: any) => {
	emit('palleteChanged', ev)
}
</script>
