<script setup>
import malbecCard from '@/components/main/main-cards-principal/MalbecCard.vue';
</script>

<template>
    <h1>Perfumaria</h1>
    <div>
        <div class="wrapH2">
            <h2 class="texto-principal">Malbec</h2>
        </div>
        <malbec-card/>
    </div>
</template>

<style scoped>
h1{
    text-decoration: none;
    text-align: center;
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
}

</style>