<script setup>
import { ref } from 'vue'
const email = ref('')
const error = ref('');
const senha = ref('');
const senhaConfirmar = ref('');

import Swal from 'sweetalert2'


const validateEmail = () => {
  if (!email.value) {
    error.value = 'O email é obrigatório.';
  } else if (!isValidEmail(email.value)) {
    error.value = 'Por favor, insira um email válido.';
  } else {
    error.value = '';
  }
};

const isValidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

const validatePassword = () => {
  if (!senha.value || !senhaConfirmar.value) {
    error.value = 'As senhas são obrigatórias.';
  } else if (senha.value !== senhaConfirmar.value) {
    error.value = 'As senhas não coincidem.';
  } else {
    error.value = '';
  }
};

const onSubmit = (event) => {
  event.preventDefault();
  // Primeiro, verifique o email
  validateEmail();
  // Em seguida, verifique a igualdade das senhas
  validatePassword();

  if (!error.value) {
    // Se não houver erros, continue com o envio do formulário ou outra ação
    Swal.fire('Any fool can use a computer')
  } else {
    console.log('Formulário inválido. Corrija os erros.');
  }
};

</script>

<template>
    <div class="wrapContainer">
        <div class="containerPrincipal">
            <div class="logo">
                <img src="@/img/Main-img/CriarConta/Logo.png" alt="" width="150">
            </div>
            <div class="forms">
                <form action="" @submit="onSubmit" class="wrapForm">
                    <input type="text" id="nome" v-model="nome" placeholder="Insira sua senha..." required class="marginForm inputForm">
                    <input type="email" id="email" v-model="email" placeholder="Insira seu e-mail..." @input="validateEmail" required class="marginForm inputForm">
                    <input type="password" id="senha" required  v-model="senha" placeholder="Insira sua senha..." minlength="3" maxlength="20" class="marginForm inputForm">
                    <input type="password" id="senhaConfirmar" required  v-model="senhaConfirmar" placeholder="Confirme sua senha..." minlength="3" maxlength="20" class="marginForm inputForm">
                    <button type="submit" class="BtnCriar">Criar Conta</button>
                </form>
            </div>
        </div>
    </div>

    
</template>

<style scoped>
.wrapContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
}
.containerPrincipal{
    width: 700px;
    height: 550px;
    border: 1px solid black;

}
.logo{
    display: flex;
    justify-content: center;
    padding: 20px;
}
.wrapForm{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.inputForm{
    width: 510px;
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
.marginForm{
    margin-top: 25px;
}
.BtnCriar{
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
    margin-top: 50px;
}
.BtnCriar:hover{
    background-color: white;
    transition: 0.6s ease-in;
    color: #43055D;
    border: #43055D 1px solid;
}
</style>