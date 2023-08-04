<script setup>
import { } from 'vue-router'
</script>

<template>
  <header class="PBarra">
    <div class="header-roxa">
      <!-- Header Roxo -->
    </div>
    <!-- Header Logo -->
    <div class="header-logo">
      <div class="logo">
        <img src="./img/logoAC.png" alt="">
      </div>
      <div class="header-icons">
        <img src="./img/ icon _Search_.png" alt="">
        <img src="./img/icon_Bolsa.png" alt="">
        <img src="./img/icon_Coração.png" alt="">
        <img src="./img/icon_Pessoa.png" alt="">
      </div>
    </div>
    <!-- Header Icons -->

    <nav class="header-nav">
      <span class="header-links"> Inicio </span>
      <span class="header-links"> Marcas </span>
      <span class="header-links"> Tutoriais </span>
      <span class="header-links"> Sobre nós </span>
      <span class="header-links"> Ajuda </span>
    </nav>
    <!-- NavBar -->
  </header>

  <main>

  </main>
</template>

<style scoped>
.header-roxa {
  width: 100%;
  background-color: #43055d;
  color: white;
  height: 9px;
}

.PBarra {
  position: sticky;
  top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 15px 1px rgb(94, 94, 94);
  border: none;
}

.navBarPrincipal {
  margin-top: -300px;
  height: 93px;
}

.linkRouters {
  display: flex;
  justify-content: center;
  align-items: end;
}

.header-links {
  margin-right: 14px;
  font-size: 18px;
  font-family: 'Jost', sans-serif;
}

.header-links:hover {
  color: #43055D;
  cursor: pointer;
  transition: 0.8s;
}

.logo {
  flex-grow: 9;
  display: flex;
  justify-content: center;
  /* margin: calc(100%/2 + 95); */
}

.logo img {
  margin-left: 250px
  /* margin-left: calc(90%+295px) */
}

.header-logo {
  display: flex;
  width: 100%;
  align-content: center;
}



.header-icons {
  flex-grow: 1;
  align-self: center;
  display: flex;
  justify-content: flex-end;
  /* width: 100%;  */
  margin-right: 30px;
  /* position: relative;
  transform: translateY(-190%); */
}
</style>
