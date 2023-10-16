import { defineStore } from 'vue';

const Store = defineStore({
  state: {
    cart: [],
  },
  mutations: {
    addToCart(state, product) {
      state.cart.push(product);
    },
    removeFromCart(state, product) {
      state.cart = state.cart.filter((item) => item.id !== product.id);
    },
  },
});

export function useStore() {
  return Store;
}