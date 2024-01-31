<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <VCard hover>
    <v-img
      :src="product.imgurl"
      :alt="product.productName"
      height="340px"
      width="100%"
      cover
    ></v-img>
    <VCardTitle>{{ product.productName }} </VCardTitle>
    <VCardText>${{ product.price }}</VCardText>
  </VCard>
</template>
