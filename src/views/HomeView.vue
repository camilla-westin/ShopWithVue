<script setup>
import { ref } from "vue";
import Products from "@/data/products.json";
import ProductCard from "@/components/ProductCard.vue";
import { useCartStore } from "@/store/addToCart";

const cartStore = useCartStore();

const products = ref(Products);
const cartProducts = ref([]);

const handleAddToCart = (id) => {
  const addedProduct = products.value.find((product) => product.id === id);
  cartStore.addToCart(addedProduct);
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
