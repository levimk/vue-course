import { ref } from 'vue';
import getUser from './getUser';
import { projectStorage } from '../firebase/config.js';

const { user } = getUser();

const useStorage = () => {
  const storageError = ref(null);
  const url = ref(null);
  const filePath = ref(null);

  const uploadImage = async (file) => {
    filePath.value = `covers/${user.value.uid}/${file.name}`;
    const storageRef = projectStorage.ref();
    const fileRef = storageRef.child(filePath.value);

    try {
      const res = await fileRef.put(file);
      url.value = await res.ref.getDownloadURL();
    } catch (e) {
      console.log('Upload error:', e.message);
      storageError.value = e.message;
    }
  };

  const deleteImage = async (path) => {
    const storageRef = projectStorage.ref();
    const fileRef = storageRef.child(path);

    try {
      const res = await fileRef.delete();
      return res;
    } catch (err) {
      console.log(err.message);
      storageError.value = err.message;
    }
  }

  return { url, storageError, filePath, uploadImage, deleteImage };
};

export default useStorage;
