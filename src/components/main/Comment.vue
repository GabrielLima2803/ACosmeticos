<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <h1>Comentários</h1>

        <!-- Formulário para adicionar um novo comentário -->
        <div>
            <input v-model="newComment.username" placeholder="Nome de usuário" />
            <textarea v-model="newComment.text" placeholder="Seu comentário"></textarea>
            <button @click="addComment">Adicionar Comentário</button>
        </div>

        <!-- Lista de comentários específicos para este produto -->
        <div v-for="(comment, index) in productComments" :key="comment.id">
            <div>
                <div v-if="!comment.editing">
                    <strong>{{ comment.username }}:</strong> {{ comment.text }}
                    <button @click="editComment(index)">Editar</button>
                    <button @click="deleteComment(comment.id)">Excluir</button>
                </div>
                <div v-else>
                    <input v-model="comment.updatedText" />
                    <button @click="updateComment(index)">Salvar</button>
                    <button @click="cancelEdit(index)">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
  
<script setup>
import { ref, onMounted, defineProps } from 'vue';

const props = defineProps({
    comments: Array, // Receber a lista de comentários como propriedade
});

const commentList = ref([]);
const newComment = ref({ username: '', text: '' });

const saveCommentsToLocalStorage = () => {
    localStorage.setItem('comments', JSON.stringify(commentList.value));
};

const addComment = () => {
    const newId = Date.now();
    commentList.value.push({
        id: newId,
        username: newComment.value.username,
        text: newComment.value.text,
        editing: false,
    });

    newComment.value.username = '';
    newComment.value.text = '';

    saveCommentsToLocalStorage();
};

const editComment = (index) => {
    commentList.value[index].editing = true;
    commentList.value[index].updatedText = commentList.value[index].text;
};

const updateComment = (index) => {
    commentList.value[index].text = commentList.value[index].updatedText;
    commentList.value[index].editing = false;
    saveCommentsToLocalStorage();
};

const cancelEdit = (index) => {
    commentList.value[index].editing = false;
};

const deleteComment = (id) => {
    commentList.value = commentList.value.filter((comment) => comment.id !== id);
    saveCommentsToLocalStorage();
};

onMounted(() => {
    // Carregue os comentários do localStorage ou defina commentList para a propriedade recebida
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
        commentList.value = JSON.parse(storedComments);
    } else {
        commentList.value = props.comments;
    }
});
</script>
