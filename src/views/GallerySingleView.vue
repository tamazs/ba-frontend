<template>
    <div v-if="gallery">
      <section class="post-section">
        <PrismicImage :field="gallery.data.borito" class="post-photo" />
      <div class="title-holder">
        <h1 class="post-title">{{ $prismic.asText(gallery.data.cim) }}</h1>
        <div class="underline"></div>
        <p class="category">{{ gallery.data.kategoria }} <span class="date">- {{ gallery.data.datum }}</span></p>
    </div>
    </section>
        <SliceZone :slices="gallery.data.body" :components="components"/>
    </div>
</template>

<script setup>
import { watchEffect } from "vue";
import { SliceZone, usePrismicDocumentByUID, defineSliceZoneComponents } from "@prismicio/vue";
import { useRoute } from "vue-router";
import { useSeoMeta } from '@unhead/vue'
import GalleryImage from "../slices/GalleryImage.vue"

const route = useRoute();

const {data: gallery } = usePrismicDocumentByUID("galeria", route.params.uid);

const components = defineSliceZoneComponents({
  galeria: GalleryImage
});

watchEffect(() => {
    if (gallery.value) {
      useSeoMeta({
        title: gallery.value.data.cim[0].text + " - Kisvárdai Kézilabda Klub",
        description: gallery.value.data.cim[0].text,
        ogDescription: gallery.value.data.cim[0].text,
        ogTitle: gallery.value.data.cim[0].text + " - Kisvárdai Kézilabda Klub",
        ogImage: gallery.value.data.borito.url
      });
    }
});
</script>

<style lang="scss" scoped>
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
    text-align: left;
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
</style>