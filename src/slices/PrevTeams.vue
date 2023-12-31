<template>
    <swiper :slidesPerView="slidesPerView" :spaceBetween="10" :navigation="false" :scrollbar="true" :modules="modules"
      class="mySwiper">
        <swiper-slide v-for="item in slice.items" :key="item.key" class="swiper-slide">
            <PrismicText :field="item.klub" />
        </swiper-slide>
    </swiper>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, defineProps } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import { Navigation, Scrollbar } from 'swiper/modules';
import { getSliceComponentProps, PrismicText } from "@prismicio/vue";

defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]));

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

<style scoped>

.mySwiper {
    max-width: 100vw;
    height: 50vh;
    padding: 2rem 1rem;
}
.swiper-slide {
    background-color: var(--c-blue);
    display: flex;
    align-items: flex-end;
    color: white;
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 1rem;
    overflow-wrap: break-word;
}

@media (max-width: 800px) {
  .swiper-slide {
    padding: 0rem;
}
}
</style>