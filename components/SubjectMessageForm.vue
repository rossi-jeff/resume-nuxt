<template>
  <div id="message-form" class="my-4">
    <div>
      <label for="subject">Subject</label>
      <input
        type="text"
        name="subject"
        class="w-full"
        v-model="props.contact.Subject"
      />
    </div>
    <div>
      <label for="message">Message</label>
      <textarea
        name="message"
        class="w-full h-20"
        v-model="props.contact.Message"
      ></textarea>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ContactType } from "../types/contact.type";

const props = defineProps<{ contact: ContactType }>();
</script>

<style lang="postcss" scoped>
label {
  @apply block font-bold;
}

input,
textarea {
  @apply px-2 py-1 border-two border rounded text-two bg-three;
}
</style>
