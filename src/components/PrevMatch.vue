<template>
    <section class="team-section" v-if="matchState.match.homeTeam && matchState.match.awayTeam">
      <div class="title-holder">
        <div class="homeContainer">
          <h1 class="team-title">{{ matchState.match.homeTeam.name }}</h1>
          <h1 class="home-score">{{ matchState.match.homeScore.normaltime }}</h1>
        </div>
        <div class="underline"></div>
        <div class="awayContainer">
          <h1 class="team-title">{{ matchState.match.awayTeam.name }}</h1>
          <h1 class="away-score">{{ matchState.match.awayScore.normaltime }}</h1>
        </div>
        <p>{{ matchState.match.formattedStartDate }}</p>
        <p class="seasonName">{{ matchState.match.season.name }}</p>
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
    
    const { matchState, getPrevMatch } = matches();

    onMounted(async () => {
    await getPrevMatch();
  });
  </script>
  
  <style scoped>
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

  .homeContainer, .awayContainer {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .team-title, .home-score, .away-score {
    font-size: 3.5rem;
    padding-bottom: 0.5rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .seasonName {
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

  @media (max-width: 767px) {
    .sponsors img {
    height: 50px;
  }

  .sponsors {
    gap: 10px;
  }

  .title-holder {
    width: 100%; /* Adjusted width as per your design preference */
    height: 100%;
    margin: 0;
    padding: 1rem 0rem;
    background-color: var(--c-red);
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Center align the items */
    justify-content: center;
  }

  .underline {
    background-color: white;
    width: 100vw; /* Adjusted width as per your design preference */
    height: 1.4rem;
    margin-top: 0.5rem; /* Added margin for visual separation */
  }
  }
  </style>
