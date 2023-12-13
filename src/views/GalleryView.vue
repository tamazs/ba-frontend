<template>
    <LatestGalleryBanner />
    <GallerySection />
</template>

<script setup>
import LatestGalleryBanner from '../components/LatestGalleryBanner.vue';
import GallerySection from '../components/GallerySection.vue';
import { useSeoMeta } from '@unhead/vue'

useSeoMeta({
        title: "Galéria - Kisvárdai Kézilabda Klub",
        description: "asd",
        ogDescription: "asd",
        ogTitle: "Galéria - Kisvárdai Kézilabda Klub",
        ogImage: "https://images.prismic.io/kisvardakc/d789dd01-106a-4779-bd52-cf3ada47993a_IMG_3980_2000_3000.jpg?auto=compress,format"
      });
</script>

<style lang="scss" scoped>

</style>