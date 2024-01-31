<script setup>
import { ref } from "vue";
import Products from "@/data/products.json";
import ProductCard from "@/components/ProductCard.vue";
import Cart from "@/components/Cart.vue";

const products = ref(Products);
const cartProducts = ref([]);

const handleAddToCart = (id) => {
  const addedProduct = products.value.find((product) => product.id === id);
  cartProducts.value.push(addedProduct);
};
</script>

<template>
  <main>
    <VContainer>
      <VRow>
        <VCol>
          <h1>Home</h1>
        </VCol>
      </VRow>
      <Cart :cartProducts="cartProducts" />
      <VRow tag="ul">
        <VCol
          tag="li"
          v-for="product in products"
          :key="product.id"
          class="v-col-4"
        >
          <ProductCard :product="product" @add-to-cart="handleAddToCart" />
        </VCol>
      </VRow>
    </VContainer>
  </main>
</template>
