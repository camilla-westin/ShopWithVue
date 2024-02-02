<script setup>
import { computed } from "vue";
import Nav from "@/components/Nav.vue";
import BackButton from "./BackButton.vue";
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
          <RouterLink to="/cart">
            <v-badge :content="cartProducts.length" floating color="brown">
              <v-icon icon="mdi-cart" size="medium"></v-icon>
            </v-badge>
          </RouterLink>
        </li>
      </ul>
    </VContainer>
  </header>
</template>
