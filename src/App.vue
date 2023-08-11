<script setup>
import HeaderPrincipal from './components/header/HeaderPrincipal.vue';
import FullFooter from './components/footer/FullFooter.vue';
import FullCard from './components/main/FullCard.vue'

</script>
<!-- Centralizar Logo do Header!!! -->
<!-- Centralizar Menu do Footer!!! -->
<template>
  <header>
    <header-principal />
  </header>

  <main>
    <full-card/>
    <br>
      <h1 class="h1-main-caixa">Confira nossas marcas!</h1>
    <div class="wrap-caixa-preta">
      <div class="caixa-preta-img ">
        1
    </div>
    </div>
    <br>
    <div class="wrap-caixa-preta">
      <div class="caixa-preta-img ">
        1
    </div>
    </div>
  </main>

  <div class="container">
      <full-footer />
  </div>

</template>


<style scoped>
.container {
  padding: 0;
  max-width: 100%;
  margin: 0 75px;
  display: flex;


}
.caixa-preta-img{
  background-color: black;
  width: 1600px;
  height: 600px;
  margin-top: 20px;
}
.wrap-caixa-preta{
  display: flex;
  justify-content: center;
  align-items: center;
}
.h1-main-caixa{
  text-align: center;
  margin-top: 150px;
  margin-bottom: 30px;
}

</style>