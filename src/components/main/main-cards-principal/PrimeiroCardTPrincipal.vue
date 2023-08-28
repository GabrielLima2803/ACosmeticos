<script setup>
import { ref } from 'vue';


const cosmeticos = 
  [
    {
  tipo: 'Laçamento!',
  produtos: [
    {
    id: 1,
    nome: 'Zaad Expedition',
    descicao: 'Eau De Parfum 95ml',
    preco: 'R$ 284,90',
    img: 'https://shoppingalso2021.vtexassets.com/arquivos/ids/254976/image-f03370532d32414c8b0e40c9820de357.jpg?v=638029428465700000',
  },
  {
    id: 2,
    nome: 'Botica 214 Verano en Firenze',
    descicao: 'Eau de Parfum Floral Frutal 75 ml',
    preco: 'R$ 189,90',
    img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B47553/botica-214_verao_em_firenze_frutal_B47553_segredinhos.jpg',
  },
  {
    id: 3,
    nome: 'Uomini Black',
    descicao: 'Desodorante Colônia 100ml',
    preco: 'R$ 164,90',
    img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B77484/UOMINI-DES-COL-BLACK-100ml-V4_B77484_segredinho.jpg',
  },
  {
    id: 4,
    nome: 'Dr. Botica Poção da Aventura',
    descicao: 'Colônia Infantil 120ml',
    preco: 'R$ 84,90',
    img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B70669/sophie_like_B70669_segredinhos.jpg',
  },
  ]
  },
  {
  tipo: 'Mais Vendidos!',
  produtos: [
    {
    id: 1,
    nome: 'Malbec Signature',
    descicao: 'Eau de Parfum 90ml',
    preco: 'R$ 309,90',
    img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B48134/MALBEC-EDP-SIGNATURE_V2_B48134_Segredinho.jpg',
  },
  {
    id: 2,
    nome: 'Egeo Choc ',
    descicao: 'Desodorante Colônia 90ml ',
    preco: 'R$ 129,90',
    img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B82689/egeo_choc_71133_segredinhos_B82689_.jpg',
  },
  {
    id: 3,
    nome: 'Capricho Tenho Super Poderes',
    descicao: 'Desodorante Colônia 50ml',
    preco: 'R$ 89,90',
    img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B72050/capricho_72050.jpg',
  },
  {
    id: 4,
    nome: 'Dr. Botica Poção da Aventura',
    descicao: 'Colônia Infantil 120ml',
    preco: 'R$ 84,90',
    img: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:best/v1/imagens/products/B83684/drbotica_pocao_aventura_B83684_segredinhos.jpg',
  },
  ]
  

} 
]


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
h1{
  text-decoration: none;
  margin-left: -45px;
}
.m{
  margin-top: 60px;
  margin-bottom: 60px;
}
</style>