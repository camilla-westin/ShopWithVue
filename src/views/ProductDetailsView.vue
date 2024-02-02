<script setup>
import { ref, computed } from "vue";
import Products from "@/data/products.json";
import { useCartStore } from "@/store/addToCart";

const cartStore = useCartStore();

const props = defineProps({
  id: Number,
});

const products = ref(Products);
const product = computed(() => products.value.find((p) => p.id === props.id));

const handleAddToCart = (id) => {
  cartStore.addToCart(id);
};
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
          ><h1 class="text-2xl">{{ product.productName }}</h1>
          <div>{{ product.productDescription }}</div>
          <div class="mt-4">${{ product.price }}</div>
          <div v-if="product.inventoryStatus == 'In Stock'">
            <VBtn
              color="#3e6851"
              class="mt-4"
              @click="handleAddToCart(product.id)"
              >Add to Cart</VBtn
            >
          </div>
          <div v-else class="text-red-500">Out of Stock</div>
        </VCol>
      </VRow>
    </VContainer>
  </div>
</template>
