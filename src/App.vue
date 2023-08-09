<script setup>
import HeaderPrincipal from './components/header/HeaderPrincipal.vue';
// import FullFooter from './components/footer/FullFooter.vue';

const cosmeticos = [
    {
    id: 1,
    nome: 'Zaad Expedition',
    descicao: 'Eau De Parfum 95ml',
    preco: 'R$ 284,90',
    img: 'https://shoppingalso2021.vtexassets.com/arquivos/ids/254976/image-f03370532d32414c8b0e40c9820de357.jpg?v=638029428465700000',
  },
  {
    id: 2,
    nome: 'Zaad Expedition',
    descicao: 'Eau De Parfum 95ml',
    preco: 'R$ 284,90',
    img: 'https://shoppingalso2021.vtexassets.com/arquivos/ids/254976/image-f03370532d32414c8b0e40c9820de357.jpg?v=638029428465700000',
  },
  {
    id: 3,
    nome: 'Zaad Expedition',
    descicao: 'Eau De Parfum 95ml',
    preco: 'R$ 284,90',
    img: 'https://shoppingalso2021.vtexassets.com/arquivos/ids/254976/image-f03370532d32414c8b0e40c9820de357.jpg?v=638029428465700000',
  },
  {
    id: 4,
    nome: 'Zaad Expedition',
    descicao: 'Eau De Parfum 95ml',
    preco: 'R$ 284,90',
    img: 'https://shoppingalso2021.vtexassets.com/arquivos/ids/254976/image-f03370532d32414c8b0e40c9820de357.jpg?v=638029428465700000',
  },
  
]



</script>

<template>
  <header>
    <header-principal />
  </header>

  <div class="container">
    <main>
      <!-- Centralizar Logo do Header!!! -->
      <!-- Centralizar Menu do Footer!!! -->

      <div class="card-cosmeticos">
        <div v-for="(cosmetico) in cosmeticos" :key="cosmetico.id" class="card-margin">
          <div class="wrap-img">
            <img :src="cosmetico.img" alt="Capa do livro" class="capa-img" />
          </div>
          <h5 class="titulo-Cos">
            {{ cosmetico.nome}}
          </h5>
          <p class="descricao-Cos">
            {{ cosmetico.descicao }}
          </p>
          <p class="preco-Cos">
            {{ cosmetico.preco }}
          </p>
          <button type="button" class="Button-CardPay"> <img src="@/img/Main-img/Main-Cards/icone.sacola.png" alt="" class="Btn-Pay"> </button>

        </div>

      </div>
    </main>

    <!-- <full-footer/> -->
    
  </div>
</template>


<style scoped>
.card-cosmeticos {
  width: 300px;
  height: 340px;
  padding: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;

}

.wrap-img {
  display: flex;
  justify-content: center;
  align-items: center;
}

.Button-CardPay {
  width: 100%;
  border: 2px solid #43055D;
  background-color: #F4F4F4;
}

.Btn-Pay {
  width: 15px;
  
}
.capa-img{
  width: 240px;
  margin-right: 10px;
  padding: 5px;
  cursor: pointer;
}
.card-margin{
  margin-right: 100px;
}
</style>