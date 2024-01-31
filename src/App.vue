<script setup>
import { RouterLink, RouterView } from "vue-router";
import Nav from "@/components/Nav.vue";
</script>

<template>
  <VApp>
    <header>
      <div class="wrapper">
        <Nav />
      </div>
    </header>

    <RouterView />
  </VApp>
</template>
