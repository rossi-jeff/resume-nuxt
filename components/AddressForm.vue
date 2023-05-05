<template>
    <div id="address-form" class="my-4">
        <div>(optional)</div>
        <div>
            <label for="address">Address</label>
            <input type="text" name="address" class="w-full" v-model="props.address.Address">
        </div>
        <div>
            <label for="suite">Suite</label>
            <input type="text" name="suite" class="w-full" v-model="props.address.Suite">
        </div>
        <div class="flex flex-wrap justify-between">
            <div>
                <label for="city">City</label>
                <input type="text" name="city" v-model="props.address.City">
            </div>
            <div>
                <label for="state">State</label>
                <input type="text" name="state" v-model="props.address.State">
            </div>
            <div>
                <label for="zip">Zip</label>
                <input type="text" name="zip" v-model="props.address.Zip">
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
type Address = {
    Address?: string;
    Suite?: string;
    City?: string;
    State?: string;
    Zip?: string;
};

const props = defineProps<{ address: Address }>() 
</script>


<style lang="postcss" scoped>
label {
    @apply block font-bold;
}

input {
    @apply px-2 py-1 border-two border rounded text-two bg-three;
}
</style>