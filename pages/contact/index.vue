<template>
  <div id="contact-page">
    <h2>Contact Me</h2>
    <div class="flex flex-wrap justify-between">
      <div v-for="(name, index) of steps" :key="index">
        <button :id="`button-${index}`" @click="goToStep(index)">
          {{ name }}
        </button>
      </div>
    </div>

    <div id="step-0" style="display: none">
      <NameForm :name="contact.Name" />
      <div class="flex flex-wrap justify-between">
        <button @click="previousStep" :disabled="true" class="disabled">
          &lt; Previous
        </button>
        <button @click="nextStep" class="next">Next &gt;</button>
      </div>
    </div>
    <div id="step-1" style="display: none">
      <AddressForm :address="contact.Address" />
      <div class="flex flex-wrap justify-between">
        <button @click="previousStep" class="previous">&lt; Previous</button>
        <button @click="nextStep" class="next">Next &gt;</button>
      </div>
    </div>
    <div id="step-2" style="display: none">
      <ContactMethodsForm :contact="contact" />
      <div class="flex flex-wrap justify-between">
        <button @click="previousStep" class="previous">&lt; Previous</button>
        <button @click="nextStep" class="next">Next &gt;</button>
      </div>
    </div>
    <div id="step-3" style="display: none">
      <SubjectMessageForm :contact="contact" />
      <div class="flex flex-wrap justify-between">
        <button @click="previousStep" class="previous">&lt; Previous</button>
        <button @click="nextStep" class="next">Next &gt;</button>
      </div>
    </div>
    <div id="step-4" style="display: none">
      <div class="my-4 mx-2">
        <h3>Confirm Message and Send</h3>
        <div>
          <strong>Name</strong>
          {{ FormatName(contact.Name) }}
        </div>
        <div>
          <strong>Address</strong>
          {{ FormatAddress(contact.Address) }}
        </div>
        <div>
          <strong>{{ contact.EmailType }} Email</strong>
          {{ contact.Email }}
        </div>
        <div>
          <strong>{{ contact.PhoneType }} Phone</strong>
          {{ contact.Phone }}
        </div>
        <div>
          <strong>Preferred</strong>
          {{ contact.Preferred }}
        </div>
        <div>
          <strong>Subject</strong>
          {{ contact.Subject }}
        </div>
        <div>
          <strong>Message</strong>
          {{ contact.Message }}
        </div>
        <button v-if="ready">Send Message</button>
      </div>
      <div class="flex flex-wrap justify-between">
        <button @click="previousStep" class="previous">&lt; Previous</button>
        <button @click="nextStep" :disabled="true" class="disabled">
          Next &gt;
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ContactType } from "../../types/contact.type";

const steps: string[] = [
  "Name",
  "Address",
  "Contact Information",
  "Message",
  "Confirmation",
];
let current = ref(0);
let ready = ref(false);
const contact: ContactType = reactive({
  Name: {
    Salutation: "",
    First: "",
    Middle: "",
    Last: "",
    Suffix: "",
  },
  Address: {
    Address: "",
    Suite: "",
    City: "",
    State: "",
    Zip: "",
  },
  Email: "",
  EmailType: "Work",
  Phone: "",
  PhoneType: "Work",
  Preferred: "Email",
  Subject: "",
  Message: "",
});

const goToStep = (index: number) => {
  if (current.value < index) return;
  current.value = index;
  showCurrentStep();
};

const nextStep = () => {
  current.value++;
  if (current.value >= steps.length) current.value = steps.length - 1;
  showCurrentStep();
};

const previousStep = () => {
  current.value--;
  if (current.value < 0) current.value = 0;
  showCurrentStep();
};

const showCurrentStep = () => {
  for (let i = 0; i < steps.length; i++) {
    const el = document.getElementById(`step-${i}`);
    const btn = document.getElementById(`button-${i}`) as HTMLButtonElement;
    if (el) el.style.display = current.value == i ? "block" : "none";
    if (btn) {
      btn.classList.remove("disabled");
      btn.classList.remove("passed");
      btn.classList.remove("current");
      if (current < i) {
        btn.disabled = true;
        btn.classList.add("disabled");
      } else if (current == i) {
        btn.disabled = false;
        btn.classList.add("current");
      } else {
        btn.disabled = false;
        btn.classList.add("passed");
      }
    }
  }
  checkReady();
};

const checkReady = () => {
  let valid = true;
  if (!FormatName(contact.Name)) valid = false;
  if (!(contact.Email || contact.Phone)) valid = false;
  if (!(contact.Subject && contact.Message)) valid = false;
  ready.value = valid;
  console.log({ valid, ready });
};

onMounted(() => {
  showCurrentStep();
});
</script>

<style lang="postcss" scoped>
button.disabled {
  @apply px-2 py-1 border-one border rounded opacity-50;
}

button.passed {
  @apply px-2 py-1 border-one border rounded opacity-80;
}

button.previous,
button.next {
  @apply px-2 py-1 border-one border rounded;
}

button.current {
  @apply px-2 py-1 bg-one text-four rounded;
}
</style>
