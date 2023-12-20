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
      <a href="#" @click="toggleMenu">PROGRAM</a>
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
    <div class="navbar-empty"></div>
  </nav>
</template>

<script setup>
import { ref, watch } from 'vue';
import { gsap } from 'gsap';
import { RouterLink } from 'vue-router';

const isMenuOpen = ref(false);

function toggleMenu() {
  // Check if the screen width is less than or equal to 800px
  if (window.innerWidth <= 1200) {
    isMenuOpen.value = !isMenuOpen.value;
    document.body.style.overflow = isMenuOpen.value ? 'hidden' : '';
    if (isMenuOpen.value) {
      gsap.to('.navbar-nav', { x: 0, duration: 0.5 });
    } else {
      gsap.to('.navbar-nav', { x: '-100%', duration: 0.5 });
    }
  }
}

watch(isMenuOpen, (newValue) => {
  if (window.innerWidth <= 1200) {
    document.body.style.overflow = newValue ? 'hidden' : '';
  }
});
</script>


<style scoped>
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

.navbar-nav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
}

.navbar-nav a {
  color: black;
  text-decoration: none;
}

.navbar-nav a:hover {
  color: var(--c-red);
}

.navbar-nav.active {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--c-blue);
  transform: translateX(-100%);
  overflow-y: auto;
  overflow-x: hidden;
}

.burger-menu {
  display: none;
  cursor: pointer;
}

.burger-menu .fas {
  font-size: 24px;
  color: #333;
}

.close-menu {
  display: none;
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

@media (max-width: 1200px) {
  .burger-menu {
    display: flex;
  }

  .navbar-nav {
    display: none;
  }

  .navbar-nav.active {
    display: flex;
  }

  .navbar-nav a {
    color: white;
    font-size: 2rem;
  }

  .close-menu {
    display: flex;
  }
}
</style>
