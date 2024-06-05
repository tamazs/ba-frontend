<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import SponsorsSlider from './components/SponsorsSlider.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <NavBar/>

  <RouterView />
  <SponsorsSlider/>
  <Footer/>
</template>

<style scoped>

</style>
