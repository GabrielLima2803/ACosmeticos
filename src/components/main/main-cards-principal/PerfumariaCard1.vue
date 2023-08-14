<script setup>
const perfumaria = [
  {
    id: 1,
    img: 'https://i.ibb.co/mvZwNb5/malbec.jpg',
    hover: 'https://i.ibb.co/ZGd7wNK/malbechover.jpg',
    origin: 'https://i.ibb.co/mvZwNb5/malbec.jpg'
  },
  {
    id: 2,
    img: 'https://i.ibb.co/QcK8DJg/lily.png',
    hover: '',
    original: 'https://i.ibb.co/QcK8DJg/lily.png'
  },
  {
    id: 3,
    img: 'https://i.ibb.co/Z8Nxhqd/egeo.png',
    hover: '',
    original: 'https://i.ibb.co/Z8Nxhqd/egeo.png'
  },
  {
    id: 4,
    img: 'https://i.ibb.co/WHXVHNF/drbotica.png',
    hover: '',
    original: 'https://i.ibb.co/WHXVHNF/drbotica.png'
  },
  {
    id: 5,
    img: 'https://i.ibb.co/WftmTQp/coffee.png',
    hover: '',
    original: 'https://i.ibb.co/WftmTQp/coffee.png'
  },
]
</script>

<template>
  <div class="perfumariaitens">
    <div v-for="(produtos, index) in perfumaria" :key="produtos.id">
      <img
          :src="produtos.img"
          :hover="produtos.hover"
          @mouseover="produtos.img = produtos.hover"
          @mouseleave="produtos.img = produtos.original"
          class="img"
        />

    </div>
  </div>
</template>

<style scoped>
img {
  width: 222.37px;
  height: 255px;
}
.perfumariaitens {
  display: flex;
}

.img{
  margin: 0; /* Removendo margens */
}

.wrapImg{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>