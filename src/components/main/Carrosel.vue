<template>
  <div class="mt-5 carousel container d-flex justify-content-center">
    <div id="gifCarousel" class="carousel slide" data-bs-ride="carousel" style="max-width: 2000px;">
      <div class="carousel-inner">
        <div v-for="(gif, gifIndex) in gifs" :key="gifIndex" :class="['carousel-item', { active: gifIndex === 0 }]">
          <div class="gif-container">
            <img :src="gif" class="d-block w-100 gif-image" alt="GIF">
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#gifCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#gifCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const gifs = [
  "https://ellebrasil-wp-images.s3.amazonaws.com/2022/08/origin-42.gif",
  "https://images.squarespace-cdn.com/content/v1/563279a0e4b0072b576917f0/1645023187101-XM5IH9NUISIJY1UI45LN/PICT_SITE_IMG_DEST_NAT_EKOS.gif?format=2500w",
  "https://freight.cargo.site/w/640/i/85331150f7a0dacf228ca7830f63af6b39b9102a713894933cbd8aaf9f108337/Cena_02.gif",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b77d67101728195.5f2598752804e.gif"
];
</script>

<style scoped>
.carousel-inner {
  display: block; /* Cada GIF ocupa todo o espaço do item */
}

.carousel-item {
  position: relative;
}

.gif-container {
  padding: 5px;
  text-align: center;
}

.gif-image {
  max-width: 100%;
  height: 600px;
}

.carousel-control-prev,
.carousel-control-next {
  top: 50%;
  transform: translateY(-50%);
}
</style>