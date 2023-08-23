<script setup>

import { onMounted, ref } from 'vue';

function enterImage(index) {
  expand.value[index] = true
}


function leaveImage(index) {
  expand.value[index] = false
}


const expand = ref([])


const maquiagem = [
  {
    id: 1,
    marca: 'Olho',
    img: 'https://i.ibb.co/Mp2CNg1/image-134.png',
    hover: 'Realce seus olhos com nossos produtos de maquiagem, destacando sua expressão de maneira autêntica e moderna.'
  },
  {
    id: 2,
    marca: 'Boca',
    img: 'https://i.ibb.co/bB4W2Yy/image-119.png',
    hover: 'Um batom cuidadosamente selecionado não apenas colore os lábios, mas também revela sua confiança e estilo de forma sutil e autêntica.'
  },
  {
    id: 3,
    marca: 'Blush',
    img: 'https://i.ibb.co/TcF51wY/image-119-1.png',
    hover: 'Com um toque suave de blush, as bochechas ganham um rubor sutil, irradiando um frescor que parece capturar a luminosidade do dia.'
  },
  {
    id: 4,
    marca: 'Rosto',
    img: 'https://i.ibb.co/VSzg4k3/image-135.png',
    hover: 'A maquiagem para o rosto realça a beleza única de cada pessoa, sem exageros, apenas realçando o que já é incrível.'
  },
  {
    id: 5,
    marca: 'Brilho',
    img: 'https://i.ibb.co/syy2fFy/image-136.png',
    hover: 'Descubra a luminosidade sofisticada que sua maquiagem pode ter, proporcionando um brilho que reflete sua beleza autêntica.'
  },
]
onMounted(() => {
  maquiagem.forEach(() =>
    expand.value.push(false)
  )
})
</script>


<template>
  <v-row>
    <v-col v-for="(produto, index) in maquiagem" :key="index" class="col card-perfumaria">
      <!-- <div > -->
      <img @mouseenter="enterImage(index)" @mouseleave="leaveImage(index)" :src="produto.img" class="image-perfumaria" />
      <div class="card" :class="expand[index] ? 'hover' : ''" @mouseenter="enterImage(index)"
        @mouseleave="leaveImage(index)">
        <div class="card-content">
            <h2 class="card-title" :class="expand[index] ? 'hover' : ''">{{ produto.marca }}</h2>
            <div class="wrapBorde" >
              <div class="border-top" :class="expand[index] ? 'hover' : ''"></div>
            </div>
            
          <p class="card-body" :class="expand[index] ? 'hover' : ''">{{ produto.hover }}</p>
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
  color: white;
  text-align: center;
}


a {
  text-decoration: none;
}
.col {
  position: relative;
  padding: 0;
}
.col:hover img {
  transform: scaleX(1.1);
}
.card-perfumaria {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.image-perfumaria {
  width: 100%;
  height: 100%;
  transition: all .3s ease-in-out;
}
.card {
  position: absolute;
  background-color: #ffffff00;
  border: #ffffff00;
  color: white;
  width: 100%;
  height: 100%;
  border-radius: 0;
  transition: transform .3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card.hover {
  transform: scaleX(1.1);
  border-top: 3px solid #43055D;
  border-bottom: 3px solid #43055D;
  transition: 0.3s ease-in-out;
  /* justify-content: top; */
}

.card.hover .card-title::after {
  transform: scaleX(1);
}
.wrapBorde{
  display: flex;
  align-items: center;
  justify-content: center;
}
.border-top {
  width: 45px;
  height: 3px;
  background-color: #43055D;
  opacity: 0; /* Initially hidden */
  transition: opacity 0.3s ease-in-out;
}

.card.hover .border-top {
  opacity: 1; /* Displayed when parent .card is hovered */
}
.card-content {
  padding: 1.5em;
  width: 200px; /* Adjust the width as needed */
  height: 200px;
}

.card.hover .card-content {
  transform: translateY(0);
  transition-delay: 0;
  width: 220px; /* Adjust the expanded width as needed */
  height: 220px; /* Adjust the expanded height as needed */
}

.card-body {
  display: none;
  opacity: 0; /* Initially hidden */
  font-size: small;
  text-align: center;
  transform: translateY(50%); /* Start from the center */
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out, filter 0.5s ease-in-out, font-size 0.5s ease-in-out;
}

.card-body.hover {
  transition: display 5s ease-in-out;
  display: block;
}
.card.hover .card-body {
  opacity: 1; /* Displayed when parent .card is hovered */
  transform: translateY(0); /* Move to the top */
}


</style>


















