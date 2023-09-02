import { ref, computed } from 'vue'

const valorTotal = ref(0)

const carrinho = ref({
  total: 0,
  itens: []
})



function addAosCarrinho({ nome, descricao, preco, img, quantidade }) {
  const total = preco * quantidade
  const novoItem = { nome, descricao, preco, img, quantidade, total };
  carrinho.value.itens.push(novoItem);
  carrinho.value.total += total
  
}

function remove({ nome, descricao, preco, img, quantidade }) {
  carrinho.value.itens.splice({ nome, descricao, preco, img, quantidade }, 1)
}


const aumentarQuantidade = (item) => {
  item.quantidade++
  item.total = item.preco * item.quantidade
  calcularTotal()
}

const diminuirQuantidade = (item) => {
  if (item.quantidade > 1) {
    item.quantidade--
    item.total = item.preco * item.quantidade
    calcularTotal()
  }
}

const calcularTotal = () => {
  carrinho.value.total = carrinho.value.itens.reduce((total, item) => total + item.total, 0)
}

const totalDosPrecos = computed(() => {
  return carrinho.value.itens.reduce((total, item) => total + item.total, 0);
});

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


// function limpaCarrinho() {
//   carrinho.value = []
// }

// function removeItem(index) {
//   if (index >= 0 && index < carrinho.value.length) {
//     const produtoIndex = carrinho.value.findIndex((p) => p.id === carrinho.value[index].id);
//     if (carrinho.value[index].quantidade == 1) {
//       valorTotal.value -= carrinho.value[produtoIndex].preco * carrinho.value[index].quantidade;
//       carrinho.value.splice(index, 1);
//     } else {
//       carrinho.value[index].quantidade--;
//       carrinho.value[index].total = carrinho.value[produtoIndex].preco * carrinho.value[index].quantidade;
//       valorTotal.value -= carrinho.value[produtoIndex].preco;
//     }
//   }
// }


const estaCarrinhoVazio = computed(() => carrinho.value.itens.length === 0)

export { carrinho, estaCarrinhoVazio, addAosCarrinho, remove, valorTotal, aumentarQuantidade, diminuirQuantidade, totalDosPrecos  }