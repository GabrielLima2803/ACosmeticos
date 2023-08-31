<script setup>
import { carrinho } from '../../_data/carrinho'
</script>

<template>
  <div v-for="(item, index) in carrinho.itens" :key="index" class="produto-card">
    <div class="row">
        <div class="col-5">
            <div class="w-100 h-100 d-flex align-items-center">
                <img :src="item.img" alt="" width="150" height="150">
                <div class="pl-5">
                    <p class="p-0">{{ item.nome }}</p>
                    <p class="p-0">Tamanho: 0</p>
                    <p class="p-0">Cor: 0</p>
                </div>
            </div>
        </div>
        <div class="col-2 d-flex justify-center">
            <div class="w-100 h-100 d-flex justify-center align-items-center">
                <div class="d-flex mt-3">
                    <p class="py-1 px-2 border"> + </p>
                    <p class="py-1 px-2 border"> 0 </p>
                    <p class="py-1 px-2 border"> - </p>
                </div>
            </div>
        </div>
        <div class="col-2 d-flex justify-center">
            <div class="w-100 h-100 d-flex justify-center align-items-center">
                <p>R$ 0,00</p>
            </div>
        </div>
        <div class="col-2 d-flex justify-center">
            <div class="w-100 h-100 d-flex justify-center align-items-center">
                <p>R$ 0,00</p>
            </div>
        </div>
        <div class="col d-flex justify-center">
            <div class="w-100 h-100 d-flex justify-center align-items-center">
                <p>EX</p>
            </div>
        </div>
    </div>
</div>
  </template>

  <style scoped>
    
  </style>