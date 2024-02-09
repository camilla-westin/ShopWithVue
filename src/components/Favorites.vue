<script setup>
import { watch } from "vue";
import { ref } from "vue";

const drawer = ref(null);

const props = defineProps({
  toggling: {
    type: Boolean,
  },
});

watch(
  () => props.toggling,
  (value) => {
    drawer.value = !drawer.value;
  }
);
</script>
<template>
  <VNavigationDrawer v-model="drawer" temporary location="right">
    <v-list-item
      prepend-icon="mdi-heart"
      title="Favorites"
      class="top-2"
    ></v-list-item>
  </VNavigationDrawer>
</template>
