import { defineStore } from 'pinia';

export const useCarrinhoStore = defineStore('carrinho', {
  state: () => ({
    produtosNoCarrinho: {
      total: 0,
      itens: [],
    },
  }),
  actions: {
    async adicionarProdutoAoCarrinho(produto) {
      try {
        const response = await fetch('http://localhost:3000/api/adicionar-carrinho', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ productId: produto.id }),
        });

        if (response.ok) {
          console.log('Produto adicionado ao carrinho com sucesso');
          const { produtosNoCarrinho } = this;
          // Check if the item already exists in the cart
          const existingItem = produtosNoCarrinho.itens.find((item) => {
            return item.id === produto.id;
          });

          if (existingItem) {
            // If the item exists, increment the quantity
            existingItem.quantidade++;
            existingItem.total = existingItem.preco * existingItem.quantidade;
          } else {
            // If the item doesn't exist, add it to the cart
            const total = produto.preco * 1;
            const novoItem = { ...produto, quantidade: 1, total };
            produtosNoCarrinho.itens.push(novoItem);
          }

          this.calcularTotal();
          console.log('Carrinho atualizado:', produtosNoCarrinho);
        } else {
          console.error('Erro ao adicionar o produto ao carrinho:', response.statusText);
        }
      } catch (error) {
        console.error('Erro ao adicionar o produto ao carrinho:', error);
      }
    },
    async carregarCarrinho() {
      try {
        const response = await fetch('http://localhost:3000/api/carrinho');
        if (response.ok) {
          const { produtosNoCarrinho } = this;
          produtosNoCarrinho.itens = await response.json();
          this.calcularTotal();
        } else {
          console.error('Erro ao obter o carrinho:', response.statusText);
        }
      } catch (error) {
        console.error('Erro ao obter o carrinho:', error);
      }
    },
    async removerProdutoDoCarrinho(produto) {
      try {
        const response = await fetch(`http://localhost:3000/api/carrinho/${produto.id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          console.log('Produto removido do carrinho com sucesso');
          const { produtosNoCarrinho } = this;
          produtosNoCarrinho.itens = produtosNoCarrinho.itens.filter((item) => item.id !== produto.id);
          this.calcularTotal();
        } else {
          console.error('Erro ao remover o produto do carrinho:', response.statusText);
        }
      } catch (error) {
        console.error('Erro ao remover o produto do carrinho:', error);
      }
    },

    calcularTotal() {
      const { produtosNoCarrinho } = this;
      produtosNoCarrinho.total = produtosNoCarrinho.itens.reduce((total, item) => total + item.total, 0);
    },
    
  },
});
