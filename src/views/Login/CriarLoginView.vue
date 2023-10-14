<script setup>
import { ref } from 'vue';
import axios from 'axios';

const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const message = ref('');

// Função para validar o formato do e-mail
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

const register = () => {
  if (password.value !== confirmPassword.value) {
    message.value = "As senhas não coincidem.";
    return;
  }

  // Validação de e-mail
  if (!validateEmail(email.value)) {
    message.value = "E-mail inválido.";
    return;
  }

  const credentials = {
    username: username.value,
    email: email.value,
    password: password.value,
  };

  // Substitua a URL pelo endpoint da sua API de registro
  axios.post('http://localhost:3000/api/register', credentials)
    .then(response => {
      message.value = response.data.message;
    })
    .catch(error => {
      message.value = error.response.data.message;
    });
};
</script>

<template>
  <div class="wrapContainer">
    <div class="containerPrincipal">
      <div class="logo">
        <img src="@/assets/img/Main-img/CriarConta/Logo.png" alt="" width="130">
      </div>
      <div class="forms">
        <form class="wrapForm" @submit.prevent="register">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" class="marginForm inputForm" />
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" class="marginForm inputForm" />
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" class="marginForm inputForm" />
          <label for="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" class="marginForm inputForm" />
          <div class="displayBtn">
            <button type="submit" class="BtnCriar" @click="v$.$validate">Criar Conta</button>
          </div>
        </form>
        <p>{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.displayBtn {
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
}

v-text-field:hover {
  background-color: #fff;
}

.wrapContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
}

.containerPrincipal {
  width: 700px;
  height: 640px;
  border: 1px solid black;

}

.logo {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.wrapForm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.inputForm {
  width: 610px;
  height: 50px;
  padding: 15px;
}

.inputForm input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 16px;
}

.inputForm label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 15px;
  pointer-events: none;
  transition: 0.2s ease all;
  font-size: 16px;
  color: #333;
}

.inputForm label:focus {
  top: -25px;
  left: 0;
  font-size: 14px;
  color: #555;
  background-color: #fff;
  padding: 0 5px;
}

.marginForm {
  margin-top: 25px;
}

.BtnCriar {
  width: 350px;
  height: 50px;
  border: none;
  background-color: #43055D;
  border: black 1px solid;
  text-align: center;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  padding: 5px;
  margin-top: 80px;
}

.BtnClear {
  width: 350px;
  height: 50px;
  border: none;
  background-color: #43055D;
  border: black 1px solid;
  text-align: center;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  padding: 5px;
  margin-top: 10px;
}

.wrapBtn {
  display: flex;
  /* align-content: flex-end; */
  justify-content: flex-end;
  margin: 10px;
  margin-right: 50px;
  margin-top: -70px;
}

.iconMostrar {
  font-size: 25px;
  cursor: pointer;
  position: absolute;
  right: 0px;
  margin-top: -15px;
  margin-right: 10px;
}
</style>