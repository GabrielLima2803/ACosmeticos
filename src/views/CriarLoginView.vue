<script setup>
</script>

<template>
    <div class="wrapContainer">
        <div class="containerPrincipal">
            <div class="logo">
                <img src="@/img/Main-img/CriarConta/Logo.png" alt="" width="150">
            </div>
            <div class="forms">
                <form action="" class="wrapForm">
                    <input type="text" id="nome" v-model="nome" placeholder="Insira sua senha..." class="marginForm inputForm">
                    <label for="">Digite seu nome</label>
                    <input type="email" id="email" v-model="email" placeholder="Insira sua senha..." class="marginForm inputForm">
                    <label for="">Digite seu e-mail</label>
                    <input type="password" id="senha"  v-model="senha" placeholder="Insira sua senha..." minlength="3" maxlength="20" class="marginForm inputForm">
                    <label for="">Crie sua senha</label>
                    <input type="password" id="senhaConfirmar"  v-model="senhaConfirmar" placeholder="Insira sua senha..." minlength="3" maxlength="20" class="marginForm inputForm">
                    <label for="">Confirmação de senha a</label> 
                    
                    <button type="submit" c></button>
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
    width: 622px;
    height: 530px;
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
.marginForm{
    margin-top: 25px;
}
</style>