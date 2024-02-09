<script setup>
import { ref, computed } from "vue";
import Nav from "@/components/Nav.vue";
import BackButton from "./BackButton.vue";
import SuccessAlert from "./SuccessAlert.vue";
import { useCartStore } from "@/store/addToCart";
import Favorites from "./Favorites.vue";

const cartStore = useCartStore();

const totalItems = computed(() => cartStore.totalItems());
let favoritesIsOpen = ref(false);

const handleToggleFavorites = () => {
  favoritesIsOpen.value = !favoritesIsOpen.value;
  console.log(favoritesIsOpen);
};
</script>

<template>
  <header class="bg-greyish h-12 w-full shadow-sm">
    <!-- <Nav /> -->
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
          <button @click="handleToggleFavorites">
            <v-icon icon="mdi-heart-outline" size="large"></v-icon>
          </button>
          <RouterLink to="/cart">
            <v-badge :content="totalItems" floating color="brown">
              <v-icon icon="mdi-cart" size="medium"></v-icon>
            </v-badge>
          </RouterLink>
        </div>
      </div>
    </VContainer>
    <Favorites :toggling="favoritesIsOpen" />
  </header>
</template>
