<script setup>
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'

const initialState = {
  name: '',
  email: '',
  senha: '',
  select: null,
  checkbox: null,
}

const state = reactive({
  ...initialState,
})
 

const rules = {
  name: { required },
  email: { required, email },
  senha: { required },
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
            label="Insira seu nome" required @input="v$.name.$touch" @blur="v$.name.$touch" class="marginForm inputForm"></v-text-field>

          <v-text-field v-model="state.email" :error-messages="v$.email.$errors.map(e => e.$message)" label="Insira seu Email"
            required @input="v$.email.$touch" @blur="v$.email.$touch" class="marginForm inputForm"></v-text-field>

            <v-text-field v-model="state.senha" :error-messages="v$.name.$errors.map(e => e.$message)" :counter="16"
            label="Insira sua senha" required @input="v$.name.$touch" @blur="v$.name.$touch"  class="marginForm inputForm"></v-text-field>

            <v-text-field v-model="state.name" :error-messages="v$.name.$errors.map(e => e.$message)" :counter="16"
            label="Confirme sua senha" required @input="v$.name.$touch" @blur="v$.name.$touch" class="marginForm inputForm"></v-text-field>


          <div class="displayBtn">
          <button type="submit" class="BtnCriar" @click="v$.$validate">Criar Conta</button>
            <button class="BtnClear" @click="clear">Clear</button>
            </div>

        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.displayBtn{
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
  width: 700px;
  height: 580px;
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
  margin-top: 50px;
}

.BtnCriar:hover {
  background-color: white;
  transition: 0.6s ease-in;
  color: #43055D;
  border: #43055D 1px solid;
}

.BtnClear{
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
</style>