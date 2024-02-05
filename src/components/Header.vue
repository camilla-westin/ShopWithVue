<script setup>
import { computed } from "vue";
import Nav from "@/components/Nav.vue";
import BackButton from "./BackButton.vue";
import SuccessAlert from "./SuccessAlert.vue";
import { useCartStore } from "@/store/addToCart";

const cartStore = useCartStore();

const totalItems = computed(() => cartStore.totalItems());
</script>

<template>
  <header class="bg-greyish h-12 w-full shadow-sm">
    <Nav />
    <VContainer class="relative">
      <SuccessAlert />
      <div class="flex justify-between items-center">
        <div class="-mt-2">
          <BackButton />
        </div>
        <RouterLink to="/" class="-mt-2"
          ><span class="text-xl font-bold">ShopWithVue</span></RouterLink
        >
        <div>
          <RouterLink to="/cart">
            <v-badge :content="totalItems" floating color="brown">
              <v-icon icon="mdi-cart" size="medium"></v-icon>
            </v-badge>
          </RouterLink>
        </div>
      </div>
    </VContainer>
  </header>
</template>
