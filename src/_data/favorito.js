import { ref } from 'vue';
import {useToast} from 'vue-toast-notification';
const $toast = useToast();

const favoritos = ref([]);

function addAosFavoritos({ nome, descricao, preco, img }, initiallyFavorite = true) {
  const item = { nome, descricao, preco, img, initiallyFavorite };
  favoritos.value.push(item);
  $toast.success('Produto adicionado ao favorito!', {
    position: 'top'
  })
}

function remove(index) {
  favoritos.value.splice(index, 1);
  $toast.error('Produto removido do favorito!', {
    position: 'top'
  })
}

export { favoritos, addAosFavoritos, remove };
