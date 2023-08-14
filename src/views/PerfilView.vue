<script setup>
import { ref } from 'vue'
const email = ref('')
const senha = ref('')

const error = ref('');

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



</script>

<template>
    <div class="wrapContainer">
        <div class="containerPrincipal ">
            <div class="FormTop">
                <img src="@/img/icon-Header/logoAC.png" alt="">
            </div>
            <div class="FormBot">
                    <h4>Olá!</h4>
                     <p class="FormP">Para continuar, digite seu e-mail</p>  
                <form action="" @submit.prevent = "" class="wrapForm">
                    <input type="email" id="email" v-model="email" @input="validateEmail" placeholder="Insira seu e-mail..." required class="inputForm" >
                    <input type="password" id="senha"  v-model="senha" placeholder="Insira sua senha..." minlength="3" maxlength="20" required class="marginForm inputForm">
                     <p v-if="error" style="color: red;" id="PC">{{ error }}</p> 
                     <button type="button" class="btnSenha">Esqueci minha senha</button>
                     <button type="submit" class="btnLogin mt-3">Entrar</button>
                     <router-link to="/criarLogin" > <button type="button" class="btnCriar mt-3">Criar conta</button> </router-link>
                    <p class="mt-4 FormP Pf">Protegido por reCAPTCHA - Privacidade | Condições  </p>
                </form>
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
}
.FormTop{
    display: flex;
    justify-content: center;
    padding: 10px;
}
.FormBot{
    border: 1px solid rgb(105, 105, 105);
    padding: 25px;
}
.FormP{
    color: gray;
}
.wrapForm{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.marginForm{
    margin-top: 30px;
}
.inputForm{
    width: 350px;
    height: 45px;
    padding: 15px;
}
.btnSenha{
    margin-top: 20px;
    border: none;
    border-bottom: solid 1px #43055D;
    background-color: white;
    color: gray;
    font-size: 15px;
}
.btnSenha:hover{
    color: #43055D;
    transition: 0.7s;
}
.btnLogin{
    width: 350px;
    height: 45px;
    background-color: #43055D;
    color: white;
    border: none;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
}
.btnCriar{
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
#PC{
  margin-top: 15px; 
    margin-bottom: -5px;
}


</style>