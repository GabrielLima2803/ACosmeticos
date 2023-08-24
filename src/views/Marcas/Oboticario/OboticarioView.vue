<script setup>
// import HeaderOboticario  from './components/header/HeaderOboticario.vue';
// import FullFooter from './components/footer/FullFooter.vue';
import PropagandaCard from '@/components/main/PaginaOboticario/PropagandaCard.vue';
import PerfumariaCard1 from '@/components/main/PaginaOboticario/PerfumariaCard1.vue';
import CorpoBanhoCard from '@/components/main/PaginaOboticario/CorpoBanhoCard.vue';
import MaquiagemCard from '@/components/main/PaginaOboticario/MaquiagemCard.vue';
import CabeloCard from '@/components/main/PaginaOboticario/CabeloCard.vue';


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
     <h1 class="h1-card-main">Cabelos </h1>
     <div class="perfumaria">
      <router-link to="/cabelos">
      <cabelo-card/>
      </router-link>
     </div>
     <h1 class="h1-card-main">Perfumaria</h1>
     <div class="perfumaria">
      <router-link to="/perfumariaO">
      <perfumaria-card1/>
      </router-link>
     </div>
     <h1 class="h1-card-main">Corpo e Banho</h1>
     <div class="perfumaria">
      <router-link to="/corpoBanho">
      <corpo-banho-card/>
      </router-link>
     </div>
     <h1 class="h1-card-main">Maquiagem</h1>
     <div class="perfumaria">
      <router-link to="/maquiagem">
      <maquiagem-card/>
      </router-link>
     </div>
    </main>

    <!-- <full-footer/> -->
    
  </div>
</template>


<style scoped>
.container{
  display: flex;
  justify-content: center;
  align-items: center;
}
.h1-card-main {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;
  text-decoration: none;
  font-size: 24px;
}
h1{
  font-size: 30px;
}
.propagandas{
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>