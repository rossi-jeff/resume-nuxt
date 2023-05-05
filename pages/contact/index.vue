<template>
    <div id="contact-page">
        <h2>Contact Me</h2>
        <div class="flex flex-wrap justify-between">
            <div v-for="name, index of steps" :key="index">
                <button :id="`button-${index}`" @click="goToStep(index)">{{ name }}</button>
            </div>
        </div>

        <div id="step-0" style="display: none">
            <NameForm :name="contact.Name" />
            <div class="flex flex-wrap justify-between">
                <button @click="previousStep" :disabled="true" class="disabled">&lt; Previous</button>
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
            <!--
            <ContactMethodsForm :email="contact.Email" :email-type="contact.EmailType" :phone="contact.Phone"
                :phone-type="contact.PhoneType" :preferred="contact.Preferred" />
            // -->
            <div class="flex flex-wrap justify-between">
                <button @click="previousStep" class="previous">&lt; Previous</button>
                <button @click="nextStep" class="next">Next &gt;</button>
            </div>
        </div>
        <div id="step-3" style="display: none">
            <SubjectMessageForm :subject="contact.Subject" :message="contact.Message" />
            <div class="flex flex-wrap justify-between">
                <button @click="previousStep" class="previous">&lt; Previous</button>
                <button @click="nextStep" class="next">Next &gt;</button>
            </div>
        </div>
        <div id="step-4" style="display: none">
            <div class="my-4 mx-2">
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
            </div>
            <div class="flex flex-wrap justify-between">
                <button @click="previousStep" class="previous">&lt; Previous</button>
                <button @click="nextStep" :disabled="true" class="disabled">Next &gt;</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ContactMethodsForm } from '~/.nuxt/components'
import { ContactType } from '../../types/contact.type'

const steps: string[] = ['Name', 'Address', 'Contact Information', 'Message', 'Confirmation']
let current = 0
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
})

const goToStep = (index: number) => {
    if (current < index) return
    current = index
    showCurrentStep()
}

const nextStep = () => {
    current++
    if (current >= steps.length) current = steps.length - 1
    showCurrentStep()
}

const previousStep = () => {
    current--
    if (current < 0) current = 0
    showCurrentStep()
}

const showCurrentStep = () => {
    for (let i = 0; i < steps.length; i++) {
        const el = document.getElementById(`step-${i}`)
        const btn = document.getElementById(`button-${i}`) as HTMLButtonElement
        if (el) el.style.display = current == i ? 'block' : 'none'
        if (btn) {
            btn.classList.remove('disabled')
            btn.classList.remove('passed')
            btn.classList.remove('current')
            if (current < i) {
                btn.disabled = true
                btn.classList.add('disabled')
            } else if (current == i) {
                btn.disabled = false
                btn.classList.add('current')
            } else {
                btn.disabled = false
                btn.classList.add('passed')
            }
        }
    }
}

onMounted(() => {
    showCurrentStep()
})
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