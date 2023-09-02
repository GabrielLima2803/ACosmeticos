<script setup>
import { carrinho, remove, aumentarQuantidade, diminuirQuantidade} from '../../_data/carrinho'

</script>

<template>
  <div v-for="(item, index) in carrinho.itens" :key="index" class="produto-card">
    <div class="row">
        <div class="col-5">
            <div class="w-100 h-100 d-flex align-items-center">
                <img :src="item.img" alt="" width="100" height="100">
                <div class="pl-5">
                    <p class="p-0 mb-3">{{ item.nome }}</p>
                    <p class="p-0 mb-3">{{ item.descricao }}</p>

                </div>
            </div>
        </div>
        <div class="col-2 d-flex justify-center">
            <div class="w-100 h-100 d-flex justify-center align-items-center">
                <div class="d-flex mt-3">
                    <p class="py-1 px-2 border"> <button @click="aumentarQuantidade(item)"> + </button> </p>
                    <p class="py-1 px-2 border"> {{ item.quantidade }} </p>
                    <p class="py-1 px-2 border"> <button @click="diminuirQuantidade(item)"> - </button> </p>
                </div>
            </div>
        </div>
        <div class="col-2 d-flex justify-center">
            <div class="w-100 h-100 d-flex justify-center align-items-center">
                <p>{{ item.preco }}</p>
            </div>
        </div>
        <div class="col-2 d-flex justify-center">
            <div class="w-100 h-100 d-flex justify-center align-items-center">
                <p>{{ item.total.toFixed(2) }}</p>
                
            </div>
        </div>
        <div class="col d-flex justify-center">
            <div class="w-100 h-100 d-flex justify-center align-items-center">
                <button @click="remove" class="mb-3"><i class="bi bi-trash"></i></button>
            </div>
        </div>
    </div>
</div>
  </template>

  <style scoped>
    
  </style>