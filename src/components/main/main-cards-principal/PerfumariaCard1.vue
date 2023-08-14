<script setup>
const perfumaria = [
  {
    id: 1,
    img: 'https://i.ibb.co/mvZwNb5/malbec.jpg',
    hover:'https://i.ibb.co/ZGd7wNK/malbechover.jpg',
    origin: 'https://i.ibb.co/mvZwNb5/malbec.jpg'
  },
  {
    id: 2,
    img: '',
    hover:'', 
    original: ''
  },
  {
    id: 3,
    img: '',
    hover:'', 
    original: ''
  },
  {
    id: 4,
    img: '',
    hover:'', 
    original: ''
  },
  {
    id: 5,
    img: '',
    hover:'', 
    original: ''
  },
]
const changeImage = (produto, isHover) => {
  produto.img = isHover ? produto.hover : produto.origin;
};
</script>

<template>
   <div>
    <div v-for="(produtos, index) in perfumaria" :key="produtos.id" class="col-3">
      <img
        :src="produtos.img"
        @mouseover="changeImage(produtos, true)"
        @mouseleave="changeImage(produtos, false)"
        class="product-image"
      />
    </div>
  </div>
</template>

<style scoped>

img{
    width: 320px;
}





</style>