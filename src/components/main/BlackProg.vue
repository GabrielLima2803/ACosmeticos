<template>
    <h1>Confira!!</h1>
    <div class="container">
        <router-link to="/oboticario">
            <img src="@/assets/img/Main-img/Main-Cards/propagandaO.png" alt="" class="img">
        </router-link>
    </div>
</template>
  
<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.img {
    width: 100%;
    max-width: 100%;
}

h1 {
    text-align: center;
    margin-bottom: 20px;
    margin-left: 0;
}

@media screen and (min-width: 768px) {
    .container {
        margin: 0 auto;
        max-width: 960px;
    }

    .img {
        width: 100%;
    }
}

@media screen and (min-width: 1200px) {
    .img {
        width: 130%;
        max-width: none;
        margin-left: -160px;
    }
}
</style>
  