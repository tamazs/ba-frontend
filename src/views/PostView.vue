<template>
    <section class="post-section">
        <PrismicImage :field="post.data.borito" class="post-photo" />
      <div class="title-holder">
        <h1 class="post-title">{{ $prismic.asText(post.data.cim) }}</h1>
        <div class="underline"></div>
        <p class="category">{{ post.data.kategoria }} <span class="date">- {{ post.data.datum }}</span></p>
    </div>
    </section>
    <section class="post-text-container">
        <PrismicRichText :field="post.data.szoveg" class="post-text"/>
    </section>
  </template>
  
  <script setup>
  import { watchEffect } from "vue";
    import { usePrismicDocumentByUID, PrismicImage, PrismicRichText } from "@prismicio/vue";
    import { useRoute } from "vue-router";
    import { useSeoMeta } from '@unhead/vue'

    const route = useRoute();

    const {data: post } = usePrismicDocumentByUID("poszt", route.params.uid);

    watchEffect(() => {
    if (post.value) {
      useSeoMeta({
        title: post.value.data.cim[0].text + " - Kisvárdai Kézilabda Klub",
        description: post.value.data.szoveg[0].text,
        ogDescription: post.value.data.szoveg[0].text,
        ogTitle: post.value.data.cim[0].text + " - Kisvárdai Kézilabda Klub",
        ogImage: post.value.data.borito.url
      });
    }
});

  </script>
  
  <style scoped>
  .post-section {
    position: relative;
    text-align: center;
    color: white;
    max-width: 100vw;
  }
  
  .post-photo {
    width: 100vw;
    height: auto;
    display: block;
    object-fit: cover;
  }
  
  .title-holder {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0rem;
    max-width: 100vw;
    height: auto;
    margin: 0;
    padding: 1rem 2rem;
    background-color: var(--c-red);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .post-title {
    font-size: 3.5rem;
    padding-bottom: 0.5rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .underline {
    background-color: white;
    width: 95vw;
    height: 1.4rem;
  }

  .category {
    font-size: 1rem;
    padding: 3rem 0;
  }

  .date {
    font-size: 1rem;
  }

  .post-text-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem 0rem;
  }

  .post-text {
    max-width: 50vw;
  }
  </style>
  