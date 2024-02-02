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
      const productInCart = this.cartProducts.find(
        (product) => product.id === id
      );
      if (productInCart) {
        productInCart.quantity += 1;
      } else {
        const addedProduct = this.products.find((product) => product.id === id);
        const productWithQuantity = { ...addedProduct, quantity: 1 };
        this.cartProducts.push(productWithQuantity);
      }
      this.calculateTotal();
    },
    deleteFromCart(index) {
      this.cartProducts.splice(index, 1);
      this.calculateTotal();
    },
    increaseQuantity(index) {
      this.cartProducts[index].quantity += 1;
      this.calculateTotal();
    },
    decreaseQuantity(index) {
      if (this.cartProducts[index].quantity > 1) {
        this.cartProducts[index].quantity -= 1;
      }
      this.calculateTotal();
    },
    totalItems() {
      return this.cartProducts.reduce(
        (total, product) => total + product.quantity,
        0
      );
    },
    calculateTotal() {
      this.total = this.cartProducts.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    },
  },
});
