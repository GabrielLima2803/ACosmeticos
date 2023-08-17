<script setup>
import { RouterLink } from 'vue-router';


const perfumaria = [
  {
    id: 1,
    marca: 'Malbec',
    img: 'https://i.ibb.co/CVNLhqm/malbec-2.png',
    hover: 'Com fragrâncias marcantes como um bom vinho, as fragrâncias Malbec são as primeiras do mundo a serem feitas com álcool vínico.'
  },
  {
    id: 2,
    marca: 'Coffe',
    img: 'https://i.ibb.co/CVNLhqm/malbec-2.png',
    hover: ''
  },
  {
    id: 3,
    img: 'https://i.ibb.co/CVNLhqm/malbec-2.png'
  },
  {
    id: 4,
    img: 'https://i.ibb.co/CVNLhqm/malbec-2.png'
  },
  {
    id: 5,
    img: 'https://i.ibb.co/CVNLhqm/malbec-2.png'
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
    <v-hover slot="{ hover }">
      <img
      :src="produto.img"
      class="img"
      />
          <RouterLink to="/">
            <span class="title">legendaaaaa</span>
          </RouterLink>
      </v-hover>
    </v-col>
  </v-row>
</template>

<style scoped>
.v-row{
  margin: 0;
}
.col {
  padding: 0;
  position: relative;
  overflow: hidden;
}
.img{
  height: 420px;
  margin: 0;
}
/* Defina a largura da imagem */
img {
  position: relative;
  width: 100%;
  height: auto; 
  transition: all .3s ease-in-out;
}

.show {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
  transform: scale(1.1);
  transition: all .1s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.col:hover img{
  transform: scale(1.1);
}

.show:hover {
  opacity: 1;
}

.title {
  font-size: 1.1em;
  font-weight: 600;
  text-transform: capitalize;
  
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}



.title:hover {
}

</style>
