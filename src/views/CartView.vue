<script setup>
import { computed } from "vue";
import { useCartStore } from "@/store/addToCart";

const cartStore = useCartStore();

const cartProducts = computed(() => cartStore.cartProducts);
const cartTotal = computed(() => cartStore.total);

const deleteCartProduct = (id) => {
  const index = cartProducts.value.findIndex((product) => product.id === id);
  cartStore.deleteFromCart(index);
};
</script>
<template>
  <VContainer>
    <h2>Shopping cart</h2>
    <ul>
      <li v-for="item in cartProducts" class="border-b-">
        {{ item.productName }}
        {{ item.price }}
        <VBtn icon="mdi-delete" @click="deleteCartProduct(item.id)"></VBtn>
      </li>
    </ul>
    Total: ${{ cartTotal }}
  </VContainer>
</template>
