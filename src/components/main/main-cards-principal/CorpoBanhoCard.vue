<script setup>

const perfumaria = [
  {
    id: 1,
    marca: 'Malbec',
    img: 'https://i.ibb.co/CVNLhqm/malbec-2.png',
    hover: 'Com fragrâncias marcantes como um bom vinho, as fragrâncias Malbec são as primeiras do mundo a serem feitas com álcool vínico.'
    

  },
  {
    id: 2,
    img: 'https://i.ibb.co/CVNLhqm/malbec-2.png'
  },
  {
    id: 3,
    img: 'https://i.ibb.co/CVNLhqm/malbec-2.png'
  },
  {
    id: 4,
    img: 'https://i.ibb.co/CVNLhqm/malbec-2.png'
  },
  {
    id: 5,
    img: 'https://i.ibb.co/CVNLhqm/malbec-2.png'
  },
]
</script>

<template>
   <v-row>
    <v-col
      v-for="(produto, index) in perfumaria"
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
