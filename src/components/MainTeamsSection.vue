<template>
    <div class="grid-container">
      <router-link to="/team" class="grid-item">
        <img src="@/assets/team.jpg" alt="Női csapat">
        <p class="overlay-text">Női</p>
      </router-link>
      <a href="https://www.mksz.hu/sportszervezet/111?alversenyId=320219012&csapatId=3810334508&ev=2023" target="_blank" class="grid-item">
        <img src="@/assets/team_m.jpg" alt="Férfi csapat">
        <p class="overlay-text">Férfi</p>
      </a>
    </div>
  </template>
  

<script setup>

</script>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(300px, auto);
}

.grid-item {
  position: relative;
  text-decoration: none;
  display: block;
  height: 100%;
  overflow: hidden; // Ensure the content does not spill out

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0; // Align the overlay to the bottom
    left: 0;
    right: 0;
    height: 100%; // Height of the overlay
    background: rgba(0, 0, 0, 0.5);
    transition: background 0.5s ease; // Animate the background change
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  .overlay-text {
    position: absolute;
    bottom: 10px; // Position text at the bottom with 10px spacing from the edge
    left: 50%;
    transform: translateX(-50%);
    color: white;
    font-size: 2.5rem;
    z-index: 2;
    transition: transform 0.5s ease; // Animate the transform change
    text-transform: uppercase;
    font-weight: 700;
  }

  &:hover:after {
    background: rgba(0, 0, 0, 0.3); // Transparent overlay on hover
  }

  &:hover .overlay-text {
    transform: translateX(-50%) translateY(-10px); // Slight lift effect on hover
  }
}
</style>
