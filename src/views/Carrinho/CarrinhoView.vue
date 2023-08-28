<script setup>
import { useCartStore } from '@/store/cart';
import CarrinhoResumo from '@/components/Carrinho/CarrinhoResumo.vue';
import CarrinhoVazio from '@/components/Carrinho/CarrinhoVazio.vue';

const cartStore = useCartStore().getCart
</script>

<template>
    <carrinho-vazio v-if="cartStore.length === 0" />
    <carrinho-resumo v-else />
</template>

<style scoped>

</style>