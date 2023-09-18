<script setup>
import FullCard from '@/components/main/FullCard.vue'
import Carrosel from '@/components/main/Carrosel.vue';
import BlackProg from '@/components/main/BlackProg.vue';

import axios from 'axios';
import { ref, onMounted } from 'vue';

const marcasAPI = async () => {
  try {
    const { data } = await axios.get('/marcas/');
    return data;
  } catch (error) {
    console.error('Erro ao buscar todas as marcas:', error);
    throw error;
  }
};

const marcaApi = marcasAPI();

const marcas = ref([]);

const buscarmarcas = async () => {
  marcas.value = await marcaApi;
};

onMounted(buscarmarcas);


</script>
<template>
    <div class="z-1">
    <carrosel />
    </div>
    <full-card />
    <black-prog/>

    <black-prog />
    aa  
    <div v-for="marca in marcas" :key="marca.id">
      {{ marca.tipo_do_Produto}}
    </div>
</template>

<style scoped>
</style>