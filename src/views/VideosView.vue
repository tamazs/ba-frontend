<template>
    <LatestVideoBanner />
    <VideoSection />
</template>

<script setup>
import LatestVideoBanner from '../components/LatestVideoBanner.vue';
import VideoSection from '../components/VideoSection.vue';
import { useSeoMeta } from '@unhead/vue'

useSeoMeta({
        title: "Videók - Kisvárdai Kézilabda Klub",
        description: "asd",
        ogDescription: "asd",
        ogTitle: "Videók - Kisvárdai Kézilabda Klub",
        ogImage: "https://images.prismic.io/kisvardakc/d789dd01-106a-4779-bd52-cf3ada47993a_IMG_3980_2000_3000.jpg?auto=compress,format"
      });
</script>

<style lang="scss" scoped>

</style>