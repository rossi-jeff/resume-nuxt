<template>
    <div id="address-form" class="my-4">
        <div>
            <label for="address">Address</label>
            <input type="text" name="address" class="w-full">
        </div>
        <div>
            <label for="suite">Suite</label>
            <input type="text" name="suite" class="w-full">
        </div>
        <div class="flex flex-wrap justify-between">
            <div>
                <label for="city">City</label>
                <input type="text" name="city">
            </div>
            <div>
                <label for="state">State</label>
                <input type="text" name="state">
            </div>
            <div>
                <label for="zip">Zip</label>
                <input type="text" name="zip">
            </div>
        </div>
    </div>
</template>


<style lang="postcss" scoped>
label {
    @apply block font-bold;
}

input {
    @apply px-2 py-1 border-two border rounded text-two bg-three;
}
</style>