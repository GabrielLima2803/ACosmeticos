<template>
    <div class="row" v-for="(produto, index) in cart" :key="index" >
        <ProduCarrinho :produto="produto" />
    </div>
</template>
<script>
import ProduCarrinho from '@/components/Carrinho/ProduCarrinho.vue';
export default {
    props: {
        cart: {
            type: Array,
            required: true
        }
    },
    components: {
        ProduCarrinho
    },   
}
</script>
<style>
</style>