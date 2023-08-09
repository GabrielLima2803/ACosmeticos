<script setup>

</script>

<template>
    <header class="PBarra">
        <!-- Header Logo -->
        <div class="header-logo">
            <div class="logo">
                <img src="@/img/icon-headerboti/oboticariologo.png" alt="" class="hd-logo-margin">
            </div>
            <div class="header-icons">
                <img src="@/img/icon-headerboti/pesquisa.png" alt="" class="icons-margin">
                <img src="@/img/icon-Header/sacola.png" alt="" class="icons-margin">
                <img src="@/img/icon-Header/coracao.png" alt="" class="icons-margin">
                <img src="@/img/icon-Header/perfil.png" alt="" class="icons-margin">
            </div>
        </div>
        <!-- Header Icons -->
        <div class="header-roxa">
        <nav class="header-nav">
            <span class="header-links"> Perfumaria </span>
            <span class="header-links"> Corpo de banho </span>
            <span class="header-links"> Cabelos  </span>
            <span class="header-links"> Maquiagem </span>
        </nav>
        <!-- NavBar -->
        <!-- Header Verde -->
    </div>
    </header>
</template>

<style scoped>
.header-verder {
    width: 100%;
    background-color: #194B3B;
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
</style>