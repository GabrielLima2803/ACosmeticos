<script setup>

import axios from 'axios';
import FullFooter from './components/footer/FullFooter.vue';
import HeaderPrincipal from '@/components/header/HeaderPrincipal.vue';

const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkyODk3NzYwLCJpYXQiOjE2OTI4OTc0NjAsImp0aSI6ImQ1N2Q1YTM1NzAxYzQ4ODlhN2M2ZTMyN2Y4MDQ5MzVmIiwidXNlcl9pZCI6MX0.xXUOwqsIO_aQOGYgC-xZyCHGRbTOJWfGUc2xMp0pcKs';

axios.get('http://localhost:8000/api/produtos/', {
  headers: {
    'Authorization': `Bearer ${accessToken}`
  }
})
  .then(response => {
    console.log('Resposta da API:', response.data);
  })
  .catch(error => {
    console.error('Erro na solicitação:', error);
  });

</script>
<!-- Centralizar Logo do Header!!! -->
<!-- Centralizar Menu do Footer!!! -->
<template>
   <header-principal />
  <div class="container-Principal">
      <router-view />
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