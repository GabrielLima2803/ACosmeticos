<script>
import { useAuthStore } from '@/store/auth'

export default {
  setup() {
    const authStore = useAuthStore()

    return { authStore }
  }
}
</script>

<template>
  <div class="sticky">
    <header class="PBarra">
      <div class="header-roxa"></div>
      <div class="header-logo pt-3">
        <div class="logo">
          <img src="@/assets/img/icon-Header/LogoAcosmeticos.png" alt="" class="hd-logo-margin" />
        </div>
        <div class="header-icons">
          <router-link to="/carrinho" class="header-links icons-margin"
            ><img src="@/assets/img/icon-Header/icon_Bolsa.png" alt="" class="hover"
          /></router-link>
          <router-link to="/favorito" class="header-links icons-margin"
            ><img src="@/assets/img/icon-Header/icon_Coração.png" alt="" class="hover"
          /></router-link>
          <router-link to="/perfil" class="header-links"
            ><img src="@/assets/img/icon-Header/icon_Pessoa.png" alt="" class="hover"
          /></router-link>
        </div>
        <!-- <div class="message">
            <p >{{ authStore.messageConfirm }}</p>
          </div> -->
      </div>
      <nav class="header-nav p-3">
        <router-link to="/" class="header-links">Inicio</router-link>
        <router-link to="/sobreNos" class="header-links">Sobre Nós</router-link>
        <router-link to="/duvidas" class="header-links">Ajuda</router-link>
        <router-link to="/oboticario" class="header-links logo-oboticario">
          O'Boticário
        </router-link>
      </nav>
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
.message {
  display: flex;
  font-size: 12px;
  margin-top: 10px;
}

.PBarra {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 16px 1px #54545453;
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
  position: relative;
  /* Importante para posicionar a borda */
  transition: border-bottom 0.3s ease;
  /* Adiciona uma transição suave à borda */
  cursor: pointer;
}

.header-links::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #43055d;
  /* Cor da borda */
  transition: width 0.3s ease;
  /* Adiciona uma transição suave à largura da borda */
}

.header-links:hover::after {
  width: 100%;
}

.header-links:last-child {
  margin-right: 0;
}

.sticky {
  z-index: 100000;
  position: sticky;
  background-color: white;
  top: 0;
  box-shadow: 0px 3px 10px rgb(0, 0, 0);
}

.logo {
  flex-grow: 9;
  display: flex;
  justify-content: center;
}

.logo img {
  margin-left: 260px;
  width: 200px;
}

.header-logo {
  display: flex;
  width: 100%;
  align-content: center;
}

.logo-oboticario {
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

.icons-margin {
  margin-right: 7px;
}

.hd-logo-margin {
  margin-right: 40px;
}

@media screen and (min-width: 768px) {
  .header-logo {
    flex-direction: row;
    align-items: center;
  }

  .header-icons {
    margin-top: 0;
  }
}

.header-icon-left {
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  margin-right: 30px;
}
</style>
