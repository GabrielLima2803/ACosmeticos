<script setup>
</script>

<template>
    <div class="flex">
    <div class="wrapPanel">
        <h1>Dúvidas Frequentes</h1>
<v-expansion-panels class="marginPanel">
  <v-expansion-panel
    title="Title"
    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
  >
  </v-expansion-panel>
</v-expansion-panels>

<v-expansion-panels class="marginPanel">
  <v-expansion-panel
    title="Title"
    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
  >
  </v-expansion-panel>
</v-expansion-panels>

<v-expansion-panels class="marginPanel">
  <v-expansion-panel
    title="Title"
    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
  >
  </v-expansion-panel>
</v-expansion-panels>
    </div>
    </div>
</template>

<style scoped>
.flex{
    display: flex;
    justify-content: center;
    align-items: center;
}
.wrapPanel{
    display: flex;
    flex-wrap: wrap;
    width: 900px;
}
.marginPanel{
    margin-top: 40px;
}
h1{
    text-align: center;
}
</style>