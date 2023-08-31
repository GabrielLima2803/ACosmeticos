import { ref, computed } from 'vue'

const carrinho = ref({
    total: 0,
    itens: []
})
const valorTotal = ref(0)

function addAosCarrinho({ nome, descricao, preco, img }) {
  carrinho.value.itens.push({  nome, descricao, preco, img })
}

function subtrair(index) {
  if (carrinho.value[index].quantidade > 0) {
    carrinho.value[index].quantidade--
  }
  totalL()
}

function addCarrinho(produto) {
  carrinho.value.push({
    id: produto.id,
    nome: produto.nome,
    preco: produto.preco,
    quantidade: produto.quantidade,
    total: produto.preco * produto.quantidade
  })
  carrinho.value.total += produto.preco * produto.quantidade
  totalL()
  produto.quantidade = 1
}
function totalL() {
  valorTotal.value = 0
  for (const item of carrinho.value) {
    valorTotal.value += item.total
    
  }
}

function limpaCarrinho() {
  carrinho.value = []
}

function removeItem(index) {
  if (index >= 0 && index < carrinho.value.length) {
    const produtoIndex = carrinho.value.findIndex((p) => p.id === carrinho.value[index].id);
    if (carrinho.value[index].quantidade == 1) {
      valorTotal.value -= carrinho.value[produtoIndex].preco * carrinho.value[index].quantidade;
      carrinho.value.splice(index, 1);
    } else {
      carrinho.value[index].quantidade--;
      carrinho.value[index].total = carrinho.value[produtoIndex].preco * carrinho.value[index].quantidade;
      valorTotal.value -= carrinho.value[produtoIndex].preco;
    }
  }
}
function remove(index) {
  carrinho.value.splice(index, 1)
}


const estaCarrinhoVazio = computed(() => carrinho.value.itens.length === 0)

export { carrinho, estaCarrinhoVazio }