<script setup>
import FullCard from '@/components/main/FullCard.vue'

</script>
<template>
    <full-card />
    <h1 class="h1-main-caixa">Confira nossas marcas!</h1>
    <div class="wrap-caixa-preta">
        <div class="caixa-preta-img ">
            1
        </div>
    </div>
    <div class="wrap-caixa-preta">
        <div class="caixa-preta-img ">
            1
        </div>
    </div>
</template>

<style scoped>
.caixa-preta-img {
    background-color: black;
    width: 1600px;
    height: 600px;
    margin-top: 20px;
}

.wrap-caixa-preta {
    display: flex;
    justify-content: center;
    align-items: center;
}

.h1-main-caixa {
    text-align: center;
    margin-top: 150px;
    margin-bottom: 30px;
}


h1 {
    font-size: 30px;
}
</style>