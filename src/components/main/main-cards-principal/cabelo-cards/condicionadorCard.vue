<script setup>
const condicionador = [
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
        <div v-for="(condicionadores) in condicionador" :key="condicionador.id" class="card-margin flexCard">
              <div>
                  <img :src="condicionador.img" alt="Capa do livro" class="imgPropaganda" />
              </div>
          </div>
    </div>
</template>

<style scoped>

.card-cosmeticos {
  display: flex;
  /* align-items: center;
  justify-content: center; */
  width: 1120px;
  background-color: #464646;
}
.card-margin {
  margin-right: 0; /* Removendo a margem direita */
}

.imgPropaganda {
  margin: 0; /* Removendo margens */
  margin-right: 12px;
}

.wrapImg{
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>