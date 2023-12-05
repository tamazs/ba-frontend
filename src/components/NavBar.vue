<template>
    <nav class="navbar">
      <div class="navbar-nav">
        <a href="#">HÍREK</a>
        <a href="#">PROGRAM</a>
        <a href="#">TABELLA</a>
        <a href="#">KLUB</a>
        <a href="#">KÉPEK</a>
        <a href="#">VIDEÓK</a>
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
  
  <style>
  .navbar {
    position: fixed;
    top: 0;
    background: rgb(255, 255, 255, 0.9);
    display: flex;
    justify-content: space-between;
    align-items: stretch; /* Stretch the children to match the height of the navbar */
    height: 10vh;
    width: 100vw;
    padding: 0.5rem 2rem;
    z-index: 99;
    overflow: hidden;
  }
  
  .navbar-nav, .navbar-empty {
    flex: 1;
    display: flex;
    align-items: center; /* Align links vertically */
  }
  
  .navbar-nav {
    justify-content: flex-start;
    gap: 30px;
  }
  
  .navbar-nav a {
    text-decoration: none;
    color: #000;
  }

  .navbar-nav a:hover {
    color: var(--c-red);
  }
  
  .logo-container {
    flex: 0 0 100px; /* Do not grow or shrink, set basis to the logo's width */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .navbar-logo {
    max-width: 100%;
    max-height: 100%;
  }
  </style>
  