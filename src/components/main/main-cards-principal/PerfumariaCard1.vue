<script setup>
import { onMounted, ref } from 'vue';
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
    img: 'https://i.ibb.co/qmRY4KH/malbec.png',
    hover: 'Com fragrâncias marcantes como um bom vinho, as fragrâncias Malbec são as primeiras do mundo a serem feitas com álcool vínico.'
  },
  {
    id: 2,
    marca: 'Coffe',
    img: 'https://i.ibb.co/wpT2nhL/coffee.png',
    hover: 'Inspirada nos mais nobres grãos de café, a marca de perfumaria Coffee do Boticário traz fragrâncias masculinas e femininas que encantam com sua riqueza olfativa! Confira os produtos e sinta o aroma do café no ar!'
  },
  {
    id: 3,
    marca: 'Botica',
    img: 'https://i.ibb.co/f1mGNbJ/dr-botica.png',
    hover: 'Na floresta das flores perfumadas, onde os peixes moram em bolhas de sabão, vive o Dr. Botica, um mago com o poder do trovão. Com a ajuda do pássaro Fido, seu corajoso assistente, ele prepara magias para um mundo mais belo.'
  },
  {
    id: 4,
    marca: 'Egeo',
    img: 'https://i.ibb.co/s2fqRjY/egeo.png',
    hover: 'Egeo é assim, aquela vibe boa que você sente de longe. Conheça todas as versões do Egeo Feminino e Egeo Masculino e encontre a fragrância que mais tem a ver com você.'
  },
  {
    id: 5,
    marca: 'Lily',
    img: 'https://i.ibb.co/jMsVyHd/lily.png',
    hover: 'Através do raro processo artesanal de enfleurage, os eaux de parfum de Lily possuem em sua essência as melhores notas dos lírios, criando fragrâncias únicas, delicadas e marcantes.'
  },
]


onMounted(() => {
  perfumaria.forEach(() =>
    expand.value.push(false)
  )
})
</script>


<template>
  <v-row>
    <v-col v-for="(produto, index) in perfumaria" :key="index" class="col card-perfumaria">
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
  border-top: 3px solid green;
  border-bottom: 3px solid green;
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
  background-color: green;
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








