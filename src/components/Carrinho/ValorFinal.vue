<template lang="">
    <section class="w-100 row mt-5">
        <div class="col-8">
            <h4>Prazo e Entrega</h4>
            <hr>
            <div class="input-group mb-3 w-50">
                <input type="text" class="form-control" placeholder="000.000-00" aria-label="Recipient's username" aria-describedby="basic-addon2">
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary border-none" type="button">Calcular</button>
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
                <p>Subtotal: R$ 0,00</p>
                <hr>
                <p>Frete: R$ 0,00</p>
                <hr>
                <p>Desconto: R$ 0,00</p>
                <hr>
                <p>Total: R$ 0,00</p>
                <hr>
                <button class="btn btn-primary w-100">Finalizando Compra</button>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>