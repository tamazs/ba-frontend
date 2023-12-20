<template>
    <h1 class="slider-title">Kapusok</h1>
    <swiper :slidesPerView="slidesPerView" :spaceBetween="10" :navigation="false" :scrollbar="false" :modules="modules"
      class="mySwiper">
        <swiper-slide v-for="player in players" :key="player.uid" class="swiper-slide">
            <PrismicLink :field="player" :linkResolver="linkResolver" class="card-link">
            <div class="image-wrapper">
                <PrismicImage :field="player.data.kep" class="base-image" />
            </div>
            <div class="text-wrapper">
                <PrismicText :field="player.data.nev" wrapper="p" class="title" />
                <p class="number">{{ player.data.mezszam }}</p>
            </div>
        </PrismicLink>
        </swiper-slide>
    </swiper>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import { Navigation, Scrollbar } from 'swiper/modules';
  import { PrismicImage, PrismicLink, PrismicText, useAllPrismicDocumentsByType } from '@prismicio/vue';
  import * as prismic from "@prismicio/client";
import linkResolver from '../link-resolver';
  
const {data: players } = useAllPrismicDocumentsByType("jatekos", {
  filters: [
    prismic.filter.at("my.jatekos.poszt", "Kapus")
  ],
    orderings: [
		{ field: "my.jatekos.mezszam", direction: "asc" }
	],
});
  
  const slidesPerView = ref(window.innerWidth <= 767 ? 1 : 5);
  
  const updateSlidesPerView = () => {
    slidesPerView.value = window.innerWidth <= 767 ? 1 : 5;
  };
  
  onMounted(() => {
  
    window.addEventListener('resize', updateSlidesPerView);
  });
  
  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateSlidesPerView);
  });
  
  const modules = [Navigation, Scrollbar];
  </script>
  
  <style lang="scss" scoped>

  .slider-title {
    font-size: 1rem;
    font-weight: 400;
    padding: 0rem 1rem;
    margin-top: 4rem;
  }
  .mySwiper {
    max-width: 100vw;
    height: 100%;
    background-color: white;
    padding: 2rem 1rem;
  }
  
  .swiper-slide {
    text-align: left;
    font-size: 18px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
  }

  .card-link {
    text-decoration: none;
    color: black;
  }
  
  .image-wrapper {
    position: relative;
    width: 100%;
    height: 60vh;
    transition: transform 0.5s ease;
    margin-bottom: 10px;
    transition: all 1s;
    overflow: hidden;
  }

  .number {
    font-size: 3rem;
    margin: 0;
    font-weight: 700;
    color: var(--c-red);
    visibility: hidden;
  }

  .swiper-slide:hover .number {
  visibility: visible;
}
  
  .title {
    text-align: left;
    font-size: 1rem;
  }
  
  .base-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .swiper-slide:hover .base-image {
  transform: scale(1.1); // Scale the image up to 110% of its size
}
  
  @media(max-width: 767px) {
    .swiper-slide {
      padding: 0;
    }
  }
  </style>