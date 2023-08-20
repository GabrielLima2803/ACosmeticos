<script setup>

</script>

<template>
  <div class="flex">
    <div class="wrapPanel">
      <div class="marginTop">
      <h2>Dúvidas Frequentes</h2>
      </div>
      <v-expansion-panels class="marginPanel">
        <v-expansion-panel class="TamanhoPanel">
          <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus" class="focus1">
            <img src="@/img/Main-img/Main-Panel/bolsa.png" alt="" width="15">
            <p class="pTitle">Prazo e Entrega</p>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            Após escolher o(s) produto(s) que deseja adquirir, o USUÁRIO terá à disposição diversos tipos de frete, os
            quais podem variar de acordo com sua localização e tipo de produto adquirido. O processo de entrega do(s)
            produto(s) adquirido(s) se dará após a confirmação do pagamento pela Loja Virtual Jequiti. Maiores informações
            a respeito dos tipos de frete, bem como o procedimento de entrega podem ser obtidas na Central de Atendimento.
            <br />
            A entrega normal é realizada (em avaliação) de segunda à sexta-feira das 8h às 20h. O USUÁRIO saberá o prazo
            de entrega ao digitar seu CEP no momento de finalização da sua compra. Após aprovação, o USUÁRIO também
            receberá um e-mail informando o status do seu pedido, o prazo de entrega e link com tracking para
            acompanhamento de todas as etapas de entrega do pedido.
            Para a cidade de São Paulo é oferecida a possibilidade de agendar a entrega. Para isso, no momento da
            finalização da sua compra selecione “entrega agendada” e escolha a data e período dentro do calendário
            disponível. Em alguns estados (SP, MG, RJ, PR) alguns clientes poderão ter a opção de contratar o Frete
            Expresso. <br />
            O frete será isento nas seguintes condições:
            <ul>
              <li>
            Nas compras acima de R$ 109,00 nas regiões: SUL E SUDESTE
              </li>
              <li>
            Nas compras acima de R$ 129,00 na região CENTRO-OESTE
              </li>
              <li>
            Nas compras acima de R$ 159,00 na região NORDESTE
              </li>
              <li>
            Nas compras acima de R$ 169,00 na região NORTE
              </li>
            </ul>
            O frete será isento somente na primeira compra.
            O Calculo frete baseado na relação peso/região/cidade e quantidade de itens e o valor a ser pago será apresentado no carrinho de compras. 
            <br/>
            A Loja Virtual Jequiti não tem controle ou responsabilidade em casos de atrasos na entrega ou extravio. Caso
            nosso entregador não encontre ninguém no local indicado, fará até três tentativas.
            O endereço do USUÁRIO deve ser informado da forma correta, com todos os detalhes, pois caso não seja
            localizado por motivos de irregularidade, os custos de envio ficarão a cargo do comprador.      <br/>
            Os prazos de entrega poderão ser alterados nas seguintes situações: inconsistência nos dados informados no
            cadastro; dificuldades na confirmação do cadastro para liberação do pedido; ausência de responsável para
            receber o produto no local de entrega. Recusa no recebimento da mercadoria por terceiros. Fatores naturais
            como chuvas, acidentes, entre outros. Apontamento pelos nossos transportadores de anomalia com a qualidade da
            embalagem ou do produto.
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel class="marginPanel">
          <v-expansion-panel-title>
            <img src="@/img/Main-img/Main-Panel/seta.png" alt="" width="16">
            <p class="pTitle">Troca e Devoluções</p>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </v-expansion-panel-text>
        </v-expansion-panel>
        

        <v-expansion-panel class="marginPanel">
          <v-expansion-panel-title disable-icon-rotate>
            <img src="@/img/Main-img/Main-Panel/Book.png" alt="" width="15">
            <p class="pTitle">Termos e Condições</p>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>

      
      <v-expansion-panels class="marginPanel">
      <v-expansion-panel>
        <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
          <img src="@/img/Main-img/Main-Panel/medalha.png" alt="" width="11">
            <p class="pTitle">Política e Privacidade </p>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel class="marginPanel">
        <v-expansion-panel-title>
          <img src="@/img/Main-img/Main-Panel/pessoa.png" alt="" width="15">
            <p class="pTitle">Perguntas Frequentes</p>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel class="marginPanel">
        <v-expansion-panel-title disable-icon-rotate>
          <img src="@/img/Main-img/Main-Panel/perigo.png" alt="" width="15">
            <p class="pTitle">Alerta</p>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
      
    </div>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapPanel {
  display: flex;
  flex-wrap: wrap;
  width: 900px;
  align-items: center;
  justify-content: center;
}

.marginPanel {
  margin-top: 20px;
}

h1 {
  text-align: center;
}

.pTitle {
  margin: 0px;
  margin-left: 10px;
}
.focus1:focus {
  background-color: #43055D;
  color: white;
  transition: 0.6s ease;
}
.marginTop{
  margin-top: 20px;
}
</style>