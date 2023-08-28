<script setup>
// import { ref } from 'vue'
import FullCardPerfumaria from '@/components/main/CardsFullOboticario/FullCardPerfumaria.vue';

import { favoritos, remove } from '../../_data/favorito';

// function remove(index) {
//   carrinho.value.splice(index, 1)
// }

</script>

<template>
  <div>
    <div class="wrapFav">
      <h2>Favoritos ({{ favoritos.length }})</h2>
    </div>
    <div class="card-cosmeticos">
      <div v-for="(item, index) in favoritos" :key="index" class="produto-card">
        <div class="img-coracao">
          <button type="button" @click="remove(item)">
            <i class="bi bi-heart-fill coracao"></i>
        </button>
        </div>
        <router-link to="/produto" class="header-links">
          <div class="tamanho-card">
            <img :src="item.img" class="capa-img"  width="200"/>
          </div>
          <div class="img-oboticario">
            <img src="@/img/Main-img/Main-Cards/logo.oboticário.png" alt="O Boticário" class="logo-img" />
          </div>
          <h5 class="titulo-Cos">{{ item.nome }}</h5>
          <p class="descricao-Cos">{{ item.descricao }}</p>
          <p class="preco-Cos">{{ item.preco }}</p>
        </router-link>
          <button type="button" class="Button-CardPay">
            <img src="@/img/Main-img/Main-Cards/icone.sacola.png" alt="Adicionar ao carrinho" class="Btn-Pay" />
          </button>
      </div>
    </div>
  </div>
</template>
<style scoped>

/* Estilos gerais */
* {
  font-family: 'Jost', sans-serif;
}

.header-links {
  font-family: 'Jost', sans-serif;
  text-decoration: none;
  color: #000000;
  cursor: pointer;
}
.wrapFav {
  max-width: 1220px;
  margin: 0;
  margin-top: 30px;
  margin-left: 100px;
}

.card-cosmeticos {
  display: flex;
  margin-left: 50px;
}

/* Estilos para cada produto card */
.produto-card {
  flex: 0 0 calc(20% - 5px);
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.coracao{
  color: #4d066b;
}

.Button-CardPay {
  margin-left: -1px;
  width: 68%;
  border: 2px solid #4d066b;
  background-color: #f4f4f4;
}

.Btn-Pay {
  width: 20px;
  padding-bottom: 2px;
}

.capa-img {
  max-width: 71%;
  height: auto;
  margin-bottom: 10px;
  padding: 5px;
  cursor: pointer;
  width: 150px;
  height: 150px;
}


.h1-card-main {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 30px;
}

.img-coracao {
    display: flex;
    justify-content: flex-end;
    max-width: 227px;
}

.img-oboticario {
    display: flex;
    justify-content: flex-end;
    max-width: 227px;
}

.categoria-card {
  width: 100%;
  margin-bottom: 30px;
}

.wrapH2 {
  text-align: center;
  color: white;
  font-size: 120%;
  margin-bottom: 30px;
  margin-top: 30px;
  background-color: #194B3B;
}

.produtos-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.produto-card {
  flex: 0 0 calc(20% - 5px);
  /* rest of your product card styles */
}


</style>