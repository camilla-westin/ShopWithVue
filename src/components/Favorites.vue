<script setup>
import { ref, watch } from "vue";
import { useFavoritesStore } from "@/store/addToFavorites";
import { computed } from "vue";

const drawer = ref(null);

const props = defineProps({
  toggling: {
    type: Boolean,
  },
});

const favoritesStore = useFavoritesStore();

const favorites = computed(() => favoritesStore.favoriteProducts);

const handleDeleteFavorite = (id) => {
  const index = favorites.value.findIndex((product) => product.id === id);
  favoritesStore.deleteFromFavorites(index);
};

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
    <v-divider></v-divider>
    <ul class="mt-6">
      <v-list-item
        v-for="favorite in favorites"
        :key="favorite.id"
        class="flex"
      >
        <VImg
          :src="favorite.imgurl"
          :alt="favorite.productName"
          height="50px"
          width="50px"
          cover
        />
        <v-list-item-title>{{ favorite.productName }}</v-list-item-title>
        <VBtn
          prepend-icon="trash-can-outline"
          class="ml-2"
          @click="handleDeleteFavorite(favorite.id)"
        ></VBtn>
      </v-list-item>
    </ul>
  </VNavigationDrawer>
</template>
