<template lang="">
  <section class="w-100 row mt-5">
    <div class="col-8">
      <h4>Prazo e Entrega</h4>
      <hr>
      <div class="input-group mb-3">
        <input type="text" class="form-control tamanhoInput" placeholder="000.000-00" aria-label="Recipient's username" aria-describedby="basic-addon2">
        <div class="input-group-append">
          <button class="botaoCalcular" type="button" @click="mostrar = !mostrar">Calcular</button>
        </div>
      </div>
      <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" class="text-rox d-block">Não sei meu CEP</a>
      <div class="mostrar" v-if="mostrar">
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
                <router-link to="/indentificacao"> <button class="btn btn-primary w-100">  Finalizar Compra </button> </router-link>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue'
import { totalDosPrecos } from '../../_data/carrinho'
const mostrar = ref(false)
<<<<<<< HEAD
</script >
<style >
.botaoCalcular {
  background-color: white; /* Botões em branco */
  color: #43055d; /* Cor oficial da página */
  border: 0.5px solid #43055d; /* Cor oficial da página */
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  border-radius: 5px;
  
}

.botaoCalcular:hover {
  background-color: #43055d; /* Cor oficial da página no hover */
  color: white; /* Texto branco no hover */
}

.duvidas {
    margin-top: 20px;
}
.mostrar{
    margin-top: 20px;
}

</style>
=======
</script>
<style ></style>
>>>>>>> 40c61816eff2da1ece651ebf32c25b4abc305e9a
