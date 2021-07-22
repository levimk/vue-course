import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import { projectAuth } from "@/firebase/config";

let app;

projectAuth.onAuthStateChanged(() => {
  // only mount the app if app is null (i.e. has not been mounted yet)
  if (!app) {
    app = createApp(App)
      .use(router)
      .mount("#app");
  }
});
