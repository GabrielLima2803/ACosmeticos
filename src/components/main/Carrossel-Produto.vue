<script setup>
import {  ref } from 'vue'


const carouselItems = [
  {
    src: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/B49031/e162f566-ac87-447d-b805-23782a3f0f8a-malbec-colonia-club-100ml-v3-b49031.jpg',
    thumbnail: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/B49031/e162f566-ac87-447d-b805-23782a3f0f8a-malbec-colonia-club-100ml-v3-b49031.jpg',
  },
  {
    src: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/B49031/cf47a92d-9986-4c9d-8a0a-043c9e3e54c3-malbec-colonia-club-100ml-v3-b49031-segredinho.jpg',
    thumbnail: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/product/B49031/cf47a92d-9986-4c9d-8a0a-043c9e3e54c3-malbec-colonia-club-100ml-v3-b49031-segredinho.jpg', // Using the same thumbnail for simplicity
  },
];

const currentIndex = ref(0);

function changeCarouselIndex(index) {
  currentIndex.value = index;
}
</script>

<template>
  <div class="carousel-container">
    <div class="thumbnails">
     <div v-for="(item, index) in carouselItems" :key="index"
        :class="['thumbnail', { active: currentIndex === index }]"
        @click="changeCarouselIndex(index)"
      >
        <img :src="item.thumbnail" alt="Thumbnail" class="thumbnail-img">
      </div>
    </div>

    <v-carousel v-model="currentIndex" class="carousel">
      <v-carousel-item
        v-for="(item, index) in carouselItems"
        :key="index"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>


<style>
.carousel-container {
  display: flex;
  align-items: center;
  width: 640px;
  height: 500px;
  margin: 0 auto;
}

.thumbnails {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: 10px;
  margin-bottom: 300px;
}

.thumbnail {
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.3s;
}

.thumbnail.active {
  opacity: 1;
}

.thumbnail-img {
  width: 67px;
  height: 67px;
}

.carousel {
  flex: 1;
  width: 100%;
  height: 100%;
}

</style>
