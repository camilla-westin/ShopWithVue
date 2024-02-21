<script setup>
import { useCartStore } from "@/store/addToCart";
import { computed } from "vue";

const cartStore = useCartStore();
const alert = computed(() => cartStore.alertShown);
</script>

<template>
  <Transition name="fade">
    <div class="w-58 absolute right-0 top-12" v-if="alert">
      <v-alert
        type="success"
        text="Item added to cart"
        class="pl-24"
        color="#3e6851"
        density="compact"
        variant="outlined"
      ></v-alert>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
