<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <VNavigationDrawer expand-on-hover rail permanent>
    <v-list density="compact" nav>
      <router-link to="/">
        <v-list-item
          prepend-icon="mdi-home-variant"
          color="#000000"
          title="Home"
          value="home"
        ></v-list-item>
      </router-link>
      <router-link to="/Shoes">
        <v-list-item
          prepend-icon="mdi-run"
          color="#000000"
          title="Shoes"
          value="shoes"
        ></v-list-item>
      </router-link>
      <router-link to="/Pants">
        <v-list-item
          prepend-icon="mdi-gesture"
          color="#000000"
          title="Pants"
          value="pants"
        ></v-list-item>
      </router-link>
      <router-link to="/Shirts">
        <v-list-item
          prepend-icon="mdi-hanger"
          color="#000000"
          title="Shirts"
          value="shirts"
        ></v-list-item>
      </router-link>
    </v-list>
  </VNavigationDrawer>
</template>
