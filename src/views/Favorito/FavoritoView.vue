<script setup>
import { favoritos, remove } from '../../_data/favorito';
import { ref } from 'vue';


const hoveredProduct = ref(null);

const setHoveredProduct = (item) => {
  hoveredProduct.value = item;
};

const getHeartIcon = (item) => {
  if (hoveredProduct.value === item) {
    return 'bi bi-heart coracao'; // Outline heart icon on hover
  } else {
    return item.initiallyFavorite ? 'bi bi-heart-fill coracao' : 'bi bi-heart coracao'; // Filled heart icon by default
  }
};
</script>

<template>
  <div>
    <div class="wrapFav">
      <h2 class="H2">Favoritos ({{ favoritos.length }})</h2>
    </div>
    <div class="wrapFavorito">
      <div v-for="(item, index) in favoritos" :key="index" class="produto-card">
        <div class="img-coracao">
          <button type="button" @click="remove(index)" @mouseenter="setHoveredProduct(item)" @mouseleave="setHoveredProduct(null)">
            <i :class="getHeartIcon(item)"></i>
          </button>
        </div>
          <router-link to="/produto" class="header-links">
            <div class="tamanho-card">
              <img :src="item.img" class="capa-img"  width="200"/>
            </div>
            <router-link to="/oboticario">
              <div class="img-oboticario">
                <img src="@/assets/img/Main-img/Main-Cards/logo.oboticário.png" alt="" class="logo-img" />
              </div>
            </router-link>
            <h5 class="titulo-Cos">{{ item.nome }}</h5>
            <p class="descricao-Cos">{{ item.descricao }}</p>
            <p class="preco-Cos">R$ {{ item.preco }}</p>
          </router-link>
          <button type="button" class="Button-CardPay" @click="addAosCarrinho(item)">
            <img src="@/assets/img/Main-img/Main-Cards/icone.sacola.png" alt="" class="Btn-Pay" />
            <img src="@/assets/img/Main-img/Main-Cards/icone.sacolaBranca.png" alt="" class="White-Bag" />
          </button>
        </div>
        </div>
    </div>
</template>

<style scoped>

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
button{
  border: none;
  background-color: white;
}
.Button-CardPay {
  margin-left: -1px;
  width: 218px;
  height: 30px;
  border: 2px solid #4d066b;
  background-color: transparent; /* Defina o fundo como transparente por padrão */
  transition: background-color 0.3s, border-color 0.3s; /* Adicione transição para a cor de fundo e borda */
  position: relative;
}

/* ... (seu código CSS existente) */

.Button-CardPay:hover {
  background-color: #4d066b; /* Mude a cor de fundo para roxo ao passar o mouse */
  border-color: #4d066b; /* Mude a cor da borda para roxo ao passar o mouse */
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
.wrapFavorito{
  display: flex;
  flex-direction: row;
}

@media (max-width: 767px) {
  
  .wrapFavorito{
    display: flex;
    flex-direction: column;
  }
  .produto-card {
    flex: 0 0 100%; 
    flex-wrap: wrap;
    margin-left: 100px;
    margin-top: 10px;
  }
  body {
    overflow-x: hidden; 
  }
}

/* Media query for tablet screens */
@media (min-width: 768px) {
  .wrapFav {
    margin-left: 10px; /* Adjust margins for better spacing */
  }
  .wrapFavorito {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; /* Display cards in a row with equal spacing */
  }
  .produto-card {
    flex: 0 0 calc(33.33% - 10px); /* Display 3 cards per row */
    margin-bottom: 20px; /* Add some space between rows */
  }
}

/* Media query for larger screens (e.g., desktop) */
@media (min-width: 1024px) {
  .wrapFav {
    margin-left: 100px; /* Reset margin for larger screens */
  }
  .produto-card {
    flex: 0 0 calc(25% - 10px); /* Display 4 cards per row */
  }
}
</style>