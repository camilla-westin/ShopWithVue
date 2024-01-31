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
    </v-list>
  </VNavigationDrawer>
</template>
