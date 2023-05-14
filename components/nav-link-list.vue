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
import { navigationLinks } from '../utils/navigation-links'
const links = navigationLinks
</script>