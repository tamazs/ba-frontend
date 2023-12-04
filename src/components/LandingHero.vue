<template>
    <section class="team-section">
      <img src="@/assets/team.jpg" alt="Team" class="team-photo">
      <div class="title-holder">
        <h1 class="team-title">KISVÁRDAI KÉZILABDA CLUB</h1>
        <div class="underline"></div>
    </div>
    </section>
  </template>
  
  <script setup>
  // Composition API setup code can go here if needed.
  </script>
  
  <style>
  .team-section {
    position: relative;
    text-align: center;
    color: white;
    max-width: 100vw;
  }
  
  .team-photo {
    width: 100vw;
    height: auto;
    display: block;
    object-fit: cover;
  }
  
  .title-holder {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0rem;
    max-width: 100vw;
    height: 25%;
    margin: 0;
    padding: 3rem 2rem;
    background-color: var(--c-red);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .team-title {
    font-size: 3.5rem;
    padding-bottom: 0.5rem;
    font-weight: 700;
  }

  .underline {
    background-color: white;
    width: 95vw;
    height: 1.4rem;
  }
  </style>
  