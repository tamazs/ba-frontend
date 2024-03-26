<template>
        <ul v-for="item in slice.items" :key="item.key">
          <li><PrismicText :field="item.klub" /></li>
        </ul>
</template>

<script setup>
import { defineProps } from 'vue';
import { getSliceComponentProps, PrismicText } from "@prismicio/vue";

defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]));
</script>

<style scoped>

.mySwiper {
    max-width: 100vw;
    height: 50vh;
    padding: 2rem 1rem;
}
.swiper-slide {
    background-color: var(--c-blue);
    display: flex;
    align-items: flex-end;
    color: white;
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 1rem;
    overflow-wrap: break-word;
}

@media (max-width: 800px) {
  .swiper-slide {
    padding: 0rem;
}
}
</style>