<script setup>
const perfumaria = [
  {
    id: 1,
    img: 'https://i.ibb.co/mvZwNb5/malbec.jpg'
  },
  {
    id: 2,
    img: 'https://i.ibb.co/QcK8DJg/lily.png'
  },
  {
    id: 3,
    img: 'https://i.ibb.co/Z8Nxhqd/egeo.png'
  },
  {
    id: 4,
    img: 'https://i.ibb.co/WHXVHNF/drbotica.png'
  },
  {
    id: 5,
    img: 'https://i.ibb.co/WftmTQp/coffee.png'
  },
]
</script>

<template>
   <v-row>
    <v-col
      v-for="(produto, index) in perfumaria"
      :key="produto.id"
      class="col"
    >
    <v-hover v-slot="{ hover }"
      >
      <img
            :src="produto.img"
            :class="{ 'enlarge': hover }"
            class="mx-auto img"
          />
      </v-hover>
    </v-col>
  </v-row>
</template>

<style scoped>
.enlarge {
  transform: scale(1.25); /* Aumenta o texto em 25% */
  transition: transform 0.2s;
}

.col {
  padding: 0;
}
.img{
  height: 255px;
}
/* Defina a largura da imagem */
img {
  width: 100%;
  height: auto;
}
</style>
