<script setup>
import { ref } from "vue";
import Products from "@/data/products.json";
import ProductCard from "@/components/ProductCard.vue";

const products = ref(
  Products.filter(
    (product) => product.categories && product.categories.includes("Pants")
  )
);
</script>

<template>
  <main>
    <VContainer>
      <VRow>
        <VCol>
          <h1>Pants</h1>
        </VCol>
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
