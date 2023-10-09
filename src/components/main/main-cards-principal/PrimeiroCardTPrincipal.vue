<script setup>
import { ref } from 'vue';
import { cosmeticos } from '@/_data/cardPrincipais.js'
import { addAosCarrinho } from '../../../_data/carrinho';
import { addAosFavoritos } from '../../../_data/favorito'
// import { add } from '@/_data/carrinho.js'


const screenWidth = ref(window.innerWidth);
window.addEventListener('resize', () => {
  screenWidth.value = window.innerWidth;
});
</script>

<template>
  <div class="card-cosmeticos">
    <div v-for="(categoria, index) in cosmeticos" :key="index" class="categoria-card">
      <div class="m">
      <h1 style="text-align: center;">{{ categoria.tipo }}</h1>
      </div>
      <div class="produtos-card">
        <div v-for="produto in categoria.produtos" :key="produto.id" class="flexCard">
          <!-- ... rest of your card content ... -->
          <div class="img-coracao">
            <button type="button" @click="addAosFavoritos(produto)">
              <i class="bi bi-heart logo-icon"></i>
              <i class="bi bi-heart-fill filled-heart-icon"></i>
            </button>
          </div>
          <router-link :to="`/produto/${categoria.tipo}/${produto.id}`" class="header-links">
            <div class="tamanho-card">
              <img
                :src="produto.img"
                class="capa-img"
              />
            </div>
            <router-link to="/oboticario">
              <div class="img-oboticario">
                <img src="@/assets/img/Main-img/Main-Cards/logo.oboticário.png" alt="" class="logo-img" />
              </div>
            </router-link>
            <h5 class="titulo-Cos">{{ produto.nome }}</h5>
            <p class="descricao-Cos">{{ produto.descicao }}</p>
            <p class="preco-Cos">R$ {{ produto.preco }}</p>
          </router-link>
          <button type="button" class="Button-CardPay" @click="addAosCarrinho(produto)">
            <img src="@/assets/img/Main-img/Main-Cards/icone.sacola.png" alt="" class="Btn-Pay" />
            <img src="@/assets/img/Main-img/Main-Cards/icone.sacolaBranca.png" alt="" class="White-Bag" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>


.carousel {
  width: 100%;
  overflow: hidden;
}

.slide-item {
  text-align: center;
  padding: 10px;
}

.img-coracao {
  display: flex;
  justify-content: flex-start;
  max-width: 227px;
  position: relative;
}

.logo-icon,
.filled-heart-icon {
  position: absolute;
  top: 0;
  left: 100%;
  color: #4d066b;
}

.header-links {
  font-family: 'Jost', sans-serif;
  text-decoration: none;
  color: #000000;
  cursor: pointer;
}
.card-cosmeticos {
  display: flex;
  flex-wrap: wrap;
  margin-left: 50px;

}

.flexCard {
  flex: 0 0 calc(25% - 20px);
  /*Vai Colocar cada card em 25%*/
  /* margin: 10px; */
  /* align-items: center;  Debater com a equipe*/
  display: flex;
  flex-direction: column;

  justify-content: space-around;
}

.Button-CardPay {
  margin-left: -1px;
  width: 218px;
  height: 30px;
  border: 2px solid #4d066b;
  background-color: transparent; 
  transition: background-color 0.3s, border-color 0.3s;
  position: relative;
}

.Button-CardPay:hover {
  background-color: #4d066b;
  border-color: #4d066b; 
}

.Btn-Pay,
.White-Bag {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  padding-bottom: 2px;
}

.White-Bag {
  display: none;
}

.Button-CardPay:hover .White-Bag {
  display: block;
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

  transition: transform 0.3s ease;
}


.h1-card-main {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;
}
.img-coracao {
  display: flex;
  justify-content: flex-start;
  max-width: 227px;
  position: relative;
}
.logo-icon,
.filled-heart-icon {
  position: absolute;
  top: 0;
  left: 100%;
  color: #4d066b;
}

.logo-icon {
  z-index: 2;
}

.filled-heart-icon {
  opacity: 0;
  transform: scale(0) translateX(100%);
  transition: transform 0.3s ease, opacity 0.3s ease;
  z-index: 1;
}

.img-coracao:hover .filled-heart-icon {
  opacity: 1;
  transform: scale(1) translateX(0);
  z-index: 2;
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
font-size: 24px;
margin-bottom: 20px;
background-color: #194B3B;
padding: 10px;

@media (max-width: 768px) {
  font-size: 20px;
  padding: 8px;
}
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
.texto-principal {
display: flex;
align-items: center;
justify-content: center;
font-size: 26px;
width: 100%;
margin-left: -24px;
}

@media screen and (max-width: 768px) {
.flexCard {
  flex: 0 0 calc(50% - 20px);
}
}

@media screen and (max-width: 576px) {
.flexCard {
  flex: 0 0 100%;
}
}
h1{
  text-decoration: none;
  margin-left: -45px;
}
.m{
  margin-top: 60px;
  margin-bottom: 60px;
}
</style>