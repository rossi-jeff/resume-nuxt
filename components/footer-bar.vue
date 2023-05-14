<template>
	<div id="footer-bar" class="md:flex md:flex-wrap md:justify-between mx-4 mb-4">
		<div>
			<strong>Jeff Rossi</strong>
		</div>
		<div>1506 Tuscaloosa Ave, Holly Hill Florida 32117</div>
		<div>
			<a href="mailto:inquiries@jeff-rossi.com">inquiries@jeff-rossi.com</a>
		</div>
		<div>
			<label for="pallete" class="mr-2">Pallete</label>
			<select name="pallete" @change="onSelectChanged" class="bg-four text-one">
				<option v-for="(name, index) of props.paletteNames" :key="index" :value="name">
					{{ name }}
				</option>
			</select>
		</div>
	</div>
</template>

<script lang="ts" setup>
const props = defineProps<{ paletteNames: string[] }>()
const emit = defineEmits(['paletteChanged'])

const onSelectChanged = (ev: any) => {
	emit('paletteChanged', ev)
}
</script>
