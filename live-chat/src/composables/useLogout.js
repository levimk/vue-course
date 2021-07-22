import { ref } from "vue";
import { projectAuth } from "../firebase/config";

const error = ref(null);

const logout = async (email, password) => {
  error.value = null;

  try {
    await projectAuth.signOut();
    error.value = null;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  }
};

const useLogout = () => {
  return { error, logout };
};

export default useLogout;
