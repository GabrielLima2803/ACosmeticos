<script setup>

</script>

<template>
    <header class="PBarra">
      <!-- Header Logo -->
      <div class="header-logo">
        <div class="logo">
          <img src="@/img/icon-headerboti/oboticariologo.png" alt="" class="hd-logo-margin" />
        </div>
        <div class="header-icons">
          <img src="@/img/icon-headerboti/pesquisa.png" alt="" class="icons-margin" />
          <img src="@/img/icon-Header/sacola.png" alt="" class="icons-margin" />
          <img src="@/img/icon-Header/coracao.png" alt="" class="icons-margin" />
          <img src="@/img/icon-Header/perfil.png" alt="" class="icons-margin" />
        </div>
      </div>
      <!-- Header Icons -->
      <div class="header-roxa">
        <nav class="header-nav">
          <span class="header-links"> Perfumaria </span>
          <span class="header-links"> Corpo de banho </span>
          <span class="header-links"> Cabelos </span>
          <span class="header-links"> Maquiagem </span>
        </nav>
        <!-- NavBar -->
        <!-- Header Verde -->
      </div>
    </header>
  </template>
  
  <style scoped>
  .PBarra {
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 2px 2px 15px 1px rgb(94, 94, 94);
    border: none;
  }
  
  .header-roxa {
    width: 100%;
    background-color: #194B3B;
    color: white;
    padding: 10px 0;
  }
  
  .header-nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
  }
  
  .header-links {
    font-size: 18px;
    font-family: 'Jost', sans-serif;
    color: white;
    transition: color 0.3s;
    cursor: pointer;
  }
  
  .header-links:hover {
    color: #43055D;
  }
  
  .header-logo {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
  }
  
  .logo img {
    max-width: 150px;
  }
  
  .header-icons {
    display: flex;
    align-items: center;
  }
  
  .icons-margin {
    margin-right: 5px;
  }
  
  .hd-logo-margin {
    margin-right: 10px;
  }
  
  @media (max-width: 768px) {
    .header-nav {
      flex-direction: column;
      margin-top: 20px;
    }
    .header-links {
      margin: 5px 0;
    }
    .logo img {
      max-width: 120px;
    }
  }
  </style>
  