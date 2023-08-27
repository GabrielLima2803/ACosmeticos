<script setup>
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'

const initialState = {
    name: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    phone: '',
    cpf: '',
    dataNascimento: '',
    cep: '',
    endereco: '',
    numeroCasa: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
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
    phone: { required, regex: /^\d{10}$/ },
    cpf: { required, regex: /^\d{11}$/ }, // Exemplo simples de validação de CPF
    dataNascimento: { required },
    cep: { required, regex: /^\d{8}$/ },
    endereco: { required },
    numeroCasa: { required },
    complemento: {},
    bairro: { required },
    cidade: { required },
    estado: { required },
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
              
                    <v-text-field v-model="state.cpf" :error-messages="v$.cpf.$errors.map(e => e.$message)" label="CPF"
                        required @input="v$.cpf.$touch" @blur="v$.cpf.$touch" class="marginForm inputForm ">
                    </v-text-field> 

                    <v-text-field v-model="state.dataNascimento"
                        :error-messages="v$.dataNascimento.$errors.map(e => e.$message)" label="Data de Nascimento" required
                        @input="v$.dataNascimento.$touch" @blur="v$.dataNascimento.$touch" class="marginForm inputForm">
                    </v-text-field>

    
                    <v-text-field v-model="state.cep" :error-messages="v$.cep.$errors.map(e => e.$message)" label="CEP"
                        required @input="v$.cep.$touch" @blur="v$.cep.$touch" class="marginForm inputForm ">
                    </v-text-field>
             


                    <v-text-field v-model="state.endereco" :error-messages="v$.endereco.$errors.map(e => e.$message)"
                        label="Endereço" required @input="v$.endereco.$touch" @blur="v$.endereco.$touch"
                        class="marginForm inputForm">
                    </v-text-field>
                    <div class="wrapTwoInputs">

                    <v-text-field v-model="state.numeroCasa" :error-messages="v$.numeroCasa.$errors.map(e => e.$message)"
                        label="Número da Casa" required @input="v$.numeroCasa.$touch" @blur="v$.numeroCasa.$touch"
                        class="marginForm inputForm inputCep">
                    </v-text-field>

                    <v-text-field v-model="state.complemento" :error-messages="v$.complemento.$errors.map(e => e.$message)"
                        label="Complemento" @input="v$.complemento.$touch" @blur="v$.complemento.$touch"
                        class="marginForm inputCep">
                    </v-text-field>
                    </div>

                    <v-text-field v-model="state.bairro" :error-messages="v$.bairro.$errors.map(e => e.$message)"
                        label="Bairro" required @input="v$.bairro.$touch" @blur="v$.bairro.$touch"
                        class="marginForm inputForm">
                    </v-text-field>

                    <v-text-field v-model="state.cidade" :error-messages="v$.cidade.$errors.map(e => e.$message)"
                        label="Cidade" required @input="v$.cidade.$touch" @blur="v$.cidade.$touch"
                        class="marginForm inputForm">
                    </v-text-field>

                    <v-text-field v-model="state.estado" :error-messages="v$.estado.$errors.map(e => e.$message)"
                        label="Estado" required @input="v$.estado.$touch" @blur="v$.estado.$touch"
                        class="marginForm inputForm">
                    </v-text-field>

                    <div class="displayBtn">
                        <button type="submit" class="BtnCriar" @click="v$.$validate">Criar Conta</button>
                    </div>
                    <div class="displayBtn">
                        <button type="submit" class="BtnSair" @click="v$.$validate">Criar Conta</button>
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
    height: 1352px;
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
    width: 580px;
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

.BtnSair{
    width: 580px;
    height: 50px;
    border: none;
    background-color: #ffffff;
    border: black 1px solid;
    text-align: center;
    color: #43055D;;
    font-size: 18px;
    font-weight: bold;
    padding: 5px;
    margin-top: 20px;
}

 .inputCep {
  width: 305px;
  height: 50px;
  padding: 15px;
   
}

 .wrapTwoInputs{
    display: grid;
    grid-template-columns: 50% auto;
   
} 
.wrapBtn {
  display: flex;
  /* align-content: flex-end; */
  justify-content: flex-end;
  margin: 10px;
  margin-right: 50px;
  margin-top: 70px;
}

</style>