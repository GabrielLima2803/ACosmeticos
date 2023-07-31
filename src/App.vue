<script setup>
import { } from 'vue-router'

</script>

<template>
  <header>

    <div >

      <div class="header">
   
      </div>
      <!-- Fim da parte roxa -->
      <nav class="navbar navbar-light bg-light navBarPrincipal linkRouters">  

        
        <span class="marginRL">
          Inicio
        </span>

        <span class="marginRL">
          Marcas
        </span>

        <span class="marginRL">
          Tutoriais
        </span>

        <span class="marginRL">
          Sobre nós
        </span>

        <span class="marginRL">
          Ajuda
        </span>
      </nav>
    </div>

  </header>
</template>

<style scoped>
.header {
  width: 100%;
  background-color: #43055D;
;
  color: white;
  height: 9px;
}
.navBarPrincipal{
  height: 93px;
  box-shadow: 2px 2px 15px 1px rgb(94, 94, 94);
  border: none;
}
.linkRouters{
  display: flex;
  justify-content: center;
  align-items: end;

}
.marginRL{
  margin-right: 14px;
  font-size: 18px;
  font-family: 'Jost', sans-serif;
  
}
</style>
