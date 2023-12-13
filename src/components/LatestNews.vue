<template>
    <h1 class="slider-title">LEGUTÓBBI HÍREK</h1>
    <swiper :slidesPerView="slidesPerView" :spaceBetween="10" :navigation="false" :scrollbar="true" :modules="modules"
      class="mySwiper">
        <swiper-slide v-for="post in posts" :key="post.uid" class="swiper-slide">
            <PrismicLink :field="post" :linkResolver="linkResolver" class="card-link">
            <div class="image-wrapper">
                <PrismicImage :field="post.data.borito" class="base-image" />
            </div>
            <div class="text-wrapper">
                <p class="category">{{ post.data.kategoria }} <span class="date">- {{ post.data.datum }}</span></p>
                <PrismicText :field="post.data.cim" wrapper="p" class="title" />
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
import linkResolver from '../link-resolver';
  
    const { data: posts } = useAllPrismicDocumentsByType("poszt", {
    orderings: [
		{ field: "document.first_publication_date", direction: "desc" }
	],
});
  
  const slidesPerView = ref(window.innerWidth <= 767 ? 1 : 4);
  
  const updateSlidesPerView = () => {
    slidesPerView.value = window.innerWidth <= 767 ? 1 : 4;
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
    margin-top: 2.5rem;
  }
  .mySwiper {
    width: 100%;
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
    align-items: flex-start;
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

  .category {
    font-size: 1rem;
    margin: 0;
    padding-top: 0.3rem;
  }

  .date {
    color: #ABAAAA;
    font-size: 1rem;
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