<script setup>

</script>

<template>
    <div class="grudendo">
    <header class="PBarra">
        <div class="header-roxa">
            <!-- Header Roxo -->
        </div>
        <!-- Header Logo -->
        <div class="header-logo">
            <div class="logo">
                <img src="@/img/icon-Header/logoAC.png" alt="" class="hd-logo-margin">
            </div>
            <div class="header-icons">
                <router-link to="/carrinho" class="header-links"><img src="@/img/icon-Header/icon_Bolsa.png" alt="" class=""></router-link>
                <router-link to="/favorito" class="header-links"><img src="@/img/icon-Header/icon_Coração.png" alt="" class=""></router-link>
                <router-link to="/perfil" class="header-links"><img src="@/img/icon-Header/icon_Pessoa.png" alt="" class=""></router-link>
            </div>
        </div>
        <!-- Header Icons -->

        <nav class="header-nav">
            <router-link to="/" class="header-links">Inicio</router-link>
            <span class="header-links"> Marcas </span>
            <span class="header-links"> Tutoriais </span>
            <span class="header-links"> Sobre nós </span>
            <span class="header-links"> Ajuda </span>
            <router-link to="/oboticario" class="header-links">Oboticario</router-link>
        </nav>
        <!-- NavBar -->
    </header>

    </div>
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
    max-width: 100%;
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

.logo {
    flex-grow: 9;
    display: flex;
    justify-content: center;
    margin-left: -30px;
}

.logo img {
    margin-left: 250px
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
    margin-right: 30px;
}
.icons-margin{
    margin-right: 5px;
}
.hd-logo-margin{
    margin-right: 40px ;
}
/* .grudendo{
    position: sticky;
    top: 0px;
} */
</style>