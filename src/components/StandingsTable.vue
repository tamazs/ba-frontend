<template>
    <div class="standings-container">
      <table>
        <thead>
          <tr>
            <th v-if="windowWidth > 1130"></th>
            <th v-if="windowWidth > 1130"></th>
            <th>Csapat</th>
            <th>Mérkőzések</th>
            <th v-if="windowWidth > 1130">Győzelem</th>
            <th v-if="windowWidth > 1130">Döntetlen</th>
            <th v-if="windowWidth > 1130">Vereség</th>
            <th v-if="windowWidth < 1130">Gólok</th>
            <th v-if="windowWidth > 1130">Lőtt gólok</th>
            <th v-if="windowWidth > 1130">Kapott gólok</th>
            <th v-if="windowWidth > 1130">Gólkülönbség</th>
            <th>Pontszám</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="team in standingState.standing" :key="team.team.id" id="team-hover" :class="{ 'highlight-team': team.team.id === 262312 }">
            <td v-if="windowWidth > 1130">{{ team.position }}</td>
            <td v-if="windowWidth > 1130">
                <img :src="team.team.image" :alt="`Logo of ${team.team.name}`" class="badges" />
            </td>
            <td class="team-name">{{ team.team.name }}</td>
            <td>{{ team.matches }}</td>
            <td v-if="windowWidth > 1130">{{ team.wins }}</td>
            <td v-if="windowWidth > 1130">{{ team.draws }}</td>
            <td v-if="windowWidth > 1130">{{ team.losses }}</td>
            <td v-if="windowWidth < 1130">{{ team.scoresFor }}:{{ team.scoresAgainst }}</td>
            <td v-if="windowWidth > 1130">{{ team.scoresFor }}</td>
            <td v-if="windowWidth > 1130">{{ team.scoresAgainst }}</td>
            <td v-if="windowWidth > 1130">{{ team.scoresFor - team.scoresAgainst }}</td>
            <td>{{ team.points }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import standing from '../modules/standing';

  const windowWidth = ref(window.innerWidth);

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};
  
  const { standingState, getStandings } = standing();
  
  onMounted(async () => {
    await getStandings();
    window.addEventListener('resize', handleResize);
  });

  onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
  </script>
  
  <style lang="scss" scoped>
  .standings-container {
    overflow-x: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
  }

  #team-hover:hover {
    background-color: rgba(222, 4, 15, 0.3)
  }
  
  table {
    width: 70vw;
    border-collapse: collapse;
    height: 100%;

  }

  .badges {
    height: 3rem;
  }

  @media (max-width: 767px) {
      table {
        width: 100vw;
      }
  }

    .highlight-team {
        border: 4px solid var(--c-red);
    }
  
    th, td {
      padding: 2rem 1rem;
      text-align: center;
      border-bottom: 1px solid black;

    td img {
        height: 2rem;
        width: auto;
    }

    td .team-name {
        text-align: left !important;
    }
  }

  @media (max-width: 767px) {
        th, td {
      padding: 2rem 0rem !important;
  }
    }
  </style>
  