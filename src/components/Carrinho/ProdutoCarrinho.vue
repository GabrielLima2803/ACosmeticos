<script setup>
import { carrinho, remove } from '../../_data/carrinho.js';


</script>

<template>
    <div v-for="(item, index) in carrinho.itens" :key="index">
        <div class="row">
            <div class="col-5">
                <div class="w-100 h-100 d-flex align-items-center">
                    <img :src="item.img" alt="" width="100" height="100">
                    <div class="pl-5">
                        <p class="p-0">{{ item.nome }}</p>
                        <p class="p-0">{{ item.descricao }}</p>
                    </div>
                </div>
            </div>
            <div class="col-2 d-flex justify-center">
                <div class="w-100 h-100 d-flex justify-center align-items-center">
                    <div class="d-flex mt-3">
                        <button class="py-1 px-2 border btn"> + </button>
                        <p class="py-1 px-2 border btn"> {{  }} </p>
                        <button class="py-1 px-2 border btn"> - </button>
                    </div>
                </div>
            </div>
            <div class="col-2 d-flex justify-center">
                <div class="w-100 h-100 d-flex justify-center align-items-center">
                    <p>R$ {{ item.preco }}</p>
                </div>
            </div>
            <div class="col-2 d-flex justify-center">
                <div class="w-100 h-100 d-flex justify-center align-items-center">
                    <p>R$ {{  }}</p>
                </div>
            </div>
            <div class="col d-flex justify-center">
                <div class="w-100 h-100 d-flex justify-center align-items-center">
                    <button  class="remove" @click="remove(item)">EX</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.remove {
    margin-bottom: 13px;
}

.btn {
    height: 34px;
}
</style>