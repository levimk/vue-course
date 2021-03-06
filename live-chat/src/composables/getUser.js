import { ref } from "vue";
import { projectAuth } from "@/firebase/config";

const user = ref(projectAuth.currentUser);

projectAuth.onAuthStateChanged(_user => {
  // _user = Object || null
  user.value = _user;
});

const getUser = () => {
  return { user };
};

export default getUser;
