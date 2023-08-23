<script setup>
import { liz } from '@/_data/corpoebanho.js'
</script>


<template>
    <div class="card-cosmeticos">
        <div class="card-cosmeticos">
            <div v-for="(lizs) in liz" :key="lizs.id" class="card-margin flexCard">
                <!-- ... rest of your card content ... -->
                <div class="img-coracao">
                        <img src="@/img/icon-Header/icon_Coração.png" alt="" class="logo-img" />
                    </div>
                <!-- Modify the img tag to use the hover images -->
                <div class="tamanho-card">
                    <img :src="lizs.img" class="capa-img" />
                </div>
                <div class="img-oboticario">
                <img src="@/img/Main-img/Main-Cards/logo.oboticário.png" alt="" class="logo-img" />
            </div>
                <h5 class="titulo-Cos">
                    {{ lizs.nome }}
                </h5>
                <p class="descricao-Cos">
                    {{ lizs.descricao }}
                </p>
                <p class="preco-Cos">
                    {{ lizs.preco }}
                </p>
                <button type="button" class="Button-CardPay">
                    <img src="@/img/Main-img/Main-Cards/icone.sacola.png" alt="" class="Btn-Pay" />
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-cosmeticos {
    display: flex;
    flex-wrap: wrap;
    margin-left: 50px;

}

.flexCard {
    flex: 0 0 calc(20% - 5px);
    /*Vai Colocar cada card em 25%*/
    /* margin: 10px; */
    /* align-items: center;  Debater com a equipe*/
    display: flex;
    flex-direction: column;
    
    justify-content: space-around;
}

.Button-CardPay {
    margin-left: -1px;
    width: 68%;
    border: 2px solid #4d066b;
    background-color: #F4F4F4;
}

.Button-CardPay:hover {
    border: 2px solid #2d0241;
    transition: 0.6s ease;
}
.Button-CardPay:hover{
    background-color: #4d066b;
}
.Btn-Pay {
    width: 20px;
    padding-bottom: 2px;
}

.capa-img {
    max-width: 71%;
    height: auto;
    margin-bottom: 10px;
    padding: 5px;
    cursor: pointer;

    transition: transform 0.3s ease;
}


.h1-card-main {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 30px;
}

.img-oboticario {
    display: flex;
    justify-content: flex-end;
    max-width: 227px;
}

.img-coracao {
    display: flex;
    justify-content: flex-end;
    max-width: 227px;
}
</style>