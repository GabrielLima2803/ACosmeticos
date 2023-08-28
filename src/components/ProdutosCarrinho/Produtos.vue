<script setup>
import axios from 'axios';
const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzMTgzODU1LCJpYXQiOjE2OTMxODM1NTUsImp0aSI6ImExZmNjNjU2YWRkYjRjY2M4OGQ5OTcyZjMzNWM2NjQ4IiwidXNlcl9pZCI6MX0.lnJ-D7qzWX-p7SYkafx9BPTGukv9hX2Vgjv0qzdvDwU';
// http://localhost:8000/api/produtos/ Talvez funcione com isso ou com https://friendly-guide-x7wjqr5q7g93v6xp-8000.app.github.dev/api/produtos/
axios.get('https://friendly-guide-x7wjqr5q7g93v6xp-8000.app.github.dev/api/produtos/', {  
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
<template>
    <div>
        <div class="v-for" v-for="(produto, index) in produtos" :key="index">
          
        </div>
    </div>
</template>

<style scoped>
</style>