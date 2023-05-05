<template>
    <div id="contact-method-form" class="flex flex-wrap justify-between my-4">
        <div>
            <label for="email-type">Email Type</label>
            <select name="email-type">
                <option v-for="t of emailTypes" :key="t" :value="t">{{ t }}</option>
            </select>
        </div>
        <div>
            <label for="email">Email</label>
            <input type="email" name="email">
        </div>
        <div>
            <label for="phone-type">Phone Type</label>
            <select name="phone-type">
                <option v-for="t of phoneTypes" :key="t" :value="t">{{ t }}</option>
            </select>
        </div>
        <div>
            <label for="phone">Phone</label>
            <input type="tel" name="phone">
        </div>
        <div>
            <label for="preferred">Preferred</label>
            <select name="preferred">
                <option v-for="t of preferredTypes" :key="t" :value="t">{{ t }}</option>
            </select>
        </div>
    </div>
</template>

<script lang="ts" setup>
const emailTypes = ["Home", "Work"];
const phoneTypes = [...emailTypes, "Cell"];
const preferredTypes = ["Phone", "Email"];
const props = defineProps<
    {
        email: string,
        phone: string,
        preferred: string,
        emailType: string,
        phoneType: string
    }
>()
</script>

<style lang="postcss" scoped>
label {
    @apply block font-bold;
}

input,
select {
    @apply px-2 py-1 border-two border rounded text-two bg-three;
}
</style>