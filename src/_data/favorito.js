import { ref, onMounted } from 'vue';
import { useToast } from 'vue-toast-notification';
const $toast = useToast();

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
  
    const customStyle = {
      backgroundColor: '#4d066b', // Cor de fundo
      color: 'white', // Cor do texto
      fontSize: '16px', // Tamanho da fonte
      display: 'flex', // Permite alinhar o ícone e o texto horizontalmente
      alignItems: 'center', // Alinha o conteúdo verticalmente
    };
  
    const iconHTML = '<i class="bi bi-heart" style="font-size: 24px; margin-right: 10px;"></i>'; // Ícone de sacola Bootstrap Icons
  
    $toast.success(`${iconHTML} Produto adicionado ao carrinho!`, {
      position: 'top',
      duration: 3000, // Define a duração do toast (em milissegundos)
      style: customStyle, // Aplica o estilo personalizado
    });

  } else {
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
