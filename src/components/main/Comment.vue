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

<template>
    <div class="comment-component">
      <h1 class="comment-title">Comentários</h1>
  
      <div class="comment-form">
        <input class="input-field" v-model="newComment.username" placeholder="Nome de usuário" />
        <textarea class="textarea-field" v-model="newComment.text" placeholder="Seu comentário"></textarea>
        <button class="add-button" @click="addComment">Adicionar Comentário</button>
      </div>
  
      <div class="comment-list">
        <div v-for="(comment, index) in productComments" :key="comment.id" class="comment-item">
          <div>
            <div v-if="!comment.editing">
              <strong class="username">{{ comment.username }}:</strong> {{ comment.text }}
              <button class="edit-button" @click="editComment(index)">Editar</button>
              <button class="delete-button" @click="deleteComment(comment.id)">Excluir</button>
            </div>
            <div v-else>
              <input class="input-field" v-model="comment.updatedText" />
              <button class="save-button" @click="updateComment(index)">Salvar</button>
              <button class="cancel-button" @click="cancelEdit(index)">Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
    
  <style>
  /* Estilos gerais do componente de comentários */
  .comment-component {
    font-family: 'Jost', sans-serif;
    text-align: center;
    margin: 20px;
  }
  
  .comment-title {
    font-size: 24px;
    color: black; /* H1 em preto */
    text-decoration: none; /* Sem sublinhado */
    margin-bottom: 20px;
  }
  
  .comment-form {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  
  .input-field, .textarea-field {
    width: 100%;
    padding: 10px;
    border: 2px solid #43055d;
    border-radius: 5px;
    margin: 5px 0;
  }
  
  .add-button {
    background-color: white; /* Botões em branco */
    color: #43055d; /* Cor oficial da página */
    border: 2px solid #43055d; /* Cor oficial da página */
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .add-button:hover {
    background-color: #43055d; /* Cor oficial da página no hover */
    color: white; /* Texto branco no hover */
  }
  
  .comment-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .comment-item {
    background-color: #f5f5f5;
    border: 2px solid #e5e5e5;
    border-radius: 5px;
    margin: 10px 0;
    padding: 10px;
  }
  
  .username {
    font-weight: bold;
    color: #43055d;
  }
  
  .edit-button, .delete-button, .save-button, .cancel-button {
    background-color: #f5f5f5;
    border: 1px solid #43055d;
    color: #43055d;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    margin-left: 10px;
  }
  
  .edit-button:hover, .delete-button:hover, .save-button:hover, .cancel-button:hover {
    background-color: #43055d;
    color: white;
  }
  
  /* Outros estilos conforme necessário */
  </style>
  
  



  