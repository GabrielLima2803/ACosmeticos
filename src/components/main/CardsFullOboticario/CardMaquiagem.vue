<script setup>
import OlhosCard from '@/components/main/main-cards-principal/Maquiagem-Cards/OlhosCard.vue';
import BlushCard from '@/components/main/main-cards-principal/Maquiagem-Cards/BlushCard.vue';
import BocaCard from '@/components/main/main-cards-principal/Maquiagem-Cards/BocaCard.vue';
import RostoCard from '@/components/main/main-cards-principal/Maquiagem-Cards/RostoCard.vue';
import BrilhoCard from '@/components/main/main-cards-principal/Maquiagem-Cards/BrilhoCard.vue'
</script>

<template>
    <h1>Maquiagem</h1>
    <div>
        <div class="wrapH2">
            <h2 class="texto-principal">Olhos</h2>
        </div>
        <olhos-card/>
        <div class="wrapH2">
            <h2 class="texto-principal">Blush</h2>
        </div>
        <blush-card/>
        <div class="wrapH2">
            <h2 class="texto-principal">Boca</h2>
        </div>
        <boca-card/>
        <div class="wrapH2">
            <h2 class="texto-principal">Rosto</h2>
        </div>
        <rosto-card/>
        <div class="wrapH2">
            <h2 class="texto-principal">Brilho</h2>
        </div>
        <brilho-card/>
    </div>
</template>

<style scoped>
h1{
    text-decoration: none;
    text-align: center;
    margin: 50px;
}
h2{
    text-align: center;
    color: white;
    font-size: 140%;
}
.wrapH2{
    display: flex;
    align-items: center;
    justify-content: center;
}
.texto-principal{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #194B3B;
    width: 100%;
    height: 29px;
    margin: 50px;
}

</style>