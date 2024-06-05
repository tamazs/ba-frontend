<template>
    <TeamsBanner />
    <MainTeamsSection />
    <UTeams />
</template>

<script setup>
import TeamsBanner from '../components/TeamsBanner.vue';
import MainTeamsSection from '../components/MainTeamsSection.vue';
import UTeams from '../components/UTeams.vue';
import { useSeoMeta } from '@unhead/vue'

useSeoMeta({
        title: "Csapatok - Kisvárdai Kézilabda Klub",
        description: "Csapatok - Kisvárdai Kézilabda Klub",
        ogDescription: "Csapatok - Kisvárdai Kézilabda Klub",
        ogTitle: "Csapatok - Kisvárdai Kézilabda Klub",
        ogImage: "https://images.prismic.io/kisvardakc/d789dd01-106a-4779-bd52-cf3ada47993a_IMG_3980_2000_3000.jpg?auto=compress,format"
      });

</script>

<style lang="scss" scoped>

</style>