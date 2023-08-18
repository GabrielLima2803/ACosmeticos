<script setup>
import { onMounted, ref} from 'vue';
import { RouterLink } from 'vue-router';

function enterImage(index) {
  expand.value[index] = true  
}

function leaveImage(index) {
  expand.value[index] = false  
}

const expand = ref([])

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
    hover: 'fasdfasdf a fasd asd fasd fa sd'
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

onMounted(() => {
  perfumaria.forEach(() =>
    expand.value.push(false)
  )
})
</script>

<template>
  {{  expand }}
  <v-row>
    <v-col v-for="(produto, index) in perfumaria" :key="index" class="col card-perfumaria" >
      <!-- <div > -->
        <img @mouseenter="enterImage(index)" @mouseleave="leaveImage(index)" :src="produto.img" class="image-perfumaria" />
        <div class="card" :class="expand[index] ? 'hover': ''">
          <div class="card-content">
            <RouterLink to="/">
              <h2 class="card-title">{{ produto.marca }}</h2>
            </RouterLink>
            <p class="card-body">{{ produto.hover }}</p>
          </div>
        </div>
      <!-- </div> -->
    </v-col>
  </v-row>
</template>

<style scoped>
.v-row {
  margin: 0;
}

h2 {
  color: black;
}

a {
  text-decoration: none;
}

.col {
  padding: 0;
  position: relative;
  overflow: hidden;
}
/* Defina a largura da imagem */

.col:hover img {
  transform: scale(1.1);
}

.image-perfumaria {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.7 rgba(0, 0, 0, 0.5);
  z-index: 11;
  transition: all .3s ease-in-out;

}

.card {
  padding: 10rem 0 0;
  max-width: 420px;
  height: 420px;
  transition: transform 500ms ease;
  overflow: hidden;
  z-index: 0;


}
.card-content {
  padding: 1.5em;
  transform: translateY(55%);
  transition: transform 500ms ease;
}

.car-title {
  position: relative;
  width: max-content;
}

.card-title::after {
  content: "";
  position: absolute;
  height: 3px;
  left: 0;
  bottom: 10px;
  width: 100%;
  background: green;
  transform: scaleX(0);
}

.card.hover {
  transform: scale(1.05);
}

.card.hover .card-title::after {
  transform: scaleX(1);
}

.card.hover .card-content {
  transform: translateY(0);
  transition-delay: 0;

}
</style>


