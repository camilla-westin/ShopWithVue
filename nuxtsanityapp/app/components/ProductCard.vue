<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="relative">
    <!-- <RouterLink :to="`/product/${product._id}`" v-slot="{ navigate }"> -->
    <div class="absolute top-2 right-2 z-10">
      <!-- <VBtn
          icon="mdi-heart-outline"
          size="small"
          :color="
            favoritesStore.isInFavorites(product._id) ? '#e26f9f' : 'white'
          "
          @click.stop.prevent="handleAddToFavorites(product._id)"
        ></VBtn> -->
    </div>
    <span
      v-if="product.campaign"
      class="z-10 absolute top-2 left-2 bg-red-500 rounded-xl text-white px-2 py-1 text-xs font-semibold"
      >Campaign</span
    >
    <img
      v-if="product.mainImage"
      :src="$urlFor(product.mainImage).width(200).height(300).url()"
      :alt="product.productname"
      class="object-cover"
    />

    <span class="text-sm mt-2">{{ product.brand }}</span>
    <h2 class="font-noto font-semibold text-base">
      {{ product.productname }}
    </h2>

    <div class="flex pl-4 pb-4">
      <span v-if="product.campaign" class="mr-2 text-red-500"
        >${{ product.campaignprice }}</span
      >
      <span v-if="product.campaign" class="line-through"
        >${{ product.price }}</span
      >
      <span v-else>${{ product.price }}</span>
    </div>
    <!-- </RouterLink> -->
  </div>
</template>
