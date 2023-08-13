<script setup>
import HeaderPrincipal from './components/header/HeaderPrincipal.vue';
import FullFooter from './components/footer/FullFooter.vue';

</script>
<!-- Centralizar Logo do Header!!! -->
<!-- Centralizar Menu do Footer!!! -->
<template>
  <header>
    <header-principal />
  </header>

  <div class="container-Principal">
    <main>
      <router-view />
    </main>
    <div class="container max-footer">
      <full-footer />
    </div>
  </div>
</template>


<style scoped>
.container-Principal {
  max-width: 1420px;
  clear: both;
  margin: 0 auto
}

.container {
  padding: 0;
  display: flex;
}

.max-footer {
  max-width: 1220px;
}
</style>