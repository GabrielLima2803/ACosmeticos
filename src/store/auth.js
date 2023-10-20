import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    username: '',
    password: '',
    message: '',
    messageConfirm: localStorage.getItem('messageConfirm') || '', // Recupera a mensagem do localStorage
    user: { name: '' },
    userIsLoggedIn: false,
  }),
  actions: {
    // Ação para fazer login
    async login(credentials) {
      try {
        const response = await axios.post('http://localhost:3000/api/login', credentials);
        this.message = response.data.message;
        if (response.data.user) {
          this.user = response.data.user;
          this.userIsLoggedIn = true;
          this.messageConfirm = `Bem-vindo, ${this.username}`;
          
          // Armazena a mensagem de confirmação no localStorage
          localStorage.setItem('messageConfirm', this.messageConfirm);

          localStorage.setItem('userIsLoggedIn', 'true');
          localStorage.setItem('username', this.username);
        }
      } catch (error) {
        console.error(error);
        this.message = error.response.data.message;
      }
    },
    // Ação para fazer logout
    logout() {
      this.userIsLoggedIn = false;
      this.username = '';
      this.password = '';
      this.messageConfirm = ''; // Limpe a mensagem de confirmação ao fazer logout
      
      // Remova a mensagem de confirmação do localStorage
      localStorage.removeItem('messageConfirm');

      localStorage.removeItem('userIsLoggedIn');
      localStorage.removeItem('username');
    },
  },
});
