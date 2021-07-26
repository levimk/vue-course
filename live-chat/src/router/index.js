import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../views/Welcome.vue";
import ChatRoom from "../views/ChatRoom.vue";
import routeGuards from "./routeGuards.js";

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
    beforeEnter: routeGuards.userLoggedIn
  },
  {
    path: "/chatroom",
    name: "ChatRoom",
    component: ChatRoom,
    beforeEnter: routeGuards.requireAuth
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
