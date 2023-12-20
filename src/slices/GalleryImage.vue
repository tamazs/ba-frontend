<template>
    <div >
        <lightgallery :settings="{ speed: 500, plugins: plugins }" class="gallery-grid">
            <a v-for="item in slice.items" :href="item.kep.url" :key="item.key" class="gallery-item">
                <img :src="item.kep.url" :alt="item.kep.alt">
            </a>
        </lightgallery>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { getSliceComponentProps } from "@prismicio/vue";
import lightgallery from 'lightgallery/vue';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';

const plugins = [lgThumbnail, lgZoom];

defineProps(getSliceComponentProps(["slice", "index", "slices", "context"]));

</script>

<style scoped>
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* Creates 4 equal columns */
    grid-gap: 10px; /* Adjust the gap between grid items */
    margin-top: 2rem;
    padding: 1rem;
}

.gallery-item {
    width: 100%; /* Ensure that the anchor tags take full width */
    height: auto; /* Adjust the height as needed */
    overflow: hidden; /* Optional, in case of overflow */
}

img {
    width: 100%;
    height: 20vh; /* Maintain aspect ratio */
    display: block; /* Remove any inline spacing */
    object-fit: cover;
}

@media (max-width: 768px) {
    .gallery-grid {
        grid-template-columns: repeat(2, 1fr); /* 2 columns on smaller screens */
    }
}
</style>