<script setup>
// import HeaderOboticario  from './components/header/HeaderOboticario.vue';
// import FullFooter from './components/footer/FullFooter.vue';
import PropagandaCard from '@/components/main/PropagandaCard.vue';
import PerfumariaCard1 from '@/components/main/main-cards-principal/PerfumariaCard1.vue';


</script>

<template>
  <header>
    <!-- <header-oboticario /> -->
  </header>

  <div class="container">
    <main>
      <!-- Centralizar Logo do Header!!! -->
      <!-- Centralizar Menu do Footer!!! -->
     <div class="propagandas">
      <propaganda-card/>
     </div>
     <h1 class="h1-card-main">Perfumariaa</h1>
     <div class="perfumaria">
      <perfumaria-card1/>
     </div>
    </main>

    <!-- <full-footer/> -->
    
  </div>
</template>


<style scoped>
.h1-card-main {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;
  text-decoration: none;
  font-size: 23px;
}
h1{
  font-size: 30px;
}

</style>