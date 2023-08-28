import { ref, computed } from 'vue'

const carrinho = ref({
    total: 0,
    itens: []
})


function addAosCarrinho({ nome, descricao, preco, img, quantidade }) {
  carrinho.value.itens.push({  nome, descricao, preco, img, quantidade })
  carrinho.value.total += carrinho.value.itens.preco * carrinho.value.itens.quantidade
}


function remove(index) {
  carrinho.value.itens.splice(index, 1)
}

// const valorTotal = ref(0)

// function atualizarTotal() {
//   carrinho.value.total = carrinho.value.itens.reduce((total, item) => total + item.preco, 0)
// }

// function removerItem(index) {
//   if (index >= 0 && index < carrinho.value.itens.length) {
//     carrinho.value.itens.splice(index, 1)
//     atualizarTotal()
//   }
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





// function add(index) {
//   carrinho.value[index].quantidade++
//   // totalL()
// }
// function subtrair(index) {
//   if (produtos.value[index].quantidade > 0) {
//     produtos.value[index].quantidade--
//   }
//   totalL()
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



const estaCarrinhoVazio = computed(() => carrinho.value.itens.length === 0)

export { carrinho, estaCarrinhoVazio, addAosCarrinho, remove }
