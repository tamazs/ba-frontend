<template>
    <div class="standingview-container">
        <StandingBanner />
        <UTeams/>
        <StandingsTable />
    </div>
</template>

<script setup>
import StandingBanner from '../components/StandingBanner.vue'
import UTeams from '../components/UTeams.vue';
import StandingsTable from '../components/StandingsTable.vue'
import { useSeoMeta } from '@unhead/vue'

useSeoMeta({
        title: "Tabella - Kisvárdai Kézilabda Klub",
        description: "asd",
        ogDescription: "asd",
        ogTitle: "Tabella - Kisvárdai Kézilabda Klub",
        ogImage: "https://images.prismic.io/kisvardakc/d789dd01-106a-4779-bd52-cf3ada47993a_IMG_3980_2000_3000.jpg?auto=compress,format"
      });
</script>

<style lang="scss" scoped>
</style>