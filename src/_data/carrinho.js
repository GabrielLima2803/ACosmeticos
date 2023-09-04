import { ref, computed } from 'vue'

const valorTotal = ref(0)

const carrinho = ref({
  total: 0,
  itens: []
})



function addAosCarrinho({ nome, descricao, preco, img, quantidade }) {
  // Check if the item already exists in the cart
  const existingItem = carrinho.value.itens.find((item) => {
    return item.nome === nome && item.descricao === descricao;
  });

  if (existingItem) {
    // If the item exists, increment the quantity
    existingItem.quantidade += quantidade;
    existingItem.total = existingItem.preco * existingItem.quantidade;
  } else {
    // If the item doesn't exist, add it to the cart
    const total = preco * quantidade;
    const novoItem = { nome, descricao, preco, img, quantidade, total };
    carrinho.value.itens.push(novoItem);
  }

  // Recalculate the total
  calcularTotal();
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

const estaCarrinhoVazio = computed(() => carrinho.value.itens.length === 0)

export { carrinho, estaCarrinhoVazio, addAosCarrinho, remove, valorTotal, aumentarQuantidade, diminuirQuantidade, totalDosPrecos  }