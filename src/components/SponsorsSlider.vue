<template>
    <swiper :slidesPerView="slidesPerView" :spaceBetween="10" :navigation="false" :scrollbar="true" :autoplay="true" :modules="modules"
        class="mySwiper">
        <swiper-slide v-for="sponsor in sponsors" :key="sponsor.id" class="swiper-slider">
            <a :href="sponsor.url" target="_blank">
                <img :src="sponsor.image" :alt="sponsor.name">
            </a>
        </swiper-slide>
    </swiper>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';
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
    { id: 15, name: 'Várda Sport Hotel', url: 'http://vardasporthotel.hu/', image: VardaSportHotel },
    { id: 15, name: 'Warda Coffee Roster', url: 'https://wardacoffee.com/', image: WCR }
]);

const slidesPerView = ref(window.innerWidth <= 767 ? 1 : 3);

const updateSlidesPerView = () => {
    slidesPerView.value = window.innerWidth <= 767 ? 1 : 3;
};

onMounted(async () => {
    window.addEventListener('resize', updateSlidesPerView);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateSlidesPerView);
});

const modules = [Navigation, Scrollbar, Autoplay];
</script>

<style scoped>
.mySwiper {
    height: auto;
    padding: 1rem 1rem;
}

.swiper-slider {
    width: auto;
    object-fit: contain;
}

a {
    object-fit: contain;
    display: flex;
    justify-content: center;
    align-items: center;
}

img {
    height: 7rem;
    width: auto;
    filter: grayscale(1);
}

img:hover {
    filter: grayscale(0);
}
</style>