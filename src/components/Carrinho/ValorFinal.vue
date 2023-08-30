<template lang="">
    <section class="w-100 row mt-5">
        <div class="col-8">
            <h4>Prazo e Entrega</h4>
            <hr>
            <div class="input-group mb-3 w-50 h-40" style="position: relative;">
                <input type="text" class="form-control h-40" placeholder="000.000-00" aria-label="Recipient's username" aria-describedby="basic-addon2">
                <button class="btn border" style="position: absolute; right: 0; top: 0; bottom: 0;" type="button" @click="mostrar = !mostrar">Calcular</button>
            </div>
            <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" class="text-rox">Não sei meu CEP</a>
            <div class ="mostrar" v-if="mostrar">
                <p>
                    Normal:  7 dias úteis (Frete Grátis)
                </p>
            </div>
            <router-link to="/duvidas">
                <p class="text-rox w-50 duvidas">
                    Dúvidas? Confira a nossa Política de Frete e Entregas.
                </p>
            </router-link>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue'
const mostrar = ref(false)
</script>
<style scoped>
.duvidas {
    margin-top: 20px;
}
.mostrar{
    margin-top: 20px;
}
</style>