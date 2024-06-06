<template>
  <div v-if="matchState.matches.length === 0">
    
  </div>
  <div v-else>
    <h1 class="slider-title">KÖVETKEZŐ MECCSEK</h1>
    <swiper :slidesPerView="slidesPerView" :spaceBetween="10" :navigation="false" :scrollbar="true" :modules="modules"
      class="mySwiper">
        <swiper-slide v-for="match in matchState.matches" :key="match.id" class="swiper-slider">
            <div class="slider-top">
                <p>{{ match.formattedStartDate }}</p>
                <p>{{ match.season.name }}</p>
            </div>
            <div class="slider-bottom">
                <p class="shortDate">{{ match.shortFormattedDate }}</p>
                <p class="team-name">{{ match.homeTeam.name }}</p>
                <p>-</p>
                <p class="team-name">{{ match.awayTeam.name }}</p>
            </div>
        </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import { Navigation, Scrollbar } from 'swiper/modules';
  import matches from '../modules/matches';
    
    const { matchState, getNextMatches } = matches();

const slidesPerView = ref(window.innerWidth <= 767 ? 1 : 4);
  
  const updateSlidesPerView = () => {
    slidesPerView.value = window.innerWidth <= 767 ? 1 : 4;
  };
  
  onMounted(async() => {
    await getNextMatches();
    window.addEventListener('resize', updateSlidesPerView);
  });
  
  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateSlidesPerView);
  });
  
  const modules = [Navigation, Scrollbar];
</script>

<style scoped>

.slider-title {
    font-size: 1rem;
    font-weight: 400;
    padding: 0rem 1rem;
    margin-top: 4rem;
  }

p {
    margin: 0.5rem;
}

.mySwiper {
    max-width: 100vw;
    height: auto;
    padding: 2rem 1rem;
}
.swiper-slider {
    background-color: white;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    color: black;
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    padding: 1rem;
    overflow-wrap: break-word;
    border: 1px black solid !important;
}

.swiper-slider:first-child {
    background-color: var(--c-red);
    color: white;
}

.shortDate {
    font-weight: bold;
    font-size: 3.3rem;
    margin-bottom: 3rem;
}

.slider-top, .slider-bottom {
    display: flex;
    flex-direction: column;
}

.team-name {
  font-size: 1.2rem;
}

@media (max-width: 767px) {
  .swiper-slider {
    background-color: white;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    color: black;
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    padding: 0rem;
    overflow-wrap: break-word;
    border: 1px black solid !important;
}
}
</style>