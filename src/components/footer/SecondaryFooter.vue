<template>
  <div class="p-5 footer-flex ft-main-marginTop">
    <div class="ft-main ">
      <h5>
        Pagamentos
      </h5>
      <img src="@/assets/img/Footer-img/Footer-Pay/masterCardPay.png" alt="" class="ft-img-Margin">
      <img src="@/assets/img/Footer-img/Footer-Pay/visaPay.png" alt="" class="ft-img-Margin">
      <img src="@/assets/img/Footer-img/Footer-Pay/amexPay.png" alt="" class="ft-img-Margin">
      <img src="@/assets/img/Footer-img/Footer-Pay/eloPay.png" alt="" class="ft-img-Margin">
      <img src="@/assets/img/Footer-img/Footer-Pay/hiperCardPay.png" alt="" class="ft-img-Margin">
    </div>

    <div class="ft-main">
      <h5>
        Nossas Marcas
      </h5>
      <img src="@/assets/img/Footer-img/Footer-Marcas/maryKayMarcas.png" alt="">
      <img src="@/assets/img/Footer-img/Footer-Marcas/eudoraMarcas.png" alt="">
      <img src="@/assets/img/Footer-img/Footer-Marcas/oboticarioMarcas.png" alt="">
      <img src="@/assets/img/Footer-img/Footer-Marcas/jequetiMarcas.png" alt="">
      <img src="@/assets/img/Footer-img/Footer-Marcas/naturaMarcas.png" alt="">
      <img src="@/assets/img/Footer-img/Footer-Marcas/avonMarcas.png" alt="">
    </div>

    <div class="ft-main">
      <h5>
        Nossas Redes
      </h5>
        <div class="ft-redes">
          <img src="@/assets/img/Footer-img/Footer-Redes/instaRedes.png" alt="" class="ft-img-Margin">
          <img src="@/assets/img/Footer-img/Footer-Redes/twitterRedes.png" alt="" class="ft-img-Margin">
          <img src="@/assets/img/Footer-img/Footer-Redes/faceRedes.png" alt="" class="ft-img-Margin">
        </div>
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
  margin-left: 7px;
}

.about-text {
  width: 80%;
}
p{
  margin-bottom: 12px;
}
.ft-img-Margin{
  margin-right: 5px;
}
.ft-redes{
  background-color: #43055D;

  width: 82px;
}
h5{
  font-size: 17px;
}
.ft-main-marginTop{
  margin-top: 5px;
}
.ft-cop{
  text-align: center;
  font-size: 15px;
  margin-top: 15px;
  margin-right: 60px;
}
h5 {
  padding-bottom: 1em;
}
</style>