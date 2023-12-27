<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import SponsorsMarquee from './components/SponsorsMarquee.vue'
import Footer from './components/Footer.vue';
</script>

<template>
  <NavBar/>

  <RouterView />
  <SponsorsMarquee/>
  <Footer/>
</template>

<style scoped>

</style>
