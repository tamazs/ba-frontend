<template>
    <div v-if="matchImg && matchState.match" class="grid-container">
      <div class="red-box">
        <div class="title-holder">
        <h1 class="team-title">{{ matchState.match.homeTeam.name }}</h1>
        <h1 class="team-title">{{ matchState.match.awayTeam.name }}</h1>
        <p>{{ matchState.match.formattedStartDate }}</p>
        <p>{{ matchState.match.tournament.name }}</p>
      </div>
      </div>
      <div class="image-box">
        <PrismicLink :field="matchImg.data.helyszin">
            <prismic-image :field="matchImg.data.kep" />
        </PrismicLink>
      </div>
    </div>
  </template>  

<script setup>
import { useSinglePrismicDocument, PrismicImage, PrismicLink } from "@prismicio/vue";
import matches from '../modules/matches';
    import { onMounted } from 'vue';
    
    const { matchState, getNextMatch } = matches();

    onMounted(async () => {
    await getNextMatch();
  });

const { data: matchImg } = useSinglePrismicDocument("meccskep");
</script>

<style lang="scss" scoped>
.grid-container {
    padding-top: 4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr); // 2 columns, each taking up half the width

  @media (max-width: 767px) {
    grid-template-columns: 1fr; // 1 column on smaller screens
  }
}

.red-box, .image-box {
  height: 60vh; // Set both to the same height

  @media (max-width: 767px) {
    height: 60vh; // Adjust height for mobile if needed
  }
}

.red-box {
  background-color: var(--c-red);
  color: white;
  text-transform: uppercase;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0rem 2rem;

  .team-title {
    font-size: 2.5rem;
  }
}

.image-box img {
  width: 100%; // Full width of the column
  height: 100%; // Full height of the column
  object-fit: cover; // Adjusts the image size to cover the container without distortion
}
</style>