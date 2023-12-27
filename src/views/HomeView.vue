<script setup>
import LandingHero from '../components/LandingHero.vue';
import LatestNews from '../components/LatestNews.vue';
import HomeMatchRow from '../components/HomeMatchRow.vue';
import NextMatchesSlider from '../components/NextMatchesSlider.vue';
import { useSeoMeta } from '@unhead/vue'

useSeoMeta({
        title: "Kisvárdai Kézilabda Klub",
        description: "asd",
        ogDescription: "asd",
        ogTitle: "Kisvárdai Kézilabda Klub",
        ogImage: "https://images.prismic.io/kisvardakc/d789dd01-106a-4779-bd52-cf3ada47993a_IMG_3980_2000_3000.jpg?auto=compress,format"
      });
</script>

<template>
  <LandingHero/>
  <LatestNews/>
  <HomeMatchRow />
  <NextMatchesSlider />
</template>
