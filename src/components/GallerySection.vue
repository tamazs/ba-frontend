<template>
    <section class="posts-container">
      <div class="posts-grid">
        <div v-for="image in images" :key="image.uid" class="post">
            <PrismicLink :field="image" :linkResolver="linkResolver" class="card-link">
            <div class="image-wrapper">
                <PrismicImage :field="image.data.borito" class="base-image" />
            </div>
            <div class="text-wrapper">
                <p class="category">{{ image.data.kategoria }} <span class="date">- {{ image.data.datum }}</span></p>
                <PrismicText :field="image.data.cim" wrapper="p" class="title" />
            </div>
        </PrismicLink>
        </div>
      </div>
    </section>
  </template>

<script setup>
import { useAllPrismicDocumentsByType, PrismicLink, PrismicImage, PrismicText } from '@prismicio/vue';
import linkResolver from '../link-resolver';

const { data: images } = useAllPrismicDocumentsByType("galeria", {
    orderings: [
		{ field: "document.first_publication_date", direction: "desc" }
	],
});
</script>

<style lang="scss" scoped>
.posts-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 1rem;
}

.posts-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 columns */
    grid-template-rows: repeat(4, auto); /* 4 rows */
    grid-gap: 20px; /* Adjust the gap as needed */
}

@media (max-width: 767px) {
    .posts-grid {
        grid-template-columns: 1fr; /* 1 column on mobile */
        grid-template-rows: auto; /* Auto rows */
    }
}

.card-link {
    text-decoration: none;
    color: black;
  }
  
  .image-wrapper {
    position: relative;
    width: 100%;
    height: 30vh;
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

  .post:hover .base-image {
  transform: scale(1.1); // Scale the image up to 110% of its size
}
</style>
