import { ref } from 'vue'

const favoritos = ref([])

function addAosFavoritos({ nome, descricao, preco, img }) {
    favoritos.value.push({  nome, descricao, preco, img })
}

function remove(index) {
    favoritos.value.splice(index, 1)
}

export { favoritos, addAosFavoritos, remove}
