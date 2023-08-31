<script setup>
import { estaCarrinhoVazio } from '@/_data/carrinho.js'
import CarrinhoResumo from '@/components/Carrinho/CarrinhoResumo.vue';
import CarrinhoVazio from '@/components/Carrinho/CarrinhoVazio.vue';
</script>

<template>
    <carrinho-vazio v-if="estaCarrinhoVazio" />
    <carrinho-resumo v-else />
</template>

<style scoped>

</style>