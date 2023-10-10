<script setup>
import { ref, defineProps, onMounted } from 'vue'
import { getProduto } from '@/_data/produtos.js'
import { addAosCarrinho } from '@/_data/carrinho';
import CarrosselProduto from '@/components/main/Carrossel-Produto.vue'


const enviarProduto = ref(false)
const enviarComoUsar = ref(false)
const enviarIngredientes = ref(false)
const enviarProdutoDescricao = ref(false)

const produto = ref({})

const props = defineProps({
  tipo: String,
  id: Number
})

onMounted(() => {
  produto.value = getProduto(props.tipo, props.id)
})

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

const maxRating = 5
const rating = ref(0)

const setRating = (value) => {
  rating.value = value
}
</script>
<template>

  <div class="container">
    <div class="carrosel">
      <carrossel-produto :carouselItems="produto.hover ? [produto.img, produto.hover] : [produto.img]" />
    </div>
    <div class="info-produto">
      <div class="card-cosmeticos">
        <div class="categoria-card">
          <p class="descricao-Cos"> {{ produto.nome }} {{ produto.descricao }}</p>
          <div class="text-center">
            <div class="rating-container">
              <div class="rating">
                <span v-for="n in maxRating" :key="n" class="star" :class="{ 'filled': n <= rating }"
                  @click="setRating(n)">
                  <span class="star-border">&#9733;</span>
                </span>
              </div>
              <div class="rating-status">
                {{ rating > 0 ? 'AVALIADO' : 'SEM AVALIAÇÃO' }}
              </div>
            </div>
          </div>
          <p class="preco-Cos">{{ produto.preco }}</p>
          <p class="vezes">9x de R$ {{ ((produto.preco)/9).toFixed(2)}}</p>
          <button type="button" class="Button-CardPay" @click="addAosCarrinho(produto)">Comprar</button>
        </div>

      </div>
    </div>
  </div>
  <div class="button-container">
    <button @click="toggleEnviarProdutoDescricao" :class="{ 'active': enviarProdutoDescricao }">Produto</button>
    <button @click="toggleEnviarProduto" :class="{ 'active': enviarProduto }">Pirâmide olfativa</button>
    <button @click="toggleEnviarComoUsar" :class="{ 'active': enviarComoUsar }">Como Usar</button>
    <button @click="toggleEnviarIngredientes" :class="{ 'active': enviarIngredientes }">Ingredientes</button>
  </div>

  <div class="borderDiv" v-if="enviarProduto">
    <h6>Produto</h6>
    <div class="marginP">
      <p class="titulo">{{produto.nome}}</p>
      <p>
        {{produto.nome}} é uma fragrância amadeirada surpreendentemente mais sofisticada e
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
  <div class="borderDiv" v-if="enviarProdutoDescricao">
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

  <div class="borderDiv" v-if="enviarComoUsar">
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

  <div class="borderDiv" v-if="enviarIngredientes">
    <h6>Ingredientes</h6>
    <div class="marginP">
      <p>
        Álcool Desnaturado; Perfume; Água; Caprililglicol; Benzoato De Benzila; Cinamaldeído;
        Citral; Cumarina; Eugenol; Extrato De Evernia Prunastri; Geraniol; Isoeugenol; Limoneno;
        Linalol.
      </p>
    </div>

  </div>
  <div class="avaliacao">
    <h2>Avaliações</h2>
    <div class="pontuacao">
      <v-icon aria-hidden="false" color="#43055d">mdi-star</v-icon>
      <v-icon aria-hidden="false" color="#43055d">mdi-star</v-icon>
      <v-icon aria-hidden="false" color="#43055d">mdi-star</v-icon>
      <v-icon aria-hidden="false" color="#43055d">mdi-star</v-icon>
      <v-icon aria-hidden="false" color="#43055d">mdi-star-outline</v-icon>
      <div class="pPontuacao">
        <p>4.8</p>
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
* {
  font-family: 'Jost', sans-serif;
}

.button-container {
  display: flex;
  justify-content: flex-start;
}

.active {
  color: #45033d;
  /* Color for active button */
  text-decoration: underline;
}

.content-container {
  position: absolute;
  top: 100%;
  /* Position the content below the button */
  left: 0;
  width: 100%;
  z-index: 1;
}

.borderDiv {
  border: 2px solid #43055d;
  margin-top: 20px;
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

.avaliacao {
  margin-top: 40px;
  margin-left: 15px;
}

.v-progress {
  width: 455px;
  margin-left: -34%;
}

.h6-preto {
  color: black;
  margin-left: -2px;
}

.pontuacao {
  display: flex;
}

.pPontuacao {
  margin-left: 4px;
}

.button-item button:focus {
  color: #45033d;
  /* Temporary color when clicked */
  text-decoration: underline;
  /* Add the text decoration you want */
}

.descricao-Cos {
  font-size: x-large;
  width: 400px;
  margin-left: 20px;
}

.preco-Cos {
  font-size: xx-large;
  font-weight: bold;
  margin-bottom: 0px;
  margin-left: 170px;
}

.vezes {
  font-size: large;
  margin-top: -10px;
  display: flex;
  flex-direction: column;
  /* Stack the price and '9x de R$ 22,21' vertically */
  align-items: flex-end;
  /* Align items to the right */
  margin-right: 130px;
}

.Button-CardPay {
  width: 380px;
  height: 50px;
  background-color: #43055d;
  color: white;
  font-size: large;
}

.info-produto {
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
  border-left: 1px solid #B9B9B9;
  /* Add a thin black vertical line to separate sections */
  padding-left: 20px;
  /* Add some left padding to the info-produto section */
}

.container {
  display: flex;
  /* Display the carrosel and info-produto side by side */
  margin-top: 100px;
  margin-left: 0px;
}

.carrosel {
  flex: 1;
  /* Take up available space */
  /* Other carrosel styles */
}

.info-produto {
  flex: 1;
  /* Take up available space */
  margin-left: 20px;
  /* Add some space between carrosel and info-produto */
  /* Other info-produto styles */
}

.rating-container {
  display: flex;
  align-items: center;
  margin-left: 80px;
  margin-top: px;
  margin-bottom: 20px;
}

.star {
  font-size: 24px;
  cursor: pointer;
  display: inline-block;
  margin-right: 4px;
}

.star-border {
  color: #d3d3d3;
  /* Cor da borda da estrela */
}

.filled .star-border {
  color: #43055d;
  /* Cor da estrela preenchida */
}

.rating-status {
  margin-left: 8px;
  color: #43055d;
  font-size: x-small;

}
</style>
