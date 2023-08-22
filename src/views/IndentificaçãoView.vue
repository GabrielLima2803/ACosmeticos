<script setup>
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { email, required, helpers } from '@vuelidate/validators'




const initialState = {
    name: '',
    email: '',
    senha: '',
    phone: '',
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
    phone: { required, phone: helpers.regex(/^\d{10}$/) },
}

const v$ = useVuelidate(rules, state)

function clear() {
    v$.value.$reset()

    for (const [key, value] of Object.entries(initialState)) {
        state[key] = value
    }
}


</script>

<template>
    <div class="wrapContainer">
        <div class="containerPrincipal">
            <div class="logo">
                <img src="@/img/Main-img/CriarConta/Logo.png" alt="" width="130">
            </div>
            <div class="forms ">
                <form class="wrapForm">
                    <v-text-field v-model="state.name" :error-messages="v$.name.$errors.map(e => e.$message)" :counter="40"
                        label="Insira seu nome" required @input="v$.name.$touch" @blur="v$.name.$touch"
                        class="marginForm inputForm">
                    </v-text-field>

                    <v-text-field v-model="state.name" :error-messages="v$.name.$errors.map(e => e.$message)" :counter="40"
                        label="Insira seu nome" required @input="v$.name.$touch" @blur="v$.name.$touch"
                        class="marginForm inputForm">
                    </v-text-field>

                    <v-text-field v-model="state.name" :error-messages="v$.name.$errors.map(e => e.$message)" :counter="40"
                        label="Insira seu nome" required @input="v$.name.$touch" @blur="v$.name.$touch"
                        class="marginForm inputForm">
                    </v-text-field>

                    <v-text-field v-model="state.name" :error-messages="v$.name.$errors.map(e => e.$message)" :counter="40"
                        label="Insira seu nome" required @input="v$.name.$touch" @blur="v$.name.$touch"
                        class="marginForm inputForm">
                    </v-text-field>
                    
                    <div class="wrapCep">
                    <v-text-field v-model="state.phone" :error-messages="v$.phone.$errors.map(e => e.$message)"
                        label="Insira seu telefone" required @input="v$.phone.$touch" @blur="v$.phone.$touch"
                        class="marginForm inputForm inputCep">
                    </v-text-field>
                    </div>

                    <v-text-field v-model="state.email" :error-messages="v$.email.$errors.map(e => e.$message)"
                        label="Insira seu Email" required @input="v$.email.$touch" @blur="v$.email.$touch"
                        class="marginForm inputForm">
                    </v-text-field>

                    <v-text-field v-model="state.name" :error-messages="v$.name.$errors.map(e => e.$message)" :counter="40"
                        label="Insira seu nome" required @input="v$.name.$touch" @blur="v$.name.$touch"
                        class="marginForm inputForm">
                    </v-text-field>

                    <v-text-field v-model="state.name" :error-messages="v$.name.$errors.map(e => e.$message)" :counter="40"
                        label="Insira seu nome" required @input="v$.name.$touch" @blur="v$.name.$touch"
                        class="marginForm inputForm">
                    </v-text-field>

                    <v-text-field v-model="state.name" :error-messages="v$.name.$errors.map(e => e.$message)" :counter="40"
                        label="Insira seu nome" required @input="v$.name.$touch" @blur="v$.name.$touch"
                        class="marginForm inputForm">
                    </v-text-field>

                    <v-text-field v-model="state.name" :error-messages="v$.name.$errors.map(e => e.$message)" :counter="40"
                        label="Insira seu nome" required @input="v$.name.$touch" @blur="v$.name.$touch"
                        class="marginForm inputForm">
                    </v-text-field>

                    <v-text-field v-model="state.name" :error-messages="v$.name.$errors.map(e => e.$message)" :counter="40"
                        label="Insira seu nome" required @input="v$.name.$touch" @blur="v$.name.$touch"
                        class="marginForm inputForm">
                    </v-text-field>

                    <div class="displayBtn">
                        <button type="submit" class="BtnCriar" @click="v$.$validate">Criar Conta</button>
                    </div>

                </form>
            </div>
            <div class="wrapBtn">
                <v-btn @click="clear">Clear</v-btn>
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

.wrapContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
}

.containerPrincipal {
    width: 800px;
    height: 1400px;
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

.marginForm {
    margin-top: 40px;
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
.inputCep{
    width: 305px;
    height: 50px;
    padding: 15px;
}
.wrapCep{
    
}
</style>