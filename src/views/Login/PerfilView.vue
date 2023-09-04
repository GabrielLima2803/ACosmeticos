<script setup>
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'

const initialState = {
    name: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    select: null,
    checkbox: null,
}

const state = reactive({
    ...initialState,
    showPassword: false,
    showConfirmPassword: false,
})


const rules = {
    name: { required },
    email: { required, email },
    senha: { required },
    confirmarSenha: { required },
}

const v$ = useVuelidate(rules, state)






</script>

<template>
    <div class="wrapContainer">
        <div class="containerPrincipal ">
            <div class="FormTop">
                <img src="@/assets/img/icon-Header/LogoAcosmeticos.png" alt="" width="220">
            </div>
            <div class="FormBot">
                <h4>Olá!</h4>
                <p class="FormP">Para continuar, digite seu e-mail</p>
                <form action="" @submit.prevent="" class="wrapForm">
                    <v-text-field v-model="state.name" :error-messages="v$.name.$errors.map(e => e.$message)" :counter="40"
                        label="Insira seu nome" required @input="v$.name.$touch" @blur="v$.name.$touch"
                        class="inputForm">
                    </v-text-field>

                    <v-text-field v-model="state.senha" :error-messages="v$.senha.$errors.map(e => e.$message)"
                        :counter="16" label="Insira sua senha" required @input="v$.senha.$touch" @blur="v$.senha.$touch"
                        :type="state.showPassword ? 'text' : 'password'" class="marginForm inputForm marginBot">
                        <i class="iconMostrar bi" :class="state.showPassword ? 'bi-eye' : 'bi-eye-slash'"
                            @click="state.showPassword = !state.showPassword"></i>
                    </v-text-field>
                    <button type="button" style="margin-top: 10px;"><router-link class="btnSenha" to="/esqueciSenha">Esqueci minha senha</router-link></button>
                    <button type="submit" class="btnLogin mt-3">Entrar</button>
                    <router-link to="/criarLogin"> <button type="button" class="btnCriar mt-3">Criar conta</button>
                    </router-link>
                    <p class="mt-4 FormP Pf">Protegido por reCAPTCHA - Privacidade | Condições </p>
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

.FormP {
    color: gray;
}

.wrapForm {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.marginForm {
    margin-top: 30px;
}

.inputForm {
    width: 350px;
    height: 45px;
    padding: 15px;
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

.marginBot{
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
</style>