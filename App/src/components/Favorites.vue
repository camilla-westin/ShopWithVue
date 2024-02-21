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
        <RouterLink :to="`/product/${favorite.id}`" v-slot="{ navigate }">
          <div class="flex border-b pb-2 pt-1">
            <div class="h-12 w-12 mr-2">
              <VImg
                :src="favorite.imgurl"
                :alt="favorite.productName"
                height="50px"
                width="50px"
                cover
              />
            </div>
            <div class="flex items-center justify-between">
              <v-list-item-title>{{ favorite.productName }}</v-list-item-title>
              <div class="h-6 w-6">
                <VBtn
                  icon="mdi-trash-can-outline"
                  class="ml-2"
                  size="xsmall"
                  @click.stop.prevent="handleDeleteFavorite(favorite.id)"
                ></VBtn>
              </div>
            </div>
          </div>
        </RouterLink>
      </v-list-item>
    </ul>
  </VNavigationDrawer>
</template>
