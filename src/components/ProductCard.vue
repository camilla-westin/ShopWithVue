<script setup>
import { useFavoritesStore } from "@/store/addToFavorites";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const favoritesStore = useFavoritesStore();

const handleAddToFavorites = (id) => {
  favoritesStore.addToFavorites(id);
};
</script>

<template>
  <VCard hover link class="relative">
    <RouterLink :to="`/product/${product.id}`" v-slot="{ navigate }">
      <div class="absolute top-2 right-2 z-10">
        <VBtn
          icon="mdi-heart-outline"
          size="small"
          @click.stop.prevent="handleAddToFavorites(product.id)"
        ></VBtn>
      </div>
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
