<template>
    <ul>
        <li v-for="(link, index) of links">
            <NuxtLink :to="link.to">
                {{ link.text }}
            </NuxtLink>
        </li>
    </ul>
</template>

<script lang="ts" setup>
type LinkType = {
    to: string
    text: string
}
const links: LinkType[] = [
    { to: '/', text: 'Home' },
    { to: '/education', text: 'Education' },
    { to: '/employment', text: 'Employment' },
    { to: '/contact', text: 'Contact' },
    { to: '/references', text: 'References' },
    { to: '/testimonials', text: 'Testimonials' },
    { to: '/resume', text: 'Resume' },
    { to: '/links', text: 'Links' },
]
</script>