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

const routeGuards = {
  requireAuth,
  userLoggedIn
};

export default routeGuards;
