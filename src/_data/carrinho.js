import { ref, computed, watch } from 'vue'
import {useToast} from 'vue-toast-notification';
const $toast = useToast();
// Recupere o carrinho de compras do armazenamento local (se existir)
const carrinhoLocalStorage = JSON.parse(localStorage.getItem('carrinho')) || { total: 0, itens: [] }

const carrinho = ref(carrinhoLocalStorage)

function salvarCarrinhoNoLocalStorage() {
  // Salve o carrinho no armazenamento local
  localStorage.setItem('carrinho', JSON.stringify(carrinho.value))
}

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

  // Após adicionar ou modificar itens no carrinho, salve no armazenamento local
  salvarCarrinhoNoLocalStorage();
  $toast.success('Produto adicionado ao carrinho!', {
    position: 'top'
  })
}

function remove({ nome, descricao, preco, img, quantidade }) {
  carrinho.value.itens = carrinho.value.itens.filter((item) => {
    return !(item.nome === nome && item.descricao === descricao && item.preco === preco && item.img === img && item.quantidade === quantidade);
  });

  // Após remover itens do carrinho, salve no armazenamento local
  salvarCarrinhoNoLocalStorage();
}
const aumentarQuantidade = (item) => {
  item.quantidade++;
  item.total = item.preco * item.quantidade;
  calcularTotal();
  salvarCarrinhoNoLocalStorage();
}

const diminuirQuantidade = (item) => {
  if (item.quantidade > 1) {
    item.quantidade--;
    item.total = item.preco * item.quantidade;
    calcularTotal();
    salvarCarrinhoNoLocalStorage();
  }
}

const calcularTotal = () => {
  carrinho.value.total = carrinho.value.itens.reduce((total, item) => total + item.total, 0);
  salvarCarrinhoNoLocalStorage();
}

const totalDosPrecos = computed(() => {
  return carrinho.value.itens.reduce((total, item) => total + item.total, 0);
});

const estaCarrinhoVazio = computed(() => carrinho.value.itens.length === 0);

// Defina um ouvinte para salvar o carrinho no armazenamento local sempre que ele for modificado
watch(carrinho, () => {
  salvarCarrinhoNoLocalStorage();
});

export { carrinho, estaCarrinhoVazio, addAosCarrinho, remove, aumentarQuantidade, diminuirQuantidade, totalDosPrecos }
