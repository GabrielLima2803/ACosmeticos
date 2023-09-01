import { ref, computed } from 'vue'

const valorTotal = ref(0)

const carrinho = ref({
  total: 0,
  itens: []
})

function add(item) {
  // Verifica se o item já está no carrinho
  const itemNoCarrinho = carrinho.value.itens.find(i => i.id === item.id);

  if (itemNoCarrinho) {
    // Se o item já estiver no carrinho, aumenta a quantidade
    itemNoCarrinho.quantidade++;
  } else {
    // Se o item não estiver no carrinho, adiciona-o
  
  // Atualiza o total do carrinho
  carrinho.value.total += item.preco;
}

function addAosCarrinho({ nome, descricao, preco, img, quantidade }) {
  const total = preco * quantidade
  const novoItem = { nome, descricao, preco, img, quantidade, total };
  carrinho.value.itens.push(novoItem);
  carrinho.value.total += total
  
}

function remove({ nome, descricao, preco, img, quantidade }) {
  carrinho.value.itens.splice({ nome, descricao, preco, img, quantidade }, 1)
}

function subtrair(index) {
  if (carrinho.value[index].quantidade > 0) {
    carrinho.value[index].quantidade--
  }
}



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

export { carrinho, estaCarrinhoVazio, addAosCarrinho, remove, valorTotal, subtrair, add }