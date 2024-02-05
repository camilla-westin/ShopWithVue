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

const selectedSize = ref("");

const handleAddToCart = (id, size, variant) => {
  cartStore.addToCart(id, size, variant);
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
        <VCol>
          <span class="uppercase text-sm font-semibold">{{
            product.brand
          }}</span>
          <h1 class="text-2xl">{{ product.productName }}</h1>
          <div class="text-amber-900 font-semibold">${{ product.price }}</div>
          <div class="mt-6 text-sm">{{ product.productDescription }}</div>
          <div v-if="product.variants" class="mt-6">
            <v-select
              label="Variants"
              :items="product.variants"
              variant="outlined"
              density="compact"
              class="mt-6"
              v-model="selectedVariant"
            ></v-select>
          </div>

          <div
            v-if="product.inventoryStatus == 'In Stock'"
            class="flex items-center justify-start"
          >
            <div class="w-32 mr-3">
              <v-select
                label="Size"
                :items="product.sizes"
                variant="outlined"
                density="compact"
                class="mt-6"
                v-model="selectedSize"
              ></v-select>
            </div>

            <VBtn
              color="#3e6851"
              @click="
                handleAddToCart(product.id, selectedSize, selectedVariant)
              "
              >Add to Cart</VBtn
            >
          </div>
          <div v-else class="text-red-500 mt-6">Out of Stock</div>
        </VCol>
      </VRow>
    </VContainer>
  </div>
</template>
