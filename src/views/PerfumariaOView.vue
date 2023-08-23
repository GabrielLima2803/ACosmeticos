<script setup>
import MalbecCard from '@/components/main/main-cards-principal/Perfumaria-Cards/MalbecCard.vue';
import CoffeCard from '@/components/main/main-cards-principal/Perfumaria-Cards/CoffeCard.vue';
import DrBoticaCard from '@/components/main/main-cards-principal/Perfumaria-Cards/DrBoticaCard.vue';
import EgeoCard from '@/components/main/main-cards-principal/Perfumaria-Cards/EgeoCard.vue';
import LilyCard from '@/components/main/main-cards-principal/Perfumaria-Cards/LilyCard.vue';

</script>

<template>
    <h1>Perfumaria</h1>
    <div>
        <div class="wrapH2">
            <h2 class="texto-principal">Malbec</h2>
        </div>
        <malbec-card/>
        <div class="wrapH2">
            <h2 class="texto-principal">Coffe</h2>
        </div>
        <coffe-card/>
        <div class="wrapH2">
            <h2 class="texto-principal">Dr Botica</h2>
        </div>
        <dr-botica-card/>
        <div class="wrapH2">
            <h2 class="texto-principal">Egeo</h2>
        </div>
        <egeo-card/>
        <div class="wrapH2">
            <h2 class="texto-principal">Lily</h2>
        </div>
        <lily-card/>
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