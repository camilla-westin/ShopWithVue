<script setup>
import { ref } from "vue";
import Products from "@/data/products.json";
import ProductCard from "@/components/ProductCard.vue";
import SortByPrice from "@/components/SortByPrice.vue";

const products = ref(Products);

const updateProducts = (sortedProducts) => {
  products.value = sortedProducts;
};
</script>

<template>
  <main>
    <VContainer>
      <VRow>
        <VCol>
          <h1 class="hidden">Home</h1>
        </VCol>
      </VRow>
      <VRow class="flex justify-end mr-1">
        <SortByPrice
          :products.sync="products"
          @update:products="updateProducts"
        />
      </VRow>
      <VRow tag="ul">
        <VCol
          tag="li"
          v-for="product in products"
          :key="product.id"
          class="v-col-4"
        >
          <ProductCard :product="product" />
        </VCol>
      </VRow>
    </VContainer>
  </main>
</template>
