<script setup>
const propaganda = [
  {
    id: 1,
    img: 'https://i.ibb.co/7Vqt3st/propaganda1.png',
  },
  {
    id: 2,
    img: 'https://i.ibb.co/vwgxZpH/propaganda2.png'
  },
  {
    id: 3,
    img: 'https://i.ibb.co/Dz0Mcnb/propaganda3.png',
  },
  {
    id: 4,
    img: 'https://i.ibb.co/NFRhbmg/propaganda4.png',
  },
  {
    id: 5,
    img: 'https://i.ibb.co/PjJnCL8/propaganda5.png',
  },
  {
    id: 6,
    img: 'https://i.ibb.co/crfK52P/propaganda6.png',
  },

]
</script>

<template>
    <div class="card-cosmeticos">
        <div v-for="(propagandas) in propaganda" :key="propagandas.id" class="card-margin flexCard">
              <div>
                  <img :src="propagandas.img" alt="Capa do livro" class="imgPropaganda" />
              </div>
          </div>
    </div>
</template>

<style scoped>

.card-cosmeticos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #464646;
}

.card-margin {
  margin-right: 0px; /* Espaçamento inferior entre as propagandas */
}

.imgPropaganda {
  max-width: 100%; /* Garante que a imagem não ultrapasse o contêiner */
  /* width: 100%; */
  height: auto;
 margin: 0px 12px 0px 12px;
}

@media screen and (max-width: 768px) {
  .card-cosmeticos {
    width: auto; /* Remove a largura fixa em telas pequenas */
  }
}

</style>