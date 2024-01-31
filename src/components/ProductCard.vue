<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["add-to-cart"]);

const addToCart = (id) => {
  emit("add-to-cart", id);
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
      <VCardTitle>{{ product.productName }} </VCardTitle>
      <VCardText>${{ product.price }}</VCardText>
    </RouterLink>
    <VCardActions>
      <VBtn color="primary" @click="addToCart(product.id)">Add to Cart</VBtn>
    </VCardActions>
  </VCard>
</template>
