<script setup>
import { computed } from "vue";
import Nav from "@/components/Nav.vue";
import BackButton from "./BackButton.vue";
import { ShoppingBagIcon } from "@heroicons/vue/24/outline";
import { useCartStore } from "@/store/addToCart";

const cartStore = useCartStore();

const cartProducts = computed(() => cartStore.cartProducts);
</script>

<template>
  <header class="bg-greyish h-12 w-full shadow-sm">
    <Nav />
    <VContainer>
      <ul class="flex justify-between items-center">
        <li class="-mt-2">
          <BackButton />
        </li>
        <li>
          <RouterLink to="/cart"
            ><span
              ><ShoppingBagIcon
                class="h-6 ml-2 -mt-1 hover:scale-105 transition"
              />{{ cartProducts.length }}</span
            ></RouterLink
          >
        </li>
      </ul>
    </VContainer>
  </header>
</template>
