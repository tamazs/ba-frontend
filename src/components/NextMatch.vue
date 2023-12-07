<template>
    <section class="team-section" v-if="matchState.match.homeTeam && matchState.match.awayTeam">
      <div class="title-holder">
        <h1 class="team-title">{{ matchState.match.homeTeam.name }}</h1>
        <div class="underline"></div>
        <h1 class="team-title">{{ matchState.match.awayTeam.name }}</h1>
        <p>{{ matchState.match.formattedStartDate }}</p>
        <p>MAGYAR BAJNOKSAG</p>
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
    import matches from '../modules/matches';
    import { onMounted } from 'vue';
    
    const { matchState, getNextMatch } = matches();

    onMounted(async () => {
    await getNextMatch();
  });
  </script>
  
  <style>
  .team-section {
    position: relative;
    text-align: center;
    color: white;
    width: 100vw;
    height: 80vh;
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
  </style>
