// router principal para la aplicación que tiene / como ruta principal o /:pathOrigin como ruta principal
import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: App,
  },
  {
    path: "/:pathOrigin",
    name: "Home",
    component: App,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
