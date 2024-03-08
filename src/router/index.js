import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/product/:id",
      name: "product",
      component: () => import("../views/ProductDetailsView.vue"),
      props: (route) => ({ id: Number(route.params.id) }),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/CartView.vue"),
    },
    {
      path: "/shoes",
      name: "shoes",
      component: () => import("../views/Categories/ShoesView.vue"),
    },
    {
      path: "/pants",
      name: "pants",
      component: () => import("../views/Categories/PantsView.vue"),
    },
    {
      path: "/shirts",
      name: "shirts",
      component: () => import("../views/Categories/ShirtsView.vue"),
    },
  ],
});

export default router;
