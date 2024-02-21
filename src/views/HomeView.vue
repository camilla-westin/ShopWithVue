<script setup>
import { ref, computed } from "vue";
import Products from "@/data/products.json";
import ProductCard from "@/components/ProductCard.vue";

const products = ref(Products);
const sortBy = ref("Descending price");

const sortedProducts = computed(() => {
  if (sortBy.value === "Descending price") {
    return products.value.sort((a, b) => b.price - a.price);
  } else if (sortBy.value === "Ascending price") {
    return products.value.sort((a, b) => a.price - b.price);
  } else {
    return products.value;
  }
});
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
        <div class="w-1/5">
          <v-select
            label="Sort by"
            :items="['Descending price', 'Ascending price']"
            variant="outlined"
            density="compact"
            width="w-24"
            v-model="sortBy"
          ></v-select>
        </div>
      </VRow>
      <VRow tag="ul">
        <VCol
          tag="li"
          v-for="product in sortedProducts"
          :key="product.id"
          class="v-col-4"
        >
          <ProductCard :product="product" />
        </VCol>
      </VRow>
    </VContainer>
  </main>
</template>
