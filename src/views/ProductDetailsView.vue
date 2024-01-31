<script setup>
import { ref, computed } from "vue";
import Products from "@/data/products.json";

const props = defineProps({
  id: Number,
});

const products = ref(Products);

const product = computed(() => products.value.find((p) => p.id === props.id));
</script>

<template>
  <div class="pt-32">
    <VContainer>
      <VRow>
        <VCol>
          <v-img
            :src="product.imgurl"
            :alt="product.productName"
            height="480px"
            width="100%"
            cover
          ></v-img>
        </VCol>
        <VCol
          ><h1>{{ product.productName }}</h1>
          <div>${{ product.price }}</div></VCol
        >
      </VRow>
    </VContainer>
  </div>
</template>
