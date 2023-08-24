<script setup>
import ShampooCard from '@/components/main/main-cards-principal/Cabelos-Card/ShampooCard.vue';
import CondicionadorCard from '@/components/main/main-cards-principal/Cabelos-Card/CondicionadorCard.vue';
import CremedePentearCard from '@/components/main/main-cards-principal/Cabelos-Card/CremedePentearCard.vue';
import FinalizadorCard from '@/components/main/main-cards-principal/Cabelos-Card/FinalizadorCard.vue';
import KitsCompletosCard from '@/components/main/main-cards-principal/Cabelos-Card/KitsCompletosCard.vue';

</script>

<template>
    <h1>Cabelos</h1>
    <div>
        <div class="wrapH2">
            <h2 class="texto-principal">Shampoo</h2>
        </div>
        <shampoo-card/>
        <div class="wrapH2">
            <h2 class="texto-principal">Condicionador</h2>
        </div>
        <condicionador-card/>     
        <div class="wrapH2">
            <h2 class="texto-principal">Creme de Pentear</h2>
        </div>
        <cremede-pentear-card/>     
        <div class="wrapH2">
            <h2 class="texto-principal">Finalizador</h2>
        </div>
        <finalizador-card/>
        <div class="wrapH2">
            <h2 class="texto-principal">Kits Completos</h2>
        </div>
        <kits-completos-card/>
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