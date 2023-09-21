<script setup>
import HeaderPrincipal from '@/components/header/HeaderPrincipal.vue';
import FullFooter from './components/footer/FullFooter.vue';
import PreLoader from '@/components/loading/PreLoader.vue'; // Importe o componente de indicador de carregamento
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const showPreloader = ref(false);

router.beforeEach(() => {
  showPreloader.value = true; // Exibir o indicador de carregamento antes da mudança de página
});

router.afterEach(() => {
  setTimeout(() => {
    showPreloader.value = false; // Ocultar o indicador de carregamento após a transição de página
  }, 500); // Defina um tempo limite para garantir que o indicador seja visível por um curto período
});
</script>

<template>
  <div id="main">

  </div>
  <div id="main">
    <header-principal />
    <div class="container-Principal">
      <router-view />
      <PreLoader v-if="showPreloader" />
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
  clear: both;
  margin: 0 auto;
}

.container {
  padding: 0;
  display: flex;
}

.max-footer {
  max-width: 1220px;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>
