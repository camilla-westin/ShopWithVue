<script setup>
import { useCartStore } from "@/store/addToCart";

const cartStore = useCartStore();

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const handleAddToCart = () => {
  cartStore.addToCart(props.product.id);
};
</script>

<template>
  <VCard hover link>
    <RouterLink :to="`/product/${product.id}`">
      <v-img
        :src="product.imgurl"
        :alt="product.productName"
        height="340px"
        width="100%"
        cover
      ></v-img>
      <VCardTitle
        ><span class="font-noto font-semibold text-base">{{
          product.productName
        }}</span></VCardTitle
      >
      <VCardText>${{ product.price }}</VCardText>
    </RouterLink>
    <VCardActions>
      <VBtn
        v-if="product.inventoryStatus == 'In Stock'"
        color="primary"
        @click="handleAddToCart(product.id)"
        >Add to Cart</VBtn
      >
      <span v-else class="text-red-500">Out of Stock</span>
    </VCardActions>
  </VCard>
</template>
