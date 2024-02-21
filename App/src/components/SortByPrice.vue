<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  products: Array,
  required: true,
});

const sortDirection = ref("Ascending");
const emit = defineEmits(["update:products"]);

const sortProducts = () => {
  const sortedProducts = [...props.products].sort((a, b) => {
    if (sortDirection.value === "Ascending") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });
  emit("update:products", sortedProducts);
};

watch([sortDirection, props.products], sortProducts);
</script>
<template>
  <div class="w-1/5">
    <v-select
      label="Sort by price"
      :items="['Descending', 'Ascending']"
      variant="outlined"
      density="compact"
      width="w-24"
      v-model="sortDirection"
    ></v-select>
  </div>
</template>
