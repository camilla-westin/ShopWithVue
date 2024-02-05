<script setup>
import { useCartStore } from "@/store/addToCart";

const cartStore = useCartStore();

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
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
      <VCardSubtitle class="text-sm mt-2">{{ product.brand }}</VCardSubtitle>
      <VCardTitle
        ><span class="font-noto font-semibold text-base">{{
          product.productName
        }}</span></VCardTitle
      >
      <VCardText>${{ product.price }}</VCardText>
    </RouterLink>
  </VCard>
</template>
