import { ref, onMounted } from 'vue';
import { useToast } from 'vue-toast-notification';

const FAVORITOS_LOCAL_STORAGE_KEY = 'favoritos';
const favoritos = ref(JSON.parse(localStorage.getItem(FAVORITOS_LOCAL_STORAGE_KEY)) || []);

const toast = useToast();

function produtoEstaNosFavoritos({ nome, descricao, preco, img }) {
  return favoritos.value.some((item) => {
    return (
      item.nome === nome &&
      item.descricao === descricao &&
      item.preco === preco &&
      item.img === img
    );
  });
}

function addAosFavoritos({ nome, descricao, preco, img }, initiallyFavorite = true) {
  if (!produtoEstaNosFavoritos({ nome, descricao, preco, img })) {
    const item = { nome, descricao, preco, img, initiallyFavorite };
    favoritos.value.push(item);

    // Após adicionar aos favoritos, salve no armazenamento local
    salvarFavoritosNoLocalStorage();
    alert('Produto adicionado ao favorito!')
    console.log('Produto adicionado ao favorito!'); // Adicione este console.log para depurar
    toast.success('Produto adicionado ao favorito!', {
      position: 'top',
    
    });
  } else {
    alert('Produto já está nos favoritos!')
    console.log('Produto já está nos favoritos!'); // Adicione este console.log para depurar
    toast.error('Produto já está nos favoritos!', {
      position: 'top',
    });
  }
}

function remove(index) {
  favoritos.value.splice(index, 1);

  // Após remover dos favoritos, salve no armazenamento local
  salvarFavoritosNoLocalStorage();
}

function salvarFavoritosNoLocalStorage() {
  // Salve a lista de favoritos no armazenamento local
  localStorage.setItem(FAVORITOS_LOCAL_STORAGE_KEY, JSON.stringify(favoritos.value));
}

// O trecho de código a seguir garante que a lista de favoritos seja salva no armazenamento local
onMounted(() => {
  salvarFavoritosNoLocalStorage();
});

export { favoritos, addAosFavoritos, remove, produtoEstaNosFavoritos };
