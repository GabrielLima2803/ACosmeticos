<template>
   <div class="sacolaVazia">
   <img src="@/assets/img/carrinho/sacola.png" alt="" class="imgSacola">
   <h1>Sua sacola está vazia</h1>
   <p>Você não adicionou nenhum item à sua sacola</p>
   <router-link to="/"><button class="continuarComprando">Continuar comprando</button> </router-link>
</div>
</template>

<style scooped>

.continuarComprando{
   background-color: #43055D;
   color: white;
   border: none;
   width: 180px;
   height: 40px;
}
.imgSacola{
   width: 137px ;
   height: 133.81px;
   margin: 60px;
}
h1{
   text-decoration-line: underline;
   text-decoration-thickness: 2px;  
}
.sacolaVazia{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
}
button{
  border: none;
  background-color: white;
}


</style>