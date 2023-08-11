<script setup>
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
    <div class="card-cosmeticos">
        <div v-for="(cosmetico) in cosmeticos" :key="cosmetico.id" class="card-margin flexCard">
            <div class="">
                <img :src="cosmetico.img" alt="Capa do livro" class="capa-img" />
            </div>
            <h5 class="titulo-Cos">
                {{ cosmetico.nome }}
            </h5>
            <p class="descricao-Cos">
                {{ cosmetico.descicao }}
            </p>
            <p class="preco-Cos">
                {{ cosmetico.preco }}
            </p>
            <button type="button" class="Button-CardPay"> <img src="@/img/Main-img/Main-Cards/icone.sacola.png" alt=""
                    class="Btn-Pay"> </button>
        </div>
    </div>
</template>

<style scoped>
.card-cosmeticos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0;
}

.flexCard {
    flex: 0 0 calc(25% - 60px);
    /*Vai Colocar cada card em 25%*/
    margin: 10px;
    /* align-items: center;  Debater com a equipe*/
    display: flex;
    flex-direction: column;
}

.Button-CardPay {
    width: 67%;
    border: 2px solid #43055D;
    background-color: #F4F4F4;
}

.Btn-Pay {
    width: 15px;
}

.capa-img {
    max-width: 71%;
    height: auto;
    margin-bottom: 10px;
    padding: 5px;
    cursor: pointer;
}

.h1-card-main {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 30px;
}
</style>