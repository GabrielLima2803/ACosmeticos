import { createPinia } from 'pinia';
import ProdutosApi from '@/API/produtos.js';

const pinia = createPinia();

export const useProdutosStore = pinia.defineStore('produtos', {
  state: () => ({
    produtos: [],
  }),
  actions: {
    async carregarProdutos() {
      const api = new ProdutosApi();
      this.produtos = await api.buscarTodosOsProdutos();
    },
    async adicionarProduto(produto) {
      const api = new ProdutosApi();
      await api.adicionarProduto(produto);
      await this.carregarProdutos();
    },
    async atualizarProduto(produto) {
      const api = new ProdutosApi();
      await api.atualizarProduto(produto);
      await this.carregarProdutos();
    },
    async excluirProduto(id) {
      const api = new ProdutosApi();
      await api.excluirProduto(id);
      await this.carregarProdutos();
    },
  },
});