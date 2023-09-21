<script setup>

import FullFooter from './components/footer/FullFooter.vue';
import HeaderPrincipal from '@/components/header/HeaderPrincipal.vue';

</script>

<template>
  <div id="main">
    <header-principal />
    <div class="container-Principal">
      <router-view />
      <div class="container max-footer">
        <full-footer />
      </div>
    </div>
  </div>
</template>


<style scoped>

#main {
  display: flex;
  flex-direction: column;
}
.container-Principal {
  max-width: 1420px;
  /* offset-position: 50px; */
  clear: both; 
  margin: 0 auto
  /* posi */
}

.container {
  padding: 0;
  display: flex;
}

.max-footer {
  max-width: 1220px;
}

.coisa {
  position: sticky;
  top: 0;
}
</style>