import { ref, onMounted } from 'vue';
import { useStore } from '@/store'; // 

export default {
  setup() {
    const store = useStore();

    const novoProduto = ref({});

    const adicionarProduto = async () => {
      await store.adicionarProduto(novoProduto.value);
      novoProduto.value = {}; // Limpa o novoProduto após a adição
    };

    const atualizarProduto = async (produto) => {
      await store.atualizarProduto(produto);
    };

    const excluirProduto = async (id) => {
      await store.excluirProduto(id);
    };

    onMounted(() => {
      store.carregarProdutos();
    });

    return {
      store,
      novoProduto,
      adicionarProduto,
      atualizarProduto,
      excluirProduto,
    };
  },
};
