<script setup>
import PrimeiroCardTPrincipal from './main-cards-principal/PrimeiroCardTPrincipal.vue';

</script>

<template>
    <h1 class="h1-card-main">Laçamentos</h1>
    <div class="container">
      <primeiro-card-t-principal />
    </div>
    <h1 class="h1-card-main mt-5">Mais Vendidos</h1>
    <div class="container">
      <primeiro-card-t-principal />
    </div>
</template>

<style scoped>
.container {
  padding: 0;
  max-width: 100%;
  margin: 0 75px;
  /* padding: 0px 100px 0px 100px; */
}
.h1-card-main {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;
}
h1{
  font-size: 30px;
}
</style>