<template>
    <div class="marquee-container" @mouseenter="pauseAnimation" @mouseleave="resumeAnimation">
      <div class="marquee-content" ref="marquee">
        <a v-for="sponsor in sponsors" :key="sponsor.id" :href="sponsor.url" target="_blank">
            <img :src="sponsor.image" :alt="sponsor.name">
        </a>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, nextTick } from 'vue';
  import { gsap } from 'gsap';
  import AquaCinema from '@/assets/AquaCinema.png';
  import Casino from '@/assets/Casino.png';
  import CoffeeTeaArea from '@/assets/CoffeeTeaArea.png';
  import Fonyodi from '@/assets/Fonyodi.png';
  import FrissFm from '@/assets/FrissFm.png';
  import FrissMedia from '@/assets/FrissMedia.png';
  import Hada from '@/assets/Hada.png';
  import Kisvarda from '@/assets/Kisvarda.png';
  import MasterGood from '@/assets/MasterGood.png';
  import Nyirzem from '@/assets/Nyirzem.png';
  import OPEL from '@/assets/OPEL.png';
  import Rohod from '@/assets/Rohod.png';
  import Tippmix2 from '@/assets/TIPPMIX2.png';
  import VardaPlexCinema from '@/assets/VardaPlexCinema.png';
  import VardaSportHotel from '@/assets/VardaSportHotel.png';
  import WCR from '@/assets/WCR.png';
  
  const sponsors = ref([
    { id: 1, name: 'AquaCinema Kisvárda', url: 'https://aquacinema.hu/', image: AquaCinema },
    { id: 2, name: 'Casino Tropicana Miskolc', url: 'https://casinomiskolc.hu/', image: Casino },
    { id: 3, name: 'Coffee Tea Area Kisvárda', url: 'https://www.facebook.com/coffeeteaarea/', image: CoffeeTeaArea },
    { id: 4, name: 'Fonyódi', url: 'https://www.fonyodi.hu/', image: Fonyodi },
    { id: 5, name: 'FrissFM', url: 'http://frissfm.hu/', image: FrissFm },
    { id: 6, name: 'Friss Média', url: 'https://frissmedia.hu/', image: FrissMedia },
    { id: 7, name: 'Háda', url: 'https://hada.hu/', image: Hada },
    { id: 8, name: 'Kisvárda', url: 'https://kisvarda.hu/', image: Kisvarda },
    { id: 9, name: 'Master Good', url: 'https://mastergood.hu/', image: MasterGood },
    { id: 10, name: 'Nyírzem', url: 'http://www.nyirzem.hu/', image: Nyirzem },
    { id: 11, name: 'OPEL', url: 'https://www.opelkisvarda.hu/', image: OPEL },
    { id: 12, name: 'Rohod-Center Kft.', url: '', image: Rohod },
    { id: 13, name: 'Tippmix', url: 'https://www.tippmixpro.hu/', image: Tippmix2 },
    { id: 14, name: 'VárdaPlex Cinema', url: 'https://vardaplexcinema.hu/', image: VardaPlexCinema },
    { id: 15, name: 'Várda Sport Hotel', url: 'http://vardasporthotel.hu/', image: VardaSportHotel},
    { id: 15, name: 'Warda Coffee Roster', url: 'https://wardacoffee.com/', image: WCR}
  ]);
  
  const marquee = ref(null);
let marqueeTween;

const pauseAnimation = () => {
  if (marqueeTween) {
    marqueeTween.pause();
  }
};

const resumeAnimation = () => {
  if (marqueeTween) {
    marqueeTween.resume();
  }
};

onMounted(() => {
  nextTick(() => {
    // Duplicate marquee content for a seamless loop
    marquee.value.innerHTML += marquee.value.innerHTML;

    const children = Array.from(marquee.value.children);
    const totalWidth = children.reduce((acc, child) => acc + child.offsetWidth, 0)
                        + 10 * (children.length - 1); // Margin-right for each item

    marqueeTween = gsap.to('.marquee-content', {
      x: `-=${totalWidth / 2}px`, // Only need to move by half since we duplicated the content
      ease: 'linear',
      duration: 30,
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % (totalWidth / 2)) // Reset x to create a continuous loop
      }
    });
  });
});

  </script>
  
  <style scoped>
.marquee-container {
  overflow: hidden;
  width: 100%;
}

.marquee-content {
  display: flex;
  will-change: transform; /* Optimize for GPU acceleration */
  padding: 5rem 0rem;
}

.marquee-content a {
  flex: 0 0 auto; /* Do not grow or shrink */
  display: block; /* Ensure a elements behave like block elements */
  margin-right: 10px;
}

.marquee-content img {
  height: 7rem; /* Set a fixed height for all images */
  width: auto; /* Adjust the width automatically */
  display: block;
  filter: grayscale(1);
}
</style>

  