<script setup>
import FullCard from '@/components/main/FullCard.vue'
import Carrosel from '@/components/main/Carrosel.vue';
import BlackProg from '@/components/main/BlackProg.vue';

import axios from 'axios';
import { ref, onMounted } from 'vue';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk1MDYwNzg4LCJpYXQiOjE2OTUwNjA0ODgsImp0aSI6IjBhZjZjMzI5ZWMxNTQ4YmY4YWE2MzYxOWQ3MzQxNTgxIiwidXNlcl9pZCI6MX0.ZvnIP3HhiYSTPorvtHBGMh5DFYCB4M1Xy-w6NlvpEVw'

const marcasAPI = async () => {
  try {
    const { data } = await axios.get('/marcas/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.error('Erro ao buscar todas as marcas:', error);

    // Se o token expirar, renova o token e tenta novamente a solicitação
    if (error.response.status === 401) {
      const newToken = await renovarToken();
      return marcasAPI({ headers: { Authorization: `Bearer ${newToken}` } });
    }

    throw error;
  }
};

const renovarToken = async () => {
  // Renova o token aqui
  // ...
};

const marcas = ref([]);

const buscarMarcas = async () => {
  try {
    marcas.value = await marcasAPI();
  } catch (error) {
    console.error('Erro ao buscar todas as marcas:', error);
  }
};

onMounted(buscarMarcas);

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