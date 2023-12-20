<template>
  <div class="container">
    <div class="video-wrapper" v-html="video.data.link.html"></div>
    <div class="share-wrapper">
        <p class="category">{{ video.data.kategoria }} <span class="date">- {{ video.data.datum }}</span></p>
      <h1 class="title">{{ $prismic.asText(video.data.cim) }}</h1>
      <div class="dropdown">
        <button class="share-btn" @click="toggleDropdown">Megosztás</button>
        <div v-show="isDropdownVisible" class="dropdown-content">
          <a href="#" @click.prevent="copyToClipboard"><i class="fas fa-link"></i></a>
          <a href="#" @click.prevent="shareToFacebook"><i class="fab fa-facebook"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  padding-top: 15vh;
}

.video-wrapper {
  height: 70vh;
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
}

.share-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 3rem;
  gap: 2rem;
}

.dropdown-content {
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  width: max-content;
}

.dropdown-content a{
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
}

.dropdown-content a:hover{
  color: var(--c-red);
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
    font-weight: 400;
  }

  .share-btn {
    background-color: var(--c-red);
    color: white;
    border: 0;
    padding: 1rem 3rem;
    cursor: pointer;
  }

@media (max-width: 600px) {
  .container {
    grid-template-columns: 1fr;
  }
}

</style>


<script setup>
import { watchEffect, onMounted, nextTick } from "vue";
    import { usePrismicDocumentByUID, PrismicImage, PrismicRichText } from "@prismicio/vue";
    import { useRoute } from "vue-router";
    import { useSeoMeta } from '@unhead/vue'
    import { ref } from 'vue';

const isDropdownVisible = ref(false);

const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value;
  // Log to check if the method is called and the new value of isDropdownVisible
  console.log('Dropdown toggled: ', isDropdownVisible.value);
};

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    alert('URL kimásolva!');
  } catch (err) {
    console.error('Could not copy text:', err);
  }
};

const shareToFacebook = () => {
  const url = encodeURIComponent(window.location.href);
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  window.open(facebookUrl, '_blank');
};

    const route = useRoute();

    const {data: video } = usePrismicDocumentByUID("video", route.params.uid);
    console.log(video)

    const removeInlineStyles = () => {
  const iframe = document.querySelector('.video-wrapper iframe');
  if (iframe) {
    iframe.style.width = '100%';
    iframe.style.height = '100%';
  }
};

onMounted(() => {
  nextTick(() => {
    removeInlineStyles();
  });
});

    watchEffect(() => {
    if (video.value) {
      useSeoMeta({
        title: video.value.data.cim[0].text + " - Kisvárdai Kézilabda Klub",
        description: video.value.data.cim[0].text,
        ogDescription: video.value.data.cim[0].text,
        ogTitle: video.value.data.cim[0].text + " - Kisvárdai Kézilabda Klub",
        ogImage: video.value.data.borito.url
      });
    }
});
</script>