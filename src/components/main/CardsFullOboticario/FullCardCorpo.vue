<script setup>
import { corpoBanho } from '@/_data/corpobanho.js'
import { ref } from 'vue'

const tipoSelecionado = ref('') // State to store selected type

// Function to set selected type
const setSelectedType = (tipo) => {
  tipoSelecionado.value = tipo
}

// Call the function to set the initial type
setSelectedType(corpoBanho[0].tipo)

const screenWidth = ref(window.innerWidth);
window.addEventListener('resize', () => {
  screenWidth.value = window.innerWidth;
});
</script>


<template>
    <div class="card-cosmeticos">
      <div v-for="(categoria, index) in corpoBanho" :key="index" class="categoria-card">
        <div class="wrapH2">

        <h2 class="texto-principal">{{ categoria.tipo }}</h2>
        </div>
        <div class="produtos-card">
          <div v-for="produto in categoria.produtos" :key="produto.id" class="flexCard">
            <!-- ... rest of your card content ... -->
            <div class="img-coracao">
              <img src="@/img/icon-Header/icon_Coração.png" alt="" class="logo-img" />
            </div>
            <div class="tamanho-card">
              <img :src="produto.img" class="capa-img" />
            </div>
            <div class="img-oboticario">
              <img src="@/img/Main-img/Main-Cards/logo.oboticário.png" alt="" class="logo-img" />
            </div>
            <h5 class="titulo-Cos">{{ produto.nome }}</h5>
            <p class="descricao-Cos">{{ produto.descricao }}</p>
            <p class="preco-Cos">{{ produto.preco }}</p>
            <button type="button" class="Button-CardPay">
              <img src="@/img/Main-img/Main-Cards/icone.sacola.png" alt="" class="Btn-Pay" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>

<style scoped>
.card-cosmeticos {
    display: flex;
    flex-wrap: wrap;
    margin-left: 50px;

}

.flexCard {
    flex: 0 0 calc(20% - 5px);
    /*Vai Colocar cada card em 25%*/
    /* margin: 10px; */
    /* align-items: center;  Debater com a equipe*/
    display: flex;
    flex-direction: column;

    justify-content: space-around;
}

.Button-CardPay {
    margin-left: -1px;
    width: 68%;
    border: 2px solid #4d066b;
    background-color: #F4F4F4;
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

</style>