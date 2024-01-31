<template>
  <VBtn
    v-if="shouldDisplay"
    @click="goBack"
    prepend-icon="mdi-keyboard-backspace"
    rounded
  ></VBtn>
</template>

<script setup>
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const shouldDisplay = computed(() => route.path !== "/");

const goBack = () => {
  router.go(-1);
};
</script>
