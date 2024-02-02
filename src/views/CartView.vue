<script setup>
import { computed } from "vue";
import { useCartStore } from "@/store/addToCart";

const cartStore = useCartStore();

const cartProducts = computed(() => cartStore.cartProducts);
const cartTotal = computed(() => cartStore.total);

const deleteCartProduct = (id) => {
  const index = cartProducts.value.findIndex((product) => product.id === id);
  cartStore.deleteFromCart(index);
};

const summaryTotal = computed(() => {
  return cartTotal.value + 10;
});
</script>
<template>
  <div class="bg-greyish h-screen">
    <VContainer>
      <h1 class="text-center text-3xl mt-4">Shopping cart</h1>
      <VRow class="mt-6">
        <VCol>
          <div>
            <h2 class="font-semibold text-xl mb-4">Your order</h2>

            <ul>
              <li
                v-for="item in cartProducts"
                class="relative border-b bg-white p-6"
              >
                <VRow>
                  <VCol class="v-col-3">
                    <v-img
                      :src="item.imgurl"
                      :alt="item.productName"
                      height="100px"
                      width="100px"
                      cover
                    ></v-img>
                  </VCol>
                  <VCol class="v-col-9">
                    <div>{{ item.productName }}</div>
                    <div class="text-sm text-slate-400">
                      Delivery 3-4 workdays
                    </div>
                    <div
                      class="absolute bottom-4 right-4 text-amber-900 font-semibold"
                    >
                      ${{ item.price }}
                    </div>
                  </VCol>
                </VRow>
                <span class="absolute top-4 right-4">
                  <VBtn
                    icon="mdi-delete"
                    @click="deleteCartProduct(item.id)"
                    size="x-small"
                  ></VBtn>
                </span>
              </li>
            </ul>
          </div>
        </VCol>
        <VCol>
          <div>
            <h3 class="text-lg mb-4 font-semibold">Summary</h3>
            <div class="bg-white p-6">
              <div
                class="flex justify-between items-center mb-1 text-slate-600"
              >
                <span>Articles in cart</span>
                <span>${{ cartTotal }}</span>
              </div>
              <div
                class="flex justify-between items-center mb-8 text-slate-600"
              >
                <span>Delivery fee</span>
                <span>$10</span>
              </div>
              <div
                class="flex justify-between items-center mb-1 text-lg text-amber-900 font-semibold"
              >
                <span>Total</span>
                <span>${{ summaryTotal }} </span>
              </div>
              <div>
                <VBtn class="mt-4" color="#3e6851" block>Checkout</VBtn>
              </div>
            </div>
          </div>
        </VCol>
      </VRow>
    </VContainer>
  </div>
</template>
