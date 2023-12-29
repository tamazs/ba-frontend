<template>
    <section class="team-section">
      <div class="title-holder">
        <h1 class="team-title">Női csapat</h1>
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
    width: 100vw;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 5rem;
    background-color: var(--c-red);
  }
  
  .title-holder {
    width: 100%; /* Adjusted width as per your design preference */
    height: 100%;
    margin: 0;
    padding: 1rem 2rem;
    background-color: var(--c-red);
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Center align the items */
    justify-content: center;
  }

  .team-title {
    font-size: 3.5rem;
    padding-bottom: 0.5rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .underline {
    background-color: white;
    width: 95vw; /* Adjusted width as per your design preference */
    height: 1.4rem;
    margin-top: 0.5rem; /* Added margin for visual separation */
  }

  .sponsors {
    display: flex;
    justify-content: flex-end; /* Center align the sponsor logos */
    align-items: center;
    width: 95vw; /* Adjusted width as per your design preference */
    padding-top: 1.5rem; /* Adjusted padding */
    gap: 20px;
  }

  .sponsors img {
    height: 80px;
    width: auto;
  }

  @media (max-width: 800px) {
    .team-section {
    position: relative;
    text-align: center;
    color: white;
    max-width: 100vw !important;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 5rem;
    background-color: var(--c-red);
    overflow-x: hidden;
  }
    .title-holder {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0rem;
    height: 100%;
    margin: 0;
    padding: 1rem 2rem;
    background-color: var(--c-red);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
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
