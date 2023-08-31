// import { defineStore } from 'pinia';

// export const useCartStore = defineStore('cart', {
//   state: () => ({
//     cart: [],
//   }),
//   getters: {
//     getCart: (state) => state.cart,
//   },
//   actions: {
//     addToCart(product) {
//       console.log('product BD', product);
//       this.cart.push(product);
//       console.log('cart', this.cart);
//     },
//     remove(product) {
//       this.cart = this.cart.filter((p) => p.id !== product.id);
//     }
//   }
// });