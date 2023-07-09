import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/components/LoginFunction/LoginPage.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
