<script setup>
import { ref, computed } from 'vue'

const enviarProduto = ref(false)
const enviarComoUsar = ref(false)
const enviarIngredientes = ref(false)
const enviarProdutoDescricao = ref(false)

const toggleEnviarProduto = () => {
  enviarProduto.value = !enviarProduto.value
  // Feche os outros blocos ao abrir o bloco Produto
  enviarComoUsar.value = false
  enviarIngredientes.value = false
  enviarProdutoDescricao.value = false
}

const toggleEnviarComoUsar = () => {
  enviarComoUsar.value = !enviarComoUsar.value
  // Feche os outros blocos ao abrir o bloco Como Usar
  enviarProduto.value = false
  enviarIngredientes.value = false
  enviarProdutoDescricao.value = false
}

const toggleEnviarIngredientes = () => {
  enviarIngredientes.value = !enviarIngredientes.value
  // Feche os outros blocos ao abrir o bloco Ingredientes
  enviarProduto.value = false
  enviarComoUsar.value = false
  enviarProdutoDescricao.value = false
}

const toggleEnviarProdutoDescricao = () => {
  enviarProdutoDescricao.value = !enviarProdutoDescricao.value
  // Feche os outros blocos ao abrir o bloco Produto Descrição
  enviarProduto.value = false
  enviarComoUsar.value = false
  enviarIngredientes.value = false
}
</script>

<template>
  <div class="button-container">
      <div class="button-item">
        <button @click="toggleEnviarProdutoDescricao" class="button-color">Produto</button>
        <div v-if="enviarProdutoDescricao" class="borderDiv" >
          <h6>Produto</h6>
          <div class="marginP">
            <p class="titulo">Malbec Club Intenso Desodorante Colônia 100ml</p>
            <p>
              Malbec Club Intenso é uma fragrância amadeirada surpreendentemente mais sofisticada e
              intensa que a original, mas com o mesmo DNA sofisticado e irresistível.
            </p>
            <p>
              Malbec é uma fragrância única, desenvolvida através de um processo de fabricação
              exclusivo no mundo. O álcool vínico, obtido através da fermentação da uva, é envelhecido
              em barris de carvalho francês, iguais àqueles em que descansam os melhores vinhos do
              mundo.
            </p>
      
            <p>
              Possui ingredientes nobres e puros como a madeira, o âmbar e o musk, ideal para agradar
              a homens de vários estilos.
            </p>
      
            <p>
              Representando a masculinidade de uma forma única, essa fragrância é feita para homens
              que sabem se impor. Que são notados por onde passam. Que têm a essência da conquista em
              tudo o que fazem.
            </p>
            <p>
              Esse Amadeirado Aromático possui frasco feito de vidro reciclado, evitando o desperdício
              de centenas de toneladas de material.
            </p>
          </div>
        </div>
      </div>
      <div class="button-item">
      <button @click="toggleEnviarProduto">Pirâramide olfatica</button>
      <div v-if="enviarProduto" class="borderDiv">
        <h6>Pirâramide olfatica</h6>
        <div class="marginP">
          <p>Conselho de Aplicação</p>
          <p>Aplique sob os lugares de maior circulação sanguínea.</p>
          <p>
            ORIENTAÇÕES AO CONSUMIDOR: Inflamável. Evite contato com os olhos. Não aplique em pele
            irritada ou lesionada e evite aplicar nas axilas. Caso ocorra irritação e/ou prurido no
            local, suspenda o uso imediatamente. Descontinue o uso em caso de sensibilização.
            Conserve o produto bem fechado, longe da luz e do calor excessivo. Somente para uso
            externo. Mantenha fora do alcance de crianças. Produto para perfumar e desodorizar a
            pele.
          </p>
          <p>
            Devido à presença de alguns ingredientes, a cor do produto pode variar, porém sem
            comprometer sua qualidade ou segurança.
          </p>
        </div>
      </div>
    </div>
    <div class="button-item">
      <button @click="toggleEnviarComoUsar">Como Usar</button>
      <div v-if="enviarComoUsar" class="borderDiv">
        <h6>Como Usar</h6>
        <div class="marginP">
          <p>Conselho de Aplicação</p>
          <p>Aplique sob os lugares de maior circulação sanguínea.</p>
          <p>
            ORIENTAÇÕES AO CONSUMIDOR: Inflamável. Evite contato com os olhos. Não aplique em pele
            irritada ou lesionada e evite aplicar nas axilas. Caso ocorra irritação e/ou prurido no
            local, suspenda o uso imediatamente. Descontinue o uso em caso de sensibilização.
            Conserve o produto bem fechado, longe da luz e do calor excessivo. Somente para uso
            externo. Mantenha fora do alcance de crianças. Produto para perfumar e desodorizar a
            pele.
          </p>
          <p>
            Devido à presença de alguns ingredientes, a cor do produto pode variar, porém sem
            comprometer sua qualidade ou segurança.
          </p>
        </div>
      </div>
    </div>

    <div class="button-item">
      <button @click="toggleEnviarIngredientes">Ingredientes</button>
      <div v-if="enviarIngredientes" class="borderDiv">
        <h6>Ingredientes</h6>
        <div class="marginP">
          <p>
            Álcool Desnaturado; Perfume; Água; Caprililglicol; Benzoato De Benzila; Cinamaldeído;
            Citral; Cumarina; Eugenol; Extrato De Evernia Prunastri; Geraniol; Isoeugenol; Limoneno;
            Linalol.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div>
    <h2>Avaliações</h2>
<div class="pontuacao">
<v-icon aria-hidden="false" color="#43055d">mdi-star</v-icon>
<v-icon aria-hidden="false" color="#43055d">mdi-star</v-icon>
<v-icon aria-hidden="false" color="#43055d">mdi-star</v-icon>
<v-icon aria-hidden="false" color="#43055d">mdi-star</v-icon>
<v-icon aria-hidden="false" color="#43055d">mdi-star-outline</v-icon> 
<div class="pPontuacao">
  <p >4.8</p>
</div>
  </div>
    <div>
      <h6 class="h6-preto">Avaliações Boas</h6>
      <v-progress-linear color="#43055d" model-value="50" :height="8" class="v-progress"></v-progress-linear>
    </div>
     <div>
      <h6 class="h6-preto">Avaliações Ruins</h6>
      <v-progress-linear color="#43055d" model-value="10" :height="8" class="v-progress"></v-progress-linear>
    </div>
  </div>
</template>

<style scoped>
.button-container {
  display: flex;
}

.content-container {
  position: relative; /* Set the position to relative */
}

.borderDiv {
  border: 2px solid #43055d;
}

/* Add this style to show the opened content div */
.button-item {
  margin-right: 20px; /* Adapte o espaçamento conforme necessário */
  margin-bottom: 20px; /* Espaçamento entre os itens */
}
h6 {
  color: #43055d;
  margin: 20px;
}
.borderDiv {
  border: 2px solid #43055d;
  width: 890px;
}
.marginP {
  margin: 20px;
}
.titulo {
  font-weight: bold;
}
button {
  margin: 20px;
}
.v-progress{
  width: 455px;
  margin-left: -35%;
}
.h6-preto{
  color: black;
}
.pontuacao{
  display: flex;
}
.pPontuacao{
  margin-left: 4px;
}

.button-item button:focus {
  color: #45033d; /* Temporary color when clicked */
  text-decoration: underline; /* Add the text decoration you want */
}

</style>
