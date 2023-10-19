<script setup>

import { useAuthStore } from '@/store/auth';
import { onMounted, ref } from 'vue';
const authStore = useAuthStore();
onMounted(() => {
  const storedIsLoggedIn = localStorage.getItem('userIsLoggedIn');
  const storedUsername = localStorage.getItem('username');

  if (storedIsLoggedIn === 'true' && storedUsername) {
    // Defina o estado de login e nome de usuário no store
    authStore.userIsLoggedIn = true;
    authStore.username = storedUsername;
  }
});

const login = () => {
  const credentials = {
    username: authStore.username,
    password: authStore.password,
  };
  authStore.login(credentials);

  // Salve informações no localStorage
  localStorage.setItem('userIsLoggedIn', authStore.userIsLoggedIn.toString());
  localStorage.setItem('username', authStore.username);
};

const logout = () => {
  authStore.logout();

  // Limpe as informações no localStorage ao fazer logout
  localStorage.removeItem('userIsLoggedIn');
  localStorage.removeItem('username');
};


const isUsernameFilled = ref(false);
const isPasswordFilled = ref(false);

const checkInputFields = () => {
    isUsernameFilled.value = authStore.username.value !== '';
    isPasswordFilled.value = authStore.password.value !== '';
};

onMounted(() => {
    checkInputFields();
});
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
  <input type="text" id="username" v-model="authStore.username" class="inputForm" @input="checkInputFields" />
  <label for="username" class="labelForm" :class="{ active: isUsernameFilled }">Username</label>
</div>
<div class="input-container">
  <input type="password" id="password" v-model="authStore.password" class="marginForm inputForm" @input="checkInputFields" />
  <label for="password" class="labelForm" :class="{ active: isPasswordFilled }">Password</label>
</div>
          <button type="button" style="margin-top: 10px;">
            <router-link class="btnSenha" to="/esqueciSenha">Esqueci minha senha</router-link>
          </button>
          <button type="submit" class="btnLogin mt-3">Entrar</button>
          <router-link to="/criarLogin">
            <button type="button" class="btnCriar mt-3">Criar conta</button>
          </router-link>
          <p class="mt-4 FormP Pf">Protegido por reCAPTCHA - Privacidade | Condições </p>
          <p class="mt-4 FormP Pf text">{{ authStore.message }}</p>
        </form>
        <div v-if="authStore.userIsLoggedIn" class="welcome-section">
          <p>Seja bem-vindo, {{ authStore.username }}</p>
          <button class="button" @click="logout">Logout</button>
        </div>
      </div>
    </div>
  </div>
</template>
  
<style scoped>
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
    border: 1px solid #43055D;
    transition: all 0.3s;
}

.inputForm:focus+.labelForm {
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
    border-bottom: solid 1px #43055D;
    background-color: white;
    color: gray;
    font-size: 15px;
    text-decoration: none;
}

.btnSenha:hover {
    color: #43055D;
    transition: 0.7s;
}

.btnLogin {
    width: 350px;
    height: 45px;
    background-color: #43055D;
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
    color: #43055D;
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

.welcome-section {
    background-color: #6a0dad;
    color: #fff;
    text-align: center;
    padding: 20px;
    border-radius: 10px;
}

.welcome-section p {
    font-size: 24px;
    margin: 0;
}

.welcome-section .button {
    background-color: #fff;
    color: #6a0dad;
    border: none;
    padding: 10px 20px;
    margin-top: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
}

.welcome-section .button:hover {
    background-color: #a06ac7;
    color: #fff;
}
</style>
  