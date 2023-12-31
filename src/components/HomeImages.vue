<template>
    <div class="about-content" @mousemove="handleMouseMove">
      <img v-for="n in imageSources" :key="n" :src="`https://source.unsplash.com/random/300x300?sig=${n}`"
        class="content__img">
      <div class="text-container">
        <h1>KKC</h1>
      </div>
    </div>
  </template>
    
    
  <script setup>
  import { ref, onMounted } from 'vue';
  import { gsap, Power1, Quad, Expo } from 'gsap';
  
  const imageSources = Array(10).fill(0).map((_, i) => i + 1);
  const winsize = ref({ width: window.innerWidth, height: window.innerHeight });
  const currentImageIndex = ref(0); // To keep track of which image to show next
  
  const mousePos = ref({ x: 0, y: 0 });
  const lastMousePos = ref({ x: 0, y: 0 });
  const cacheMousePos = ref({ x: 0, y: 0 });
  const threshold = 100;
  
  const handleMouseMove = (e) => {
    mousePos.value = { x: e.clientX, y: e.clientY };
  
    const distance = Math.hypot(
      mousePos.value.x - lastMousePos.value.x,
      mousePos.value.y - lastMousePos.value.y
    );
  
    cacheMousePos.value.x = (1 - 0.1) * cacheMousePos.value.x + 0.1 * mousePos.value.x;
    cacheMousePos.value.y = (1 - 0.1) * cacheMousePos.value.y + 0.1 * mousePos.value.y;
  
    if (distance > threshold) {
      showNextImage();
      lastMousePos.value = mousePos.value;
    }
  };
  
  function showNextImage() {
    const imgEls = document.querySelectorAll('.content__img');
    const imgEl = imgEls[currentImageIndex.value % imgEls.length];
    currentImageIndex.value++;
  
    if (!imgEl) return;
  
    const rect = imgEl.getBoundingClientRect();
  
    gsap.killTweensOf(imgEl);
  
    const timeline = gsap.timeline();
    timeline
      .set(imgEl, {
        opacity: 0,
        scaleX: 1,
        scaleY: 1,
        x: mousePos.value.x - rect.width / 2,
        y: mousePos.value.y - rect.height / 2,
      })
      .to(imgEl, 0.5, {
        ease: Power1.easeOut,
        opacity: 1,
      })
      .to(imgEl, 0.2, {
        ease: Quad.easeIn,
        scaleX: 0.5,
        scaleY: 2
      })
      .to(imgEl, 0.5, {
        ease: Expo.easeOut,
        scaleX: 0.7,
        scaleY: 0.7,
        y: `+=180%`,
        opacity: 0
      });
  }
  
  onMounted(() => {
    window.addEventListener('resize', () => {
      winsize.value = { width: window.innerWidth, height: window.innerHeight };
    });
  });
  
  </script>
    
    
  <style lang="scss" scoped>
  .about-content {
    position: relative;
    padding: 40px;
    max-width: 100vw;
    height: 70vh;
    margin: 0 auto;
    font-size: 8rem;
    line-height: 1.6;
    overflow: hidden;
    background-color: var(--c-white);
  }
  
  .content__img {
    position: absolute;
    max-width: 300px;
    pointer-events: none;
    opacity: 0;
    transform-origin: 50% 50%;
  }
  
  .text-container {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  h1 {
    z-index: 2;
    color: transparent;
    text-transform: uppercase;
    padding: 1rem 0;
    -webkit-text-stroke: 4px var(--c-blue);
    text-stroke: 4px var(--c-blue);
  }
  
  @media(max-width: 767px) {
    .about-content {
      font-size: 1rem;
    }
  }
  </style>
    