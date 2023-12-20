<template>
    <TeamBanner />
    <kSection />
    <aSection />
    <iSection />
    <szSection />
    <bSection />
  </template>
  
  <script setup>
  import TeamBanner from '../components/TeamBanner.vue'
  import kSection from '../components/kSection.vue'
  import aSection from '../components/aSection.vue'
  import iSection from '../components/iSection.vue'
  import szSection from '../components/szSection.vue'
  import bSection from '../components/bSection.vue'
  import { watchEffect } from 'vue';
  import { useSeoMeta } from '@unhead/vue'
  import { useAllPrismicDocumentsByType } from '@prismicio/vue';

  const {data: players } = useAllPrismicDocumentsByType("jatekos")

  watchEffect(() => {
    if (players.value) {
      useSeoMeta({
        title: "Női csapat - Kisvárdai Kézilabda Klub",
        description: "Női csapat - Kisvárdai Kézilabda Klub",
        ogDescription: "Női csapat - Kisvárdai Kézilabda Klub",
        ogTitle: "Női csapat - Kisvárdai Kézilabda Klub",
        ogImage: "https://images.prismic.io/kisvardakc/d789dd01-106a-4779-bd52-cf3ada47993a_IMG_3980_2000_3000.jpg?auto=compress,format"
      });
    }
});
  </script>
  
  <style lang="scss" scoped>
  </style>