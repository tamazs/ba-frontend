<template>
    <nav class="navbar">
      <div class="nav-section left-nav-container">
        <RouterLink to="/blogs" class="nav-link" active-class="active-link">HÍREK</RouterLink>
        <RouterLink to="/results" class="nav-link" active-class="active-link">EREDMÉNYEK</RouterLink>
        <RouterLink to="/schedule" class="nav-link" active-class="active-link">MECCSEK</RouterLink>
        <RouterLink to="/standing" class="nav-link" active-class="active-link">TABELLA</RouterLink>
      </div>
      <div class="nav-section logo-container">
        <RouterLink to="/">
          <img src="/logo.png" alt="Logo" class="navbar-logo">
        </RouterLink>
      </div>
      <div class="nav-section right-nav-container">
        <RouterLink to="/teams" class="nav-link" active-class="active-link">CSAPATOK</RouterLink>
        <RouterLink to="/images" class="nav-link" active-class="active-link">KÉPEK</RouterLink>
        <RouterLink to="/videos" class="nav-link" active-class="active-link">VIDEÓK</RouterLink>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router';
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
    background: rgba(255, 255, 255, 0.8);
    transition: all 2s;
  }

  .navbar:hover {
    background: rgba(255, 255, 255, 1);
    transition: all 1s;
  }

  .navbar:hover .navbar-logo{
    margin-top: 2.5rem;
    transform: scale(1.2);
    transition: all 1s;
    transform-origin: center;
  }
  
  .nav-section {
    display: flex;
    flex: 1;
    justify-content: center;
  }
  
  .nav-link {
    margin: 0 1rem;
    text-decoration: none;
    color: black;
  }
  
  .nav-link:hover {
    color: var(--c-red);
  }
  
  .active-link {
    color: var(--c-red);
  }
  
  .navbar-logo {
    height: 100%;
    margin-top: 0;
    transition: all 2s;
    transform-origin: center;
  }
  </style>
  