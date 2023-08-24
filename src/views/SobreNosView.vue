<script setup>
</script>

<template>
    <div class="tamanhoDivs">

        <div class="wrapContainer">
            <div class="containerPrincipal">
                <div>
                    <img class="logo" src="@/img/img-sobrenos/icone.png" alt="">
                    <div>
                        <h1>Sobre Nós</h1>
                        <div>
                            <p class="p1">A comésticos foi fundada em 2022, com o intuito de ajudar a fundadora Andreia a
                                crescer o seu negócio e para maior facilidade em verificar seu estoque. O que era apenas uma
                                planilha com todos os valores e produtos sem graça em que os clientes não poderiam nem
                                consultar, agora temos um site para visualização dos clientes e próprio controle. “Mais de 4
                                anos tentando encaixar algo que me ajudasse e ajudasse meus cliente”</p>
                        </div>
                    </div>
                </div>
                <div class="wrapGrid">
                    <div  class="left-div">
                        <img class="img1" src="@/img/img-sobrenos/AndreiaPrimeira.png" alt="">
                    </div>
                    <div class="p2 right-div">
                        <p class="pDireita">A vida é mais leve para quem acredita no poder dos seus sonhos e corre atrás para alcançá-los
                            sempre, sem dar muita audiência para os dias mais difíceis. É isso que move nossos clientes e
                            consultores. Gente que entende que a vida é um jogo de altos e baixos e, com alegria e de braços
                            abertos, se permite sonhar. Estar próximo de suas estrelas, ganhar prémios, transformar a sua
                            vida e a da sua família, de repente, nunca foram tão reais. Queremos encorajar as pessoas a
                            fazer as melhores escolhas e a conquistar o que quiserem.</p>
                    </div>
                </div>
                <div class="wrapGrid">
                    <div  class="left-div">
                        <h4>CARTA ABERTA PELOS DIREITOS HUMANOS</h4>
                        <p class="pDireita">A vida é mais leve para quem acredita no poder dos seus sonhos e corre atrás para alcançá-los
                            sempre, sem dar muita audiência para os dias mais difíceis. É isso que move nossos clientes e
                            consultores. Gente que entende que a vida é um jogo de altos e baixos e, com alegria e de braços
                            abertos, se permite sonhar. Estar próximo de suas estrelas, ganhar prémios, transformar a sua
                            vida e a da sua família, de repente, nunca foram tão reais. Queremos encorajar as pessoas a
                            fazer as melhores escolhas e a conquistar o que quiserem.</p>
                    </div>
                    <div class=" right-div">
                        <img class="img" src="@/img/img-sobrenos/AndreiaSegunda.png" alt="">
                    </div>
                </div>
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

.containerPrincipal {
    width: 720px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

h1 {
    text-align: center;
    text-decoration: none;
    color: #43055D;
    font-size: 300%;
}

p{
    font-size: 85%;
}
.logo {
    width: 90px;
    height: 40px;
    margin-left: 265px;
}
.wrapGrid{
    display: grid;
    grid-template-columns: 1fr 1fr; /* Two columns with equal width */
    gap: 20px; /* Add some gap between the columns */
    align-items: center; /* Center vertically */
}

.left-div{
    text-align: center; /* Center the image horizontally */
    margin-top: 10%;
}

.right-div{
    text-align: left;
}
.p1 {
    width: 600px;
    text-align: center;
    margin-top: 30px;
    margin-left: 10px;
}

.img1 {
    margin: 30px;
    width: 450px;
    margin-right: 90%;
    box-shadow: -6px 6px 1px #43055D;
}

.p2 {
    text-align: left;
}
.pDireita{
    width: 500px;
    margin-left: 20%;
}
img{
    margin: 30px;
    width: 450px;
    margin-right: 90%;
}
</style>