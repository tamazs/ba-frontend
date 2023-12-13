<template>
    <div v-if="gallery">
        <SliceZone :slices="gallery.data.body" :components="components"/>
    </div>
</template>

<script setup>
import { SliceZone, usePrismicDocumentByUID, defineSliceZoneComponents } from "@prismicio/vue";
import { useRoute } from "vue-router";
import GalleryImage from "../slices/GalleryImage.vue"

const route = useRoute();

const {data: gallery } = usePrismicDocumentByUID("galeria", route.params.uid);

const components = defineSliceZoneComponents({
  galeria: GalleryImage
});


console.log(gallery)
</script>

<style lang="scss" scoped>

</style>