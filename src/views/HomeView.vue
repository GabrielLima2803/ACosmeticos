<script setup>
import { ref, onMounted } from 'vue'
import ProdutosApi from '@/API/produtos.js'
import MarcasApi from '@/API/marcas.js'
import FullCard from '@/components/main/FullCard.vue'
import Carrosel from '@/components/main/Carrosel.vue'
import BlackProg from '@/components/main/BlackProg.vue'

const produtos = ref([])
const novoProduto = ref({})
const marcas = ref([])

const carregarMarcas = async () => {
  const api = new MarcasApi()
  marcas.value = await api.buscarTodasAsMarcas()
}

const carregarProdutos = async () => {
  const api = new ProdutosApi()
  const idMarcaDesejada = 4
  const todosOsProdutos = await api.buscarTodosOsProdutos()
  produtos.value = todosOsProdutos.filter((produto) => produto.marca.id === idMarcaDesejada)
}

const adicionarProduto = async () => {
  const api = new ProdutosApi()
  await api.adicionarProduto(novoProduto.value)
  carregarProdutos()
}

onMounted(() => {
  carregarProdutos()
  carregarMarcas()
})
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

    
    <form @submit.prevent="adicionarProduto">
      <input v-model="novoProduto.nome" placeholder="Nome do Produto" />
          <button type="submit">Adicionar Produto</button>
    </form>

    <ul>
      <li v-for="produto in produtos" :key="produto.id">
        <p>{{ produto.nome }}</p>
        <img :src="produto.capa ? produto.capa.file : ''" width="150" />
        <button
          class="text-white bg-black ml-3 btn mb-4"
          @click="adicionarProdutoAoCarrinho(produto)"
        >
          Adicionar ao Carrinho
        </button>
      </li>
    </ul>
  </div>

  <div>
    <h1>Lista de Marcas</h1>
    <!-- Lista de Marcas -->
    <ul>
      <li v-for="marca in marcas" :key="marca.id">
        {{ marca.id }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
p {
  font-size: 18px;
}
</style>
