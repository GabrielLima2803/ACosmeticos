<script setup>

const maquiagem = [
  {
    id: 1,
    marca: 'Olho',
    img: 'https://i.ibb.co/Mp2CNg1/image-134.png',
    hover: 'Realce seus olhos com nossos produtos de maquiagem, destacando sua expressão de maneira autêntica e moderna.'
    

  },
  {
    id: 2,
    marca: 'Boca',
    img: 'https://i.ibb.co/bB4W2Yy/image-119.png',
    hover: 'Um batom cuidadosamente selecionado não apenas colore os lábios, mas também revela sua confiança e estilo de forma sutil e autêntica.'
  },
  {
    id: 3,
    marca: 'Blush',
    img: 'https://i.ibb.co/TcF51wY/image-119-1.png',
    hover: 'Com um toque suave de blush, as bochechas ganham um rubor sutil, irradiando um frescor que parece capturar a luminosidade do dia.'
  },
  {
    id: 4,
    marca: 'Rosto',
    img: 'https://i.ibb.co/VSzg4k3/image-135.png',
    hover: 'A maquiagem para o rosto realça a beleza única de cada pessoa, sem exageros, apenas realçando o que já é incrível.'
  },
  {
    id: 5,
    marca: 'Brilho',
    img: 'https://i.ibb.co/syy2fFy/image-136.png',
    hover: 'Descubra a luminosidade sofisticada que sua maquiagem pode ter, proporcionando um brilho que reflete sua beleza autêntica.'
  },
]
</script>

<template>
   <v-row>
    <v-col
      v-for="(produto, index) in maquiagem"
      :key="produto.id"
      class="col"
    >
    <v-hover slot="{ hover }">
      <img
            :src="produto.img"
            class="img"
          />
      </v-hover>
    </v-col>
  </v-row>
  
      <div class="natds2415" data-gtm-vis-has-fired-49267163_2347="1"><p class="MuiTypography-root MuiTypography-body1 MuiTypography-alignCenter" 
        data-gtm-vis-has-fired-49267163_2347="1"><b data-gtm-vis-has-fired-49267163_2347="1">AROMÁTICOS</b></p></div><div 
        class="natds2416" data-gtm-vis-has-fired-49267163_2347="1"><div class="natds2417" data-gtm-vis-has-fired-49267163_2347="1"></div>
        <div class="natds2418" data-gtm-vis-has-fired-49267163_2347="1"><span class="MuiTypography-root MuiTypography-body2 MuiTypography-alignCenter" 
          data-gtm-vis-has-fired-49267163_2347="1"><p data-gtm-vis-has-fired-49267163_2347="1">Destacados pelas notas de alecrim, menta, estoraque, poejo, 
            pataqueira e lavanda.</p>
</span></div></div>

</template>

<style scoped>
.v-row{
  margin: 0;
}
.col {
  padding: 0;
}
.img{
  height: 420px;
  margin: 0;
}
/* Defina a largura da imagem */
img {
  width: 100%;
  height: auto;
}
.img:hover{
  cursor: pointer;
  width: 240px;
  transition: width 0.3s ease-in-out;
}


/* tentativa */
.natds2393 {
    min-width: 1200px;
    flex-wrap: nowrap;
}
.natds2392 {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
}
.natds2393 {
    min-width: 1200px;
    flex-wrap: nowrap;
}
.natds2392 {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
}
.natds2422 {
    padding: 0px;
}

.natds2413 {
    color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.48);
}.natds2415 {
    margin: 8px;
    display: flex;
    transition: all 1s ease-in-out;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
.MuiTypography-alignCenter {
    text-align: center;
}
.MuiTypography-body1 {
    font-size: 16px;
    font-family: "Roboto", Arial;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.51px;
}
.MuiTypography-root {
    margin: 0;
}
.MuiTypography-alignCenter {
    text-align: center;
}
.MuiTypography-body1 {
    font-size: 16px;
    font-family: "Roboto", Arial;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.51px;
}
.MuiTypography-root {
    margin: 0;
}
.natds2416 {
    display: flex;
    opacity: 0;
    max-height: 0;
    transition: opacity 0.3s 0.2s, visibility 0.5s, max-height 0.5s;
    visibility: hidden;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
.natds2417 {
    width: 42px;
    height: 3px;
    margin-bottom: 24px;
    background-color: #f4ab34;
}
.natds2418 {
    padding-left: 16px;
    margin-bottom: 16px;
    padding-right: 16px;
}

</style>
