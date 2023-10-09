      <script setup>
import { ref, onMounted } from 'vue';
import ProdutosApi from '@/API/produtos.js';
import MarcasApi from '@/API/marcas.js';

const produtos = ref([]);
const novoProduto = ref({});
const marcas = ref([]);

const carregarMarcas = async () => {
  const api = new MarcasApi();
  marcas.value = await api.buscarTodasAsMarcas();
};

const carregarProdutos = async () => {
  const api = new ProdutosApi();
  const idMarcaDesejada = 3; // ID da marca desejada, neste caso, 2
  const todosOsProdutos = await api.buscarTodosOsProdutos();
  produtos.value = todosOsProdutos.filter((produto) => produto.marca.id === idMarcaDesejada);
};

const adicionarProduto = async () => {
  const api = new ProdutosApi();
  await api.adicionarProduto(novoProduto.value);
  carregarProdutos();
};

onMounted(() => {
  carregarProdutos();
  carregarMarcas();
});
      </script>
<template>
  <div class="z-1">
    <carrosel />
  </div>
  <full-card />
  <black-prog />

  <black-prog />

  <!-- --- -->

  <div>
    <h1>Lista de Produtos</h1>

    <!-- Formulário para adicionar um novo produto -->
    <form @submit.prevent="adicionarProduto">
      <input v-model="novoProduto.nome" placeholder="Nome do Produto" />
      <!-- Outros campos do produto aqui -->
      <button type="submit">Adicionar Produto</button>
    </form>

    <!-- Lista de Produtos da marca com ID 2 -->
    <ul>
      <li v-for="produto in produtos" :key="produto.id">
        {{ produto.nome }}
      </li>
    </ul>
  </div>

  <div>
    <h1>Lista de Marcas</h1>
    <!-- Lista de Marcas -->
    <ul>
      <li v-for="marca in marcas" :key="marca.id">
        {{ marca.nome }}
      </li>
    </ul>
  </div>
</template>


<style scoped></style>
