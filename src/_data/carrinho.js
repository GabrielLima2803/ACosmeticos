import { ref, computed } from 'vue'

const carrinho = ref({
    total: 0,
    itens: [1]
})
const valorTotal = ref(0)

function add(index) {
  produtos.value[index].quantidade++
  totalL()
}







// function subtrair(index) {
//   if (produtos.value[index].quantidade > 0) {
//     produtos.value[index].quantidade--
//   }
//   totalL()
// }

// function addCarrinho(produto) {
//   carrinho.value.push({
//     id: produto.id,
//     nome: produto.nome,
//     preco: produto.preco,
//     quantidade: produto.quantidade,
//     total: produto.preco * produto.quantidade
//   })
//   carrinho.value.total += produto.preco * produto.quantidade
//   totalL()
//   produto.quantidade = 1
// }
// function totalL() {
//   valorTotal.value = 0
//   for (const item of carrinho.value) {
//     valorTotal.value += item.total
    
//   }
// }

// function limpaCarrinho() {
//   carrinho.value = []
// }

// function removeItem(index) {
//   if (index >= 0 && index < carrinho.value.length) {
//     const produtoIndex = produtos.value.findIndex((p) => p.id === carrinho.value[index].id);
//     if (carrinho.value[index].quantidade == 1) {
//       valorTotal.value -= produtos.value[produtoIndex].preco * carrinho.value[index].quantidade;
//       carrinho.value.splice(index, 1);
//     } else {
//       carrinho.value[index].quantidade--;
//       carrinho.value[index].total = produtos.value[produtoIndex].preco * carrinho.value[index].quantidade;
//       valorTotal.value -= produtos.value[produtoIndex].preco;
//     }
//   }
// }
// function remove(index) {
//   carrinho.value.splice(index, 1)
// }


const estaCarrinhoVazio = computed(() => carrinho.value.itens.length === 0)

export { carrinho, estaCarrinhoVazio, add }