<script setup>
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

const initialState = {
    codigo: '',
    novaSenha: '',
}

const state = reactive({
    ...initialState,
    showPassword: false,
    showConfirmPassword: false,
})


const rules = {
    codigo: { required },
    novaSenha: { required },
}

const v$ = useVuelidate(rules, state)



</script>

<template>
    <div class="wrapContainer">
        <div class="containerPrincipal ">
            <div class="FormBot">
                <div class="FormTop">
                    <img src="@/img/Main-img/CriarConta/Logo.png" alt="" width="150">
                </div>
                <h4>Verifique seu e-mail e insira uma nova senha.</h4>
                <p class="FormP">Enviamos um código para</p>
                <p class="FormP">...@gmail.com</p>
                <form action="" @submit.prevent="" class="wrapForm">
                    <div class="mt">
                        <v-text-field v-model="state.codigo" :error-messages="v$.codigo.$errors.map(e => e.$message)"
                            :counter="40" label="Código" required @input="v$.codigo.$touch" @blur="v$.codigo.$touch"
                            class="inputForm">
                        </v-text-field>
    
                        <v-text-field v-model="state.novaSenha" :error-messages="v$.novaSenha.$errors.map(e => e.$message)"
                            :counter="16" label="Nova senha" required @input="v$.novaSenha.$touch" @blur="v$.novaSenha.$touch"
                            :type="state.showPassword ? 'text' : 'password'" class="marginForm inputForm marginBot">
                            <i class="iconMostrar bi" :class="state.showPassword ? 'bi-eye' : 'bi-eye-slash'"
                                @click="state.showPassword = !state.showPassword"></i>
                        </v-text-field>
                    </div>

                    <div class="wrapBtn">
                        <router-link to="/criarLogin">
                            <button type="button" class="btnCriar mt-3">Criar conta</button>
                        </router-link>
                        <button type="submit" class="btnLogin mt-3">Entrar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.mt{
    margin-top: 30px;
}
h4 {
    color: #43055D;
}


.wrapContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
}

.FormTop {
    display: flex;
    justify-content: center;
    padding: 10px;
    margin-bottom: 30px;
}

.FormBot {
    border: 1px solid rgb(105, 105, 105);
    padding: 25px;
    width: 560px;
    height: 587px;
}

.FormP {
    color: gray;
    margin-bottom: 2px;
}

.wrapForm {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.marginForm {
    margin-top: 50px;
}

.inputForm {
    width: 520px;
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
}

.btnSenha:hover {
    color: #43055D;
    transition: 0.7s;
}

.btnLogin {
    width: 150px;
    height: 45px;
    background-color: #43055D;
    color: white;
    border: none;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
}

.btnCriar {
    width: 150px;
    height: 45px;
    border: none;
    background-color: white;
    border: black 1px solid;
    text-align: center;
    color: #43055D;
    font-size: 18px;
    font-weight: bold;
    margin-right: 10px;
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
.wrapBtn{
    margin-top: 80px;
    margin-left: 180px;
}
</style>