import { createRouter, createWebHistory } from "vue-router";
import ViewHistory from "@/components/ViewHistoryComponent/ViewHistory.vue";
import MyPage from "@/components/MyPageComponent/MyPage.vue";
import LogoutPage from "@/components/LogoutPageComponent/LogoutPage.vue";

const routes = [
  {
    path: "/viewhistory",
    name: "ViewHistory",
    component: ViewHistory,
  },
  {
    path: "/mypage",
    name: "MyPage",
    component: MyPage,
  },
  {
    path: "/logout",
    name: "LogoutPage",
    component: LogoutPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
