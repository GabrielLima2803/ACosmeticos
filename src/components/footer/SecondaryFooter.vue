<template>
  <div class="footer-flex">
    <div class="ft-main">
      <h5>
        Pagamentos
      </h5>
      <img src="@/img/Footer-Pay/masterCardPay.png" alt="" class="ImgPay-Margin">
      <img src="@/img/Footer-Pay/visaPay.png" alt="" class="ImgPay-Margin">
      <img src="@/img/Footer-Pay/amexPay.png" alt="" class="ImgPay-Margin">
      <img src="@/img/Footer-Pay/eloPay.png" alt="" class="ImgPay-Margin">
      <img src="@/img/Footer-Pay/hiperCardPay.png" alt="" class="ImgPay-Margin">
    </div>

    <div class="ft-main">
      <h5>
        Nossas Marcas
      </h5>
      <p>
        Inicio
      </p>
      <p>
        Sobre Nós
      </p>
      <p>
        Kit & Presentes
      </p>
    </div>

    <div class="ft-main">
      <h5>
        Nossas Redes
      </h5>
      <p>
        Prazos e Entregas
      </p>
      <p>
        Troca e devoluções
      </p>
      <p>
        Termos e Condições
      </p>
      <p>
        Política e Privacidade
      </p>
      <p>
        Perguntas Frequentes
      </p>
      <p>
        Alerta
      </p>
    </div>
  </div>
</template>


<style scoped>
.footer-flex {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.ft-main {
  width: 20%;
  margin: 0 50px;
}

.about-text {
  width: 80%;
}
p{
  margin-bottom: 12px;
}
.ImgPay-Margin{
  margin-right: 5px;
}
</style>