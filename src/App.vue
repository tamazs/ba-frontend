<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import NavBarD from './components/NavBarD.vue'
import SponsorsSlider from './components/SponsorsSlider.vue';
import Footer from './components/Footer.vue';
import { onMounted, onUnmounted, ref } from 'vue';

const isDesktop = ref(window.innerWidth >= 1000);

const updateScreenSize = () => {
  isDesktop.value = window.innerWidth >= 1000;
};

onMounted(() => {
  window.addEventListener('resize', updateScreenSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize);
});
</script>

<template>
  <component :is="isDesktop ? NavBarD : NavBar" />

  <RouterView />
  <SponsorsSlider/>
  <Footer/>
</template>

<style scoped>

</style>
