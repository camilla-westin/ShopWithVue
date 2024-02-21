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
          :color="
            favoritesStore.isInFavorites(product.id) ? '#e26f9f' : 'white'
          "
          @click.stop.prevent="handleAddToFavorites(product.id)"
        ></VBtn>
      </div>
      <span
        v-if="product.campaign"
        class="z-10 absolute top-2 left-2 bg-red-500 rounded-xl text-white px-2 py-1 text-xs font-semibold"
        >Campaign</span
      >
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
      <div class="flex pl-4 pb-4">
        <span v-if="product.campaign" class="mr-2 text-red-500"
          >${{ product.campaignPrice }}</span
        >
        <span v-if="product.campaign" class="line-through"
          >${{ product.price }}</span
        >
        <span v-else>${{ product.price }}</span>
      </div>
    </RouterLink>
  </VCard>
</template>
