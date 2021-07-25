import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../views/Welcome.vue";
import ChatRoom from "../views/ChatRoom.vue";
import { projectAuth } from "@/firebase/config";

// auth guard
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (!user) {
    next({ name: "Welcome" });
  } else {
    next();
  }
};

// user logged in guard: auto-redirect from / to chat room
const userLoggedIn = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (user) {
    next({ name: "ChatRoom" });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
    beforeEnter: userLoggedIn
  },
  {
    path: "/chatroom",
    name: "ChatRoom",
    component: ChatRoom,
    beforeEnter: requireAuth
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
