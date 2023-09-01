<template>
    <main class="d-flex justify-center flex-column align-items-center container">
        <TopoCarrinho />
        <section class="pt-5 container w-75">
            <div class="w-100">
                <div class="row pb-4">
                    <div class="col-5 d-flex justify-start">
                        Produtos
                    </div>
                    <div class="col-2 d-flex justify-center">
                        Quantidade
                    </div>
                    <div class="col-2 d-flex justify-center">
                        Valor Unitário
                    </div>
                    <div class="col-2 d-flex justify-center">
                        Valor Total
                    </div>
                    <div class="col">
                        <div class="w-100 h-100 d-flex justify-center align-items-center">
                          Excluir
                        </div>
                    </div>
                </div>
                <!-- <ProdutoCarrinho v-for="(produtos, index) in carrinho" :key="index" :produtos="produtos" /> -->
                <ProdutoCarrinho />
            </div>
            <div class="w-100 d-flex justify-end pr-5 mt-5 bold text-xl bg-gray2">
                <p><span class="pr-5">Valor Total:</span> R$ 0,00</p>
            </div>
            <ValorFinal />
        </section>
    </main>
</template>

<script setup> 
import ProdutoCarrinho from '@/components/Carrinho/ProdutoCarrinho.vue';
import TopoCarrinho from '@/components/Carrinho/TopoCarrinho.vue';
import ValorFinal from '@/components/Carrinho/ValorFinal.vue';
</script>

<style>
.bold {
    font-weight: bold;
    font-size: 1.1em;
}
.bg-rox {
    background-color: #D9D9D9;
    color: #43055D;
    padding: 1em 6em;
    position: relative;
}
.bg-gray {
    padding: 1em 6em;
    color: #43055D;
    background: #F4F4F4;
    position: relative;
}
.bg-gray2 {
    padding: 1em 6em;
    color: #43055D;
    background: #F4F4F4;
    position: relative;
}
.title-square {
    font-size: 16px;
    gap: 1em;
    align-items: center;
}
.bg-gray::after {
  content: '';
  position: absolute;
  top: 10px;
  right: -50px;
  width: 0;
  height: 0;
  transform: rotate(90deg);
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 40px solid #F4F4F4; /* Cor do triângulo */
  z-index: 10000;
}
.bg-rox::before{
  content: '';
  position: absolute;
  top: 10px;
  right: -50px;
  width: 0;
  height: 0;
  transform: rotate(90deg);
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 40px solid #D9D9D9; /* Cor do triângulo */
  z-index: 10000;
}
.ball {
    background: #43055D;
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 2px 0px 0px 0px;
    width: 18px;
    height: 18px;
    font-size: 10px;
    color: #fff;
    border-radius: 100%;
    box-sizing: border-box;
}
.btn-primary {
    background-color: #43055D !important;
    border-color: #43055D !important;
}
.text-rox {
    color: #43055D;
    font-weight: bold;
    font-size: 1em;
    text-decoration: underline;
}
</style>