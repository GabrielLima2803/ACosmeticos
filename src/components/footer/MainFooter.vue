<template>
  <div class="footer-flex ft-main-marginTop">
    <div class="ft-main">
      <h5>
        Sobre Nós
      </h5>
      <p class="about-text">
        nasce a marca brasileira Tesla Footwear, criada para aqueles que realmente falam a língua do skate e que
        trariam
        todas as características icônicas dos produtos daquela época...
      </p>
    </div>

    <div class="ft-main">
      <h5>
        Menu
      </h5>
      <p>
        <router-link to="/" class="header-links">Inicio</router-link>
      </p>
      <p>
        <router-link to="/sobreNos" class="header-links">Sobre Nós</router-link>
      </p>
      <p>
        Kit & Presentes
      </p>
    </div>

    <div class="ft-main">
      <h5>
        Ajuda
      </h5>
      <p>
      <router-link to="/duvidas" class="header-links">Prazo e Entrega</router-link>
      </p>
      <p>
        <router-link to="/duvidas" class="header-links">Trocas e Devoluções</router-link>
      </p>
      <p>
        <router-link to="/duvidas" class="header-links">Termos e Condições</router-link>
      </p>
      <p>
        <router-link to="/duvidas" class="header-links">Política e Privacidade</router-link>
      </p>
      <p>
        <router-link to="/duvidas" class="header-links">Perguntas Frequentes</router-link>
      </p>
      <p>
        <router-link to="/duvidas" class="header-links">Alerta</router-link>
      </p>
    </div>
  </div>
</template>

<style scoped>
.footer-flex {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: -40px;
  border-bottom: 1px black solid;
}

.ft-main {
  width: 20%;
  margin: 0 50px;
}

.about-text {
  width: 80%;
}
p{
  margin-bottom: 12px;
  font-size: 15px;
  
}
h5{
  font-size: 17px;
}
.ft-main-marginTop{
  margin-top: 400px;
}



.header-links {

    text-decoration: none;
    color: #000000;
    position: relative; /* Importante para posicionar a borda */
    transition: border-bottom 0.3s ease; /* Adiciona uma transição suave à borda */
    cursor: pointer;
}

.header-links::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #43055D; /* Cor da borda */
    transition: width 0.3s ease; /* Adiciona uma transição suave à largura da borda */
 
  }

  .header-links:hover::after {
    width: 100%;
  }

.header-links:last-child {
    margin-right: 0;
}



</style>