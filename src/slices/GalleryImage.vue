<template>
    <div v-for="item in slice.items" :key="item.key">
        <PrismicImage :field="item.kep" />
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { getSliceComponentProps, PrismicImage } from "@prismicio/vue";

defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]));
</script>

<style scoped>
img {
    max-width: 100%;
}
</style>