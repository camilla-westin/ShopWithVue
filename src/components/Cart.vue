<script setup>
import { ref, watch } from "vue";
const cartTotal = ref(0);

const props = defineProps({
  cartProducts: {
    type: Array,
    required: true,
  },
});

const deleteCartProduct = (id) => {
  const index = props.cartProducts.findIndex((product) => product.id === id);
  if (index !== -1) {
    props.cartProducts.splice(index, 1);
  }
};

watch(
  props.cartProducts,
  () => {
    calculateTotal();
  },
  { deep: true }
);

const calculateTotal = () => {
  let total = 0;
  props.cartProducts.forEach((product) => {
    total += product.price;
  });
  cartTotal.value = total;
};
</script>
<template>
  <div class="border border-slate-500 p-4">
    <h2>Shopping cart</h2>
    <ul>
      <li v-for="item in cartProducts">
        {{ item.productName }}
        {{ item.price }}
        <VBtn @click="deleteCartProduct(item.id)">Delete</VBtn>
      </li>
    </ul>
    Total: ${{ cartTotal }}
  </div>
</template>
