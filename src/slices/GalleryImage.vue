<template>
    <PrismicImage :field="slice.primary.kep" />
</template>

<script setup>
import { defineProps } from 'vue'
import { getSliceComponentProps, PrismicImage } from "@prismicio/vue";

defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]));
console.log(slice);
</script>

<style scoped>
img {
    max-width: 100%;
}
</style>