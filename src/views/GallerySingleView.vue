<template>
    <div v-if="gallery">
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

</style>