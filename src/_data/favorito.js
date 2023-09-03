import { ref } from 'vue';

const favoritos = ref([]);

function addAosFavoritos({ nome, descricao, preco, img }, initiallyFavorite = true) {
  const item = { nome, descricao, preco, img, initiallyFavorite };
  favoritos.value.push(item);
}

function remove(index) {
  favoritos.value.splice(index, 1);
}

export { favoritos, addAosFavoritos, remove };
