import { defineStore } from "pinia";

export const useCartStore = defineStore({
  id: "main",
  state: () => ({
    cartProducts: [],
    total: 0,
  }),
  actions: {
    addToCart(product) {
      this.cartProducts.push(product);
      this.calculateTotal();
    },
    deleteFromCart(index) {
      this.cartProducts.splice(index, 1);
      this.calculateTotal();
    },
    calculateTotal() {
      this.total = this.cartProducts.reduce(
        (total, product) => total + product.price,
        0
      );
    },
  },
});
