<script setup>
import { ref, computed } from 'vue';

const enviar = ref(false)
</script>

<template>
    <div>
        <button @click="enviar = !enviar">Produto</button>
        <div v-if="enviar">
            <div>
                <h6>Pirâramide olfatica</h6>
                <p>Conselho de Aplicação
                Aplique sob os lugares de maior circulação sanguínea.
                ORIENTAÇÕES AO CONSUMIDOR: Inflamável. Evite contato com os olhos. Não aplique em pele irritada ou lesionada e evite aplicar nas axilas. Caso ocorra irritação e/ou prurido no local, suspenda o uso imediatamente. Descontinue o uso em caso de sensibilização. Conserve o produto bem fechado, longe da luz e do calor excessivo. Somente para uso externo. Mantenha fora do alcance de crianças. Produto para perfumar e desodorizar a pele.
                Devido à presença de alguns ingredientes, a cor do produto pode variar, porém sem comprometer sua qualidade ou segurança.</p>
            </div>

        </div>
    </div>
</template>

<style scoped>

</style>