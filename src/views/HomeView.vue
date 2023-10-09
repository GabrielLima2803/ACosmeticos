<script setup>
import FullCard from '@/components/main/FullCard.vue'
import Carrosel from '@/components/main/Carrosel.vue'
import BlackProg from '@/components/main/BlackProg.vue'
import { ref, onMounted } from 'vue'
import ProdutosApi from '@/API/produtos.js'

const produtos = ref([])
const novoProduto = ref({
})


const carregarProdutos = async () => {
  const api = new ProdutosApi()
  produtos.value = await api.buscarTodosOsProdutos()
}

const adicionarProduto = async () => {
  const api = new ProdutosApi()
  await api.adicionarProduto(novoProduto.value)
  carregarProdutos() 
}

const atualizarProduto = async (produto) => {
  const api = new ProdutosApi();
  await api.atualizarProduto(produto);
  carregarProdutos(); 
};

const excluirProduto = async (id) => {
  const api = new ProdutosApi();
  await api.excluirProduto(id);
  carregarProdutos(); 
};

onMounted(() => {
  carregarProdutos()
})
</script>
<template>
  <div class="z-1">
    <carrosel />
  </div>
  <full-card />
  <black-prog />

  <black-prog />
  <div>
    <h1>Lista de Produtos</h1>

    <!-- Formulário para adicionar um novo produto -->
    <form @submit.prevent="adicionarProduto">
      <input v-model="novoProduto.nome" placeholder="Nome do Produto" />
      <!-- Outros campos do produto aqui -->
      <button type="submit">Adicionar Produto</button>
    </form>

    <!-- Lista de Produtos -->
    <ul>
      <li v-for="produto in produtos" :key="produto.id">
        {{ produto.nome }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
