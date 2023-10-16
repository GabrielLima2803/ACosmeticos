<script setup>
import { ref, onMounted } from 'vue';
import ProdutosApi from '@/API/produtos.js';
import MarcasApi from '@/API/marcas.js';
import CarrinhoApi from '@/API/carrinho.js';
import FullCard from '@/components/main/FullCard.vue';
import Carrosel from '@/components/main/Carrosel.vue';
import BlackProg from '@/components/main/BlackProg.vue';

const produtos = ref([]);
const novoProdutoData = ref({ nome: '' });
const marcas = ref({ id: 0 });
const carrinho = ref({ itens: [] });
const mensagem = ref('');

const carregarMarcas = async () => {
  const api = new MarcasApi();
  marcas.value = await api.buscarTodasAsMarcas();
};

const carregarProdutos = async () => {
  const api = new ProdutosApi();
  const idMarcaDesejada = 6;
  const todosOsProdutos = await api.buscarTodosOsProdutos();
  produtos.value = todosOsProdutos.filter((produto) => produto.marca.id === idMarcaDesejada);
};

const adicionarProduto = async () => {
  const api = new ProdutosApi();
  try {
    await api.adicionarProduto(novoProdutoData.value);
    mensagem.value = 'Produto adicionado com sucesso!';
    novoProdutoData.value = { nome: '' };
    carregarProdutos();
  } catch (error) {
    mensagem.value = 'Erro ao adicionar o produto.';
  }
};

const adicionarCarrinho = async (produto) => {
  const api = new CarrinhoApi();
  try {
    await api.adicionarItemCarrinho(produto);
    mensagem.value = 'Produto adicionado ao carrinho com sucesso!';
    carrinho.value = { itens: [] };
  } catch (error) {
    mensagem.value = 'Erro ao adicionar o produto ao carrinho.';
  }
};

onMounted(() => {
  carregarMarcas();
  carregarProdutos();
});
</script>

<template>
  <div class="z-1">
    <Carrosel />
  </div>
  <FullCard />
  <BlackProg />
  <BlackProg />
  <br>
  <br>
  <br>
  <div>
    <h1>Lista de Produtos</h1>

    <form @submit.prevent="adicionarProduto">
      <input v-model="novoProdutoData.nome" placeholder="Nome do Produto" />
      <button type="submit">Adicionar Produto</button>
    </form>
    <ul>
      <li v-for="produto in produtos" :key="produto.id">
        <img :src="produto.capa.file" alt="Sem img">
        <p>{{ produto.nome }}</p>
        <p class="font">{{ produto.descricao }}</p>
        <p>R$ {{ produto.preco }}</p>
        <button class="text-white bg-black ml-3 btn mb-4" @click="adicionarCarrinho(produto)">
          Adicionar ao Carrinho
        </button>
      </li>
    </ul>
    <p v-if="mensagem">{{ mensagem }}</p>
  </div>
</template>


<style scoped>
p {
  font-size: 18px;
}

.font {
  font-size: 14px;
}
</style>
