<template lang="">
    <div class="col-5">
            <div class="w-100 h-100 d-flex align-items-center">
                <img :src="produto.img" class="w-25" alt="">
                <div class="pl-5">
                    <p class="p-0">Nome: {{produto.nome}} </p>
                    <p class="p-0">Descrição: {{produto.descicao}}</p>
                </div>
            </div>
        </div>
        <div class="col-2 d-flex justify-center">
            <div class="w-100 h-100 d-flex justify-center align-items-center">
                <div class="d-flex mt-3">
                    <p @click="addProductToCart()" class="cursor-pointer py-1 px-2 border"> + </p>
                    <p class="py-1 px-2 border"> {{ count }} </p>
                    <p @click="removeProductToCart()" class="cursor-pointer py-1 px-2 border"> - </p>
                </div>
            </div>
        </div>
        <div class="col-2 d-flex justify-center">
            <div class="w-100 h-100 d-flex justify-center align-items-center">
                <p>R$ {{produto.preco}}</p>
            </div>
        </div>
        <div class="col-2 d-flex justify-center">
            <div class="w-100 h-100 d-flex justify-center align-items-center">
                <p>R$ {{ getPrecoTotal(produto.preco) }}</p>
            </div>
        </div>
        <div class="col d-flex justify-center">
            <div class="w-100 h-100 d-flex justify-center align-items-center">
                <svg @click="removeProductToCartBD(produto)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash cursor-pointer" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                </svg>
            </div>
        </div>
</template>
<script> 
import { useCartStore } from '@/store/cart';
export default {
  props: {
    produto: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    addProductToCart() {
      this.count++;
      this.$emit('addProductToCart', this.produto.preco);
    },
    removeProductToCart() {
      if (this.count <= 0) return;
      this.count--;
      this.$emit('removeProductToCart', this.produto.preco);
    },
    getPrecoTotal(preco) {
      const value = this.count * preco;
      return Math.round(value);
    },
    removeProductToCartBD(produto) {
        console.log(produto)
        useCartStore().remove(produto);
        this.$router.push('/');
    },
  }
};
</script>
<style>
    .cursor-pointer {
        cursor: pointer;
    }
</style>