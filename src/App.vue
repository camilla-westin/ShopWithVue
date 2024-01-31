<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>

<template>
  <VApp>
    <Header />
    <RouterView />
  </VApp>
</template>
