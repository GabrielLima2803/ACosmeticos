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
    >
      <v-card class="perfumariaitens">
        <v-hover v-slot="{ hover }">
          <img
            :src="hover ? produto.hover || produto.img : produto.img"
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover, 'enlarge': hover }"
            class="mx-auto img"
          />
        </v-hover>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
/* ... (seu estilo existente) */

/* Adicione uma classe para aumentar o tamanho da imagem no hover */
.zoom {
  padding: 50px;

  transition: transform .2s;
  width: 200px;
  height: 200px;
  margin: 0 auto;
}

.zoom:hover {
  -ms-transform: scale(1.5); /* IE 9 */
  -webkit-transform: scale(1.5); /* Safari 3-8 */
  transform: scale(1.5); 
}
img {
  width: 222.37px;
  height: 255px;
}
.perfumariaitens {
  display: flex;
  justify-content: space-between; /* Distribui os elementos uniformemente */
}
.img {
  margin: 0;
}
</style>
