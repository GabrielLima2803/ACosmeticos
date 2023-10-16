<script setup>

import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { perfumaria1 } from '@/_data/perfumaria.js'

const router = useRouter()
const expand = ref([])

function enterImage(index) {
  expand.value[index] = true
}

function leaveImage(index) {
  expand.value[index] = false
}

function irPara(link) {
  router.push({name: 'perfumariaO', hash: `#${link}`})
}

onMounted(() => {
  perfumaria1.value.forEach(() =>
    expand.value.push(false)
  )
})

</script>


<template>
  <v-row>
    <v-col v-for="(produto, index) in perfumaria1" :key="index" class="col card-perfumaria"  @click="irPara(produto.link)">
        <!-- <div > -->
        <img @mouseenter="enterImage(index)" @mouseleave="leaveImage(index)" :src="produto.img"
          class="image-perfumaria" />
        <div class="card" :class="expand[index] ? 'hover' : ''" @mouseenter="enterImage(index)"
          @mouseleave="leaveImage(index)">
          <div class="card-content">
            <h2 class="card-title" :class="expand[index] ? 'hover' : ''">{{ produto.texto_card }}</h2>
            <div class="wrapBorde">
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

.wrapBorde {
  display: flex;
  align-items: center;
  justify-content: center;
}

.border-top {
  width: 45px;
  height: 3px;
  background-color: #43055D;
  opacity: 0;
  /* Initially hidden */
  transition: opacity 0.3s ease-in-out;
}

.card.hover .border-top {
  opacity: 1;
  /* Displayed when parent .card is hovered */
}

.card-content {
  padding: 1.5em;
  width: 200px;
  /* Adjust the width as needed */
  height: 200px;
}

.card.hover .card-content {
  transform: translateY(0);
  transition-delay: 0;
  width: 220px;
  /* Adjust the expanded width as needed */
  height: 220px;
  /* Adjust the expanded height as needed */
}

.card-body {
  display: none;
  opacity: 0;
  /* Initially hidden */
  font-size: small;
  text-align: center;
  transform: translateY(50%);
  /* Start from the center */
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out, filter 0.5s ease-in-out, font-size 0.5s ease-in-out;
}

.card-body.hover {
  transition: display 5s ease-in-out;
  display: block;
}

.card.hover .card-body {
  opacity: 1;
  /* Displayed when parent .card is hovered */
  transform: translateY(0);
  /* Move to the top */
}</style>