<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const username = ref('');
const password = ref('');
const message = ref('');
const user = ref({ name: '' });
const userIsLoggedIn = ref(false);

// Verificar o estado de login no carregamento da página
onMounted(() => {
    const isLoggedIn = localStorage.getItem('userIsLoggedIn');
    if (isLoggedIn === 'true') {
        userIsLoggedIn.value = true;
        // Se o usuário estiver logado, você pode carregar informações adicionais aqui
    }
    // Verificar o nome do usuário no armazenamento local
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
        username.value = storedUsername;
    }
});

const login = () => {
    const credentials = {
        username: username.value,
        password: password.value,
    };

    // Substitua a URL pelo endpoint da sua API de login
    axios.post('http://localhost:3000/api/login', credentials)
        .then(response => {
            console.log(response.data);
            message.value = response.data.message;
            if (response.data.user) {
                user.value.name = response.data.user.name;
                userIsLoggedIn.value = true;
                localStorage.setItem('userIsLoggedIn', 'true');
                localStorage.setItem('username', username.value);
            }
        })
        .catch(error => {
            console.error(error);
            message.value = error.response.data.message;
        });
};

const logout = () => {
    userIsLoggedIn.value = false;
    username.value = '';
    password.value = '';
    // Remover o estado de login do localStorage
    localStorage.removeItem('userIsLoggedIn');
    // Remover o nome do usuário do localStorage
    localStorage.removeItem('username');
    localStorage.removeItem('password');
};
</script>

<template>
    <div class="wrapContainer">
        <div class="containerPrincipal">
            <div class="FormTop">
                <img src="@/assets/img/icon-Header/LogoAcosmeticos.png" alt="" width="220" />
            </div>
            <div class="FormBot">
                <form action="" @submit.prevent="login" class="wrapForm" v-if="!userIsLoggedIn">
                    <h4>Olá!</h4>
                    <p class="FormP">Para continuar, digite seu e-mail</p>
                    <div class="input-container">
                        <input type="text" id="username" v-model="username" class="inputForm" />
                        <label for="username" class="labelForm">Username</label>
                    </div>
                    <div class="input-container">
                        <input type="password" id="password" v-model="password" class="marginForm inputForm" />
                        <label for="password" class="labelForm">Password</label>
                    </div>
                    <button type="button" style="margin-top: 10px;">
                        <router-link class="btnSenha" to="/esqueciSenha">Esqueci minha senha</router-link>
                    </button>
                    <button type="submit" class="btnLogin mt-3">Entrar</button>
                    <router-link to="/criarLogin">
                        <button type="button" class="btnCriar mt-3">Criar conta</button>
                    </router-link>
                    <p class="mt-4 FormP Pf">Protegido por reCAPTCHA - Privacidade | Condições </p>
                    <p class="mt-4 FormP Pf text">{{ message }}</p>
                </form>
                <div v-if="userIsLoggedIn" class="welcome-section">
                    <p>Seja bem-vindo, {{ username }}</p>
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

.FormBot {
    border: 1px solid rgb(105, 105, 105);
    padding: 25px;
}
.text{
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
  