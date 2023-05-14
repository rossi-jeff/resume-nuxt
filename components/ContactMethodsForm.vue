<template>
  <div id="contact-method-form" class="flex flex-wrap justify-between my-4">
    <div>
      <label for="email-type">Email Type</label>
      <select name="email-type" v-model="props.contact.EmailType">
        <option v-for="t of emailTypes" :key="t" :value="t">{{ t }}</option>
      </select>
    </div>
    <div>
      <label for="email">Email</label>
      <input type="email" name="email" v-model="props.contact.Email" />
    </div>
    <div>
      <label for="phone-type">Phone Type</label>
      <select name="phone-type" v-model="props.contact.PhoneType">
        <option v-for="t of phoneTypes" :key="t" :value="t">{{ t }}</option>
      </select>
    </div>
    <div>
      <label for="phone">Phone</label>
      <input type="tel" name="phone" v-model="props.contact.Phone" />
    </div>
    <div>
      <label for="preferred">Preferred</label>
      <select name="preferred" v-model="props.contact.Preferred">
        <option v-for="t of preferredTypes" :key="t" :value="t">{{ t }}</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ContactType } from "../types/contact.type";

const emailTypes = ["Home", "Work"];
const phoneTypes = [...emailTypes, "Cell"];
const preferredTypes = ["Phone", "Email"];
const props = defineProps<{ contact: ContactType }>();
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
