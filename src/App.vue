<script setup>
import HeaderPrincipal from './components/header/HeaderPrincipal.vue'; 
import FullFooter from './components/footer/FullFooter.vue';



</script>

<template>
  <header>
    <header-principal />
  </header>

  <div class="container">
    <main>
      <!-- Centralizar Logo do Header!!! -->
      <!-- Centralizar Menu do Footer!!! -->

      <div class="card-cosmeticos">
      <div class="wrap-img">
        <img :src="img" alt="Capa do livro" class="capa-livro" />
      </div>  
      <h5 class="titulo-Cos">
        Titulo {{  }}        
      </h5>
      <p class="descricao-Cos">
        aa
      </p>
      <p class="preco-Cos">
        aa
      </p>
      <button type="button" class="Button-CardPay"> <img src="@/img/Main-img/Main-Cards/BtnCardPay.png" alt="" class="Btn-Pay"> </button>
      </div>
    </main>

    <full-footer />
  </div>
</template>


<style scoped>
.card-cosmeticos{
  background-color: gray;
  width: 300px;
  height: 261px;  
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  }
.Button-CardPay{
  border: 1px solid #43055D
  }
  .Btn-Pay{
    width: 10px;
  }
</style>