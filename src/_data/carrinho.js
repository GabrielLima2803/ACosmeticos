import { ref, computed } from 'vue'

const carrinho = ref({
    total: 0,
    itens: []
})

const estaCarrinhoVazio = computed(() => carrinho.value.itens.length === 0)

export { carrinho, estaCarrinhoVazio }