<template>
    <nav class="navbar">
      <div class="navbar-nav">
        <RouterLink to="/blogs">HÍREK</RouterLink>
        <a href="#">PROGRAM</a>
        <RouterLink to="/standing">TABELLA</RouterLink>
        <RouterLink to="/teams">KLUB</RouterLink>
        <RouterLink to="/images">KÉPEK</RouterLink>
        <RouterLink to="/videos">VIDEÓK</RouterLink>
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
import { RouterLink } from 'vue-router';

  // Your script setup code will go here if needed.
  </script>
  
  <style scoped>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center; /* Align items vertically */
    height: 10vh;
    padding: 0.5rem 2rem;
    z-index: 99;
    background: rgb(255, 255, 255, 0.9); /* Add your desired background color/opacity */
  }
  
  .navbar-nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
  }
  
  .navbar-empty {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  
  .logo-container {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100; /* Ensure the logo stays above other elements */
  }
  
  .navbar-logo {
    height: 80%; /* Adjust the size of the logo */
  }
  
  .navbar-nav a,
  .navbar-empty a {
    text-decoration: none;
    color: #000;
    transition: color 0.3s ease;
  }
  
  .navbar-nav a:hover {
    color: var(--c-red);
  }
  </style>
  