<template>
    <section class="team-section">
      <img src="@/assets/team.jpg" alt="Team" class="team-photo">
      <div class="title-holder">
        <h1 class="team-title">KISVÁRDAI KÉZILABDA CLUB</h1>
        <div class="underline"></div>
        <div class="sponsors">
            <img :src="hLogo" alt="Hummel logo">
            <img :src="tLogo" alt="Tippmix logo">
        </div>
    </div>
    </section>
  </template>
  
  <script setup>
    import hLogo from '@/assets/hummel.png';
    import tLogo from '@/assets/tippmix.png';
  </script>
  
  <style scoped>
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
    height: auto;
    margin: 0;
    padding: 1rem 2rem;
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

  .sponsors {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 95vw;
    padding-top: 3rem;
    gap: 20px;
  }

  .sponsors img {
    height: 80px;
    width: auto;
  }

  @media (max-width: 767px) {
    .team-photo {
    width: 100vw;
    height: 90vh;
    display: block;
    object-fit: cover;
  }
  
  .title-holder {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0rem;
    max-width: 100vw;
    height: auto;
    margin: 0;
    padding: 1rem 2rem;
    background-color: var(--c-red);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .team-title {
    font-size: 2rem;
    padding-bottom: 0.5rem;
    font-weight: 700;
    text-align: left;
  }
    .underline {
    width: 85vw;
    height: 1rem;
  }

  .sponsors {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 90vw;
    padding-top: 2rem;
    gap: 10px;
    overflow: hidden;
  }

  .sponsors img {
    height: 50px;
    width: auto;
  }
  }
  </style>
  