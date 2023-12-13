<template>
    <LatestPostBanner />
    <BlogSection />
</template>

<script setup>
import LatestPostBanner from '../components/LatestPostBanner.vue';
import BlogSection from '../components/BlogSection.vue';
import { useSeoMeta } from '@unhead/vue'

useSeoMeta({
        title: "Hírek - Kisvárdai Kézilabda Klub",
        description: "asd",
        ogDescription: "asd",
        ogTitle: "Hírek - Kisvárdai Kézilabda Klub",
        ogImage: "https://images.prismic.io/kisvardakc/d789dd01-106a-4779-bd52-cf3ada47993a_IMG_3980_2000_3000.jpg?auto=compress,format"
      });
</script>

<style lang="scss" scoped>

</style>