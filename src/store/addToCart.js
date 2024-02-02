import { defineStore } from "pinia";
import Products from "@/data/products.json";

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    cartProducts: [],
    total: 0,
    products: Products,
  }),
  actions: {
    addToCart(id) {
      const addedProduct = this.products.find((product) => product.id === id);
      this.cartProducts.push(addedProduct);
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
