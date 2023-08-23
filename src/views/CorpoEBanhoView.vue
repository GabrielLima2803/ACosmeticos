<script setup>
import NativaSpaCard from '@/components/main/main-cards-principal/CorpoBanho-Cards/NativaSpaCard.vue';
import CuideSeBemCard from '@/components/main/main-cards-principal/CorpoBanho-Cards/CuideSeBemCard.vue';
import LizCard from '@/components/main/main-cards-principal/CorpoBanho-Cards/LizCard.vue';
import MalbecCorpoCard from '@/components/main/main-cards-principal/CorpoBanho-Cards/MalbecCorpoCard.vue';
import ZaadCard from '@/components/main/main-cards-principal/CorpoBanho-Cards/ZaadCard.vue';

</script>

<template>
    <h1>Corpo e Banho</h1>
    <div>
        <div class="wrapH2">
            <h2 class="texto-principal">Nativa Spa</h2>
        </div>
        <nativa-spa-card/>
        <div class="wrapH2">
            <h2 class="texto-principal">Cuide Se Bem</h2>
        </div>
        <cuide-se-bem-card/>
        <div class="wrapH2">
            <h2 class="texto-principal">Liz</h2>
        </div>
        <liz-card/>
        <div class="wrapH2">
            <h2 class="texto-principal">Malbec</h2>
        </div>
        <malbec-corpo-card/>
        <div class="wrapH2">
            <h2 class="texto-principal">Zaad</h2>
        </div>
        <zaad-card/>
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