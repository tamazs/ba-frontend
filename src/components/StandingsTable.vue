<template>
    <div class="standings-container">
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Csapat</th>
            <th>Mérkőzések</th>
            <th>Győzelem</th>
            <th>Döntetlen</th>
            <th>Vereség</th>
            <th>Lőtt gólok</th>
            <th>Kapott gólok</th>
            <th>Gólkülönbség</th>
            <th>Pontszám</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="team in standingState.standing" :key="team.team.id" :class="{ 'highlight-team': team.team.id === 262312 }">
            <td>{{ team.position }}</td>
            <td>
                <img :src="team.team.image" :alt="`Logo of ${team.team.name}`" />
            </td>
            <td class="team-name">{{ team.team.name }}</td>
            <td>{{ team.matches }}</td>
            <td>{{ team.wins }}</td>
            <td>{{ team.draws }}</td>
            <td>{{ team.losses }}</td>
            <td>{{ team.scoresFor }}</td>
            <td>{{ team.scoresAgainst }}</td>
            <td>{{ team.scoresFor - team.scoresAgainst }}</td>
            <td>{{ team.points }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import standing from '../modules/standing';
  import { onMounted } from 'vue';
  
  const { standingState, getStandings } = standing();
  
  onMounted(async () => {
    await getStandings();
  });
  </script>
  
  <style lang="scss" scoped>
  .standings-container {
    overflow-x: auto; // Enables scrolling on small screens
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  table {
    width: 70vw;
    border-collapse: collapse;

    .highlight-team {
        background-color: var(--c-red);
        color: white;
    }
  
    th, td {
      padding: 2rem 1rem;
      text-align: center;
      border-bottom: 1px solid black;
    }

    td img {
        height: 2rem;
        width: auto;
    }

    td .team-name {
        text-align: left !important;
    }
  }
  </style>
  