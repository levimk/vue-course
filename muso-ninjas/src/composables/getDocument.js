import { ref, watchEffect } from 'vue';
import { projectFirestore } from '../firebase/config';

const getDocument = (collection, id) => {
  const document = ref(null);
  const error = ref(null);

  // register the firestore collection reference
  let documentRef = projectFirestore.collection(collection).doc(id);

  const unsubscribe = documentRef.onSnapshot(
    (doc) => {
      if (doc.data()) {
          document.value = {...doc.data(), id: doc.id};
          error.value = null;
      } else {
          error.value = `Document ${id} does not exist`;
        }
    },
    (err) => {
        console.log(err.message);
        document.value = null;
        error.value = `Document ${id} does not exist`;
    }
  );

  watchEffect((onInvalidate) => onInvalidate(() => unsubscribe()));

  return { error, document };
};

export default getDocument;
