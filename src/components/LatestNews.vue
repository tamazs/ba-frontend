<template>
    <div>
        <ul v-if="posts">
            <li v-for="post in posts" :key="post.uid">
                    <PrismicText :field="post.data.cim" wrapper="h2" />
                    <PrismicImage :field="post.data.borito" />
            </li>
        </ul>
    </div>
</template>

<script setup>
import { PrismicImage, PrismicLink, PrismicText, useAllPrismicDocumentsByType } from '@prismicio/vue';
const {data: posts} = useAllPrismicDocumentsByType("poszt");

console.log(posts)
</script>

<style lang="scss" scoped>

</style>