<template lang="">
    <section class="w-100 row mt-5">
        <div class="col-8">
            <h4>Prazo e Entrega</h4>
            <hr>
            <div class="input-group mb-3 w-50">
                <input type="text" class="form-control" placeholder="000.000-00" aria-label="Recipient's username" aria-describedby="basic-addon2">
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary border-none" type="button" @click="mostrar">Calcular</button>
                </div>
                <div v-if="mostrar === !mostrar">
                    <p>
                        Frete Grátis
                    </p>
                </div>
            </div>
            <p>De 3 a 5 dias úteis após a confirmação do pagamento.</p>
            <p>Para mais informações, acesse o link abaixo:</p>
            <router-link to="/duvidas">
                <p class="text-rox">
                    Prazo e Entrega
                </p>
            </router-link>
        </div>
        <div class="col-4">
            <div class="text-left">
                <h4>Resumo</h4>
                <hr>
                <p>Subtotal: R$ {{totalDosPrecos.toFixed(2)}}</p>
                <hr>
                <p>Frete: Grátis</p>
                <hr>
                <p class="text-success">Desconto: R$ 0,00</p>
                <hr>
                <p>Total: R$ {{totalDosPrecos.toFixed(2)}}</p>
                <hr>
                <button class="btn btn-primary w-100">Finalizar Compra</button>
            </div>
        </div>
    </section>
</template>
<script setup>
import {ref} from 'vue'
import { totalDosPrecos } from '../../_data/carrinho'
const mostrar = ref(false)
</script >
<style >
    
</style>