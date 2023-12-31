<template>
  <nav class="navbar">
    <div class="burger-menu" @click="toggleMenu">
      <i class="fas fa-bars"></i> <!-- Burger Icon -->
    </div>
    <div class="navbar-nav" :class="{ 'active': isMenuOpen }">
      <div class="close-menu" @click="toggleMenu">
        <i class="fas fa-times"></i> <!-- Close Icon -->
      </div>
      <RouterLink to="/blogs" @click.native="toggleMenu">HÍREK</RouterLink>
      <RouterLink to="/results" @click.native="toggleMenu">EREDMÉNYEK</RouterLink>
      <RouterLink to="/schedule" @click.native="toggleMenu">MECCSEK</RouterLink>
      <RouterLink to="/standing" @click.native="toggleMenu">TABELLA</RouterLink>
      <RouterLink to="/teams" @click.native="toggleMenu">KLUB</RouterLink>
      <RouterLink to="/images" @click.native="toggleMenu">KÉPEK</RouterLink>
      <RouterLink to="/videos" @click.native="toggleMenu">VIDEÓK</RouterLink>
    </div>
    <div class="logo-container">
      <RouterLink to="/">
        <img src="/logo.png" alt="Logo" class="navbar-logo">
      </RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { gsap } from 'gsap';
import { RouterLink } from 'vue-router';

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    gsap.to('.navbar-nav', { x: '0%', duration: 0.5 });
  } else {
    gsap.to('.navbar-nav', { x: '-100%', duration: 0.5 });
  }
}
</script>


<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding: 0.5rem 2rem;
  z-index: 99;
  background: rgba(255, 255, 255, 0.9);
}

.burger-menu {
  display: flex;
  cursor: pointer;
}

.burger-menu .fas {
  font-size: 24px;
  color: #333;
}

.navbar-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 40vw;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  justify-content: center;
  background: var(--c-blue);
  transform: translateX(-100%);
  transition: transform 0.5s ease;
  display: flex;

  @media (max-width: 1200px) {
    width: 100vw; /* Full width on mobile */
  }
}

.navbar-nav.active {
  transform: translateX(0);
}

.navbar-nav a {
  color: white;
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;

  @media (max-width: 1200px) {
    font-size: 2rem;
  }
}

.navbar-nav a:hover {
  transform: scale(1.1);
  transition: all 1s;
}

.close-menu {
  display: flex;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}

.close-menu .fas {
  font-size: 24px;
  color: #fff;
}

.logo-container {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
}

.navbar-logo {
  height: 80%;
}
</style>
