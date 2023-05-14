<template>
    <div id="name-form" class="flex flex-wrap justify-between my-4">
        <div>
            <label for="salutation">Salutation</label>
            <select name="salutation" v-model="props.name.Salutation">
                <option v-for="s of salutations" :key="s" :value="s">{{ s }}</option>
            </select>
        </div>
        <div>
            <label for="first">First</label>
            <input type="text" name="first" v-model="props.name.First" />
        </div>
        <div>
            <label for="middle">Middle</label>
            <input type="text" name="middle" v-model="props.name.Middle" />
        </div>
        <div>
            <label for="last">Last</label>
            <input type="text" name="last" v-model="props.name.Last" />
        </div>
        <div>
            <label for="suffix">Suffix</label>
            <input type="text" name="sufix" class="w-20" v-model="props.name.Suffix" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { FullName } from '../types/full-name.type';

const salutations = ["Mr", "Mrs", "Ms", "Dr", "Miss"];
const props = defineProps<{ name: FullName }>()
</script>

<style lang="postcss" scoped>
label {
    @apply block font-bold;
}

input,
select {
    @apply px-2 py-1 border-two border rounded text-two bg-three font-bold;
}
</style>