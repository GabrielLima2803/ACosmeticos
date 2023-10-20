<script setup>
import { useAuthStore } from '@/store/auth'
import { onMounted, ref } from 'vue'
const authStore = useAuthStore()
onMounted(() => {
  const storedIsLoggedIn = localStorage.getItem('userIsLoggedIn')
  const storedUsername = localStorage.getItem('username')

  if (storedIsLoggedIn === 'true' && storedUsername) {
    // Defina o estado de login e nome de usuário no store
    authStore.userIsLoggedIn = true
    authStore.username = storedUsername
  }
})

const login = () => {
  const credentials = {
    username: authStore.username,
    password: authStore.password
  }
  authStore.login(credentials)

  // Salve informações no localStorage
  localStorage.setItem('userIsLoggedIn', authStore.userIsLoggedIn.toString())
  localStorage.setItem('username', authStore.username)
}

const logout = () => {
  authStore.logout()

  // Limpe as informações no localStorage ao fazer logout
  localStorage.removeItem('userIsLoggedIn')
  localStorage.removeItem('username')
}

const isUsernameFilled = ref(false)
const isPasswordFilled = ref(false)

const checkInputFields = () => {
  isUsernameFilled.value = authStore.username.value !== ''
  isPasswordFilled.value = authStore.password.value !== ''
}

onMounted(() => {
  checkInputFields()
})
</script>

<template>
  <div class="wrapContainer">
    <div class="containerPrincipal">
      <div class="FormTop">
        <img src="@/assets/img/icon-Header/LogoAcosmeticos.png" alt="" width="220" />
      </div>
      <div class="FormBot">
        <form action="" @submit.prevent="login" class="wrapForm" v-if="!authStore.userIsLoggedIn">
          <h4>Olá!</h4>
          <p class="FormP">Para continuar, digite seu e-mail</p>
          <div class="input-container">
            <input
              type="text"
              id="username"
              v-model="authStore.username"
              class="inputForm"
              @input="checkInputFields"
            />
            <label for="username" class="labelForm" :class="{ active: isUsernameFilled }"
              >Username</label
            >
          </div>
          <div class="input-container">
            <input
              type="password"
              id="password"
              v-model="authStore.password"
              class="marginForm inputForm"
              @input="checkInputFields"
            />
            <label for="password" class="labelForm" :class="{ active: isPasswordFilled }"
              >Password</label
            >
          </div>
          <button type="button" style="margin-top: 10px">
            <router-link class="btnSenha" to="/esqueciSenha">Esqueci minha senha</router-link>
          </button>
          <button type="submit" class="btnLogin mt-3">Entrar</button>
          <router-link to="/criarLogin">
            <button type="button" class="btnCriar mt-3">Criar conta</button>
          </router-link>
          <p class="mt-4 FormP Pf">Protegido por reCAPTCHA - Privacidade | Condições</p>
          <p class="mt-4 FormP Pf text">{{ authStore.message }}</p>
        </form>
        <div v-if="authStore.userIsLoggedIn" class="welcome-section">
        <img class="logo" src="@/assets/img/img-sobrenos/icone.png" alt="" />
          <p class="bemVindo">Seja Bem-Vindo, {{ authStore.username }}</p>
          <button class="logout-button" @click="logout">Logout</button>
        </div>
        <div class="social-icons" v-if="authStore.userIsLoggedIn">
            <a href="https://www.instagram.com/cosmeticosvendasa/" target="_blank"><i class="bi bi-instagram social-icon"></i></a>
          <a href="https://api.whatsapp.com/send/?phone=5547991216433&text=Ol%C3%A1%2C" target="_blank"><i class="bi bi-whatsapp social-icon"></i></a>
          <i class="bi bi-facebook social-icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: 'Jost', sans-serif;
}
.containerPrincipal {
  width: 440px;
  height: 527px;
}

.wrapContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  margin-bottom: 10px;
}

.logo {
  width: 90px;
  height: 40px;
  margin: 20px;
}

.FormTop {
  display: flex;
  justify-content: center;
  padding: 10px;
}
.labelForm.active {
  top: 10px;
  font-size: 12px;
}
.FormBot {
  border: 1px solid rgb(105, 105, 105);
  padding: 25px;
}
.text {
  color: red;
}

.FormP {
  color: gray;
}

.wrapForm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.input-container {
  position: relative;
  margin-top: 30px;
}

.inputForm {
  width: 350px;
  height: 60px;
  padding: 15px;
  border: 1px solid #43055d;
  transition: all 0.3s;
}

.inputForm:focus + .labelForm {
  top: 10px;
  font-size: 12px;
}

.labelForm {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  transition: all 0.3s;
  pointer-events: none;
}

.btnSenha {
  margin-top: 20px;
  border: none;
  border-bottom: solid 1px #43055d;
  background-color: white;
  color: gray;
  font-size: 15px;
  text-decoration: none;
}

.btnSenha:hover {
  color: #43055d;
  transition: 0.7s;
}

.btnLogin {
  width: 350px;
  height: 45px;
  background-color: #43055d;
  color: white;
  border: none;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}

.btnCriar {
  width: 350px;
  height: 35px;
  border: none;
  background-color: white;
  border: black 1px solid;
  text-align: center;
  color: #43055d;
  font-size: 18px;
  font-weight: bold;
}

#PC {
  margin-top: 15px;
  margin-bottom: -5px;
}

.marginBot {
  margin-bottom: 25px;
}

.iconMostrar {
  font-size: 25px;
  cursor: pointer;
  position: absolute;
  right: 0px;
  margin-top: -15px;
  margin-right: 10px;
}
.bemVindo {
  text-align: center;
  text-decoration: none;
  color: #43055d;
  font-size: 180%;
  font-weight: bold;
}
.welcome-section {
  display: flex;
  flex-direction: column; /* Empilhar elementos verticalmente */
  align-items: center; /* Centralizar verticalmente */
  text-align: center; /* Alinhar texto ao centro */
}

.logout-button {
  background-color: #fff;
  color: #43055d;
  border: none;
  padding: 12px 24px;
  cursor: pointer;
  margin: 10px;
  transition: background-color 0.3s, color 0.3s;
  font-weight: lighter;
  text-transform: uppercase;
  margin-top: 20px;
  border: 0.5px solid #43055d;
}

.logout-button:hover {
  background-color: #43055d;
  color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
.social-icons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.social-icon {
  background-color: #fff;
  color: #43055d;
  border: 0.5px solid #43055d;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  margin: 0 10px;
}
.social-icon:hover {
  background-color: #43055d;
  color: #fff;
}
a {
  text-decoration: none;
}
</style>
