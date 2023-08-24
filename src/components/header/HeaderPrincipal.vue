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
                <img src="@/img/icon-Header/LogoAcosmeticos.png" alt="" class="hd-logo-margin">
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
            <router-link to="/sobreNos" class="header-links">Sobre Nós</router-link>
            <router-link to="/duvidas" class="header-links">Ajuda</router-link>
            <router-link to="/favorito" class="header-links">Favoritos</router-link>
            <router-link to="/oboticario" class="header-links logo-oboticario"><img src="@/img/icon-Header/logoOboticario.png" alt=""></router-link>
            <router-link to="/indentificacao" class="header-links">Indentificação</router-link>
            <router-link to="/produtoCarrosel" class="header-links">produtoCarrosel</router-link>
<<<<<<< HEAD
=======
            <router-link to="/corpoBanho" class="header-links">Corpo é Banho</router-link>
            <router-link to="/maquiagem" class="header-links">Maquiagem</router-link>
            <router-link to="/cabelos" class="header-links">Cabelos</router-link>
            <router-link to="/eudora" class="header-links">Eudora</router-link>

>>>>>>> df85c0bc7f2c41ddea15ad1e451c2adc4fd7e084
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
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 2px 2px 15px 1px rgb(94, 94, 94);
    border: none;
    max-width: 100%;
    position: sticky;
    top: 0;
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
}

.logo img {
    margin-left: 260px
}

.header-logo {
    display: flex;
    width: 100%;
    align-content: center;
}
.logo-oboticario{
    width: 21px;
    height: 21px;
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