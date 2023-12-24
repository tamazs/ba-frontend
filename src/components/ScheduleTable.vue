<template>
    <div class="table-container">
    <div class="matches-table">
      <table>
        <tbody>
          <tr v-for="match in matchState.matches" :key="match.id">
            <td>{{ match.homeTeam.name }}</td>
            <td class="match-date">
              <div class="season-name">{{ match.season.name }}</div>
              <div class="formatted-date">{{ match.formattedStartDate }}</div>
            </td>
            <td>{{ match.awayTeam.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</div>
  </template>
  

<script setup>
import { onMounted } from 'vue';
import matches from '../modules/matches';
    
    const { matchState, getNextMatches } = matches();

    onMounted(async () => {
    await getNextMatches();
  });
</script>

<style lang="scss" scoped>
.table-container {
  padding: 2rem; // Padding around the entire table
}

.matches-table {
  table {
    width: 100%;
    border-collapse: collapse; // Merge cell borders
    margin: auto; // Center the table and maintain the padding from the container

    tr {
      border-bottom: 1px solid black; // Bottom border for each row

      &:last-child {
        border-bottom: none; // Remove bottom border for the last row
      }
    }

    td {
      padding: 0.5rem; // Padding for each cell
      text-align: center; // Center text in each cell

      &:first-child {
        text-align: left;
      }

      &:last-child {
        text-align: right;
      }
    }

    .match-date {
      width: 60%; // Making the middle column wider

      .season-name {
        margin-bottom: 0.5rem; // Space between season name and date
        color: #666; // Color for the season name
      }

      .formatted-date {
        font-weight: bold; // Bold for the formatted date
      }
    }
  }
}
</style>


