import { ref, watchEffect } from 'vue';
import { projectFirestore } from '../firebase/config';

const getCollection = (collection, query) => {
  const documents = ref(null);
  const error = ref(null);

  // register the firestore collection reference
  let collectionRef = projectFirestore
    .collection(collection)
    .orderBy('createdAt');
  
    if (query && query.length == 3) {
      console.log(query)
      collectionRef = collectionRef.where(query[0], query[1], query[2]);
    }

  const unsubscribe = collectionRef.onSnapshot(
    (snap) => {
      let results = [];
      snap.docs.forEach((doc) => {
        // must wait for the server to create the timestamp & send it back
        // we don't want to edit data until it has done this        console.log(`${doc.id}: ${doc.data().name}: ${doc.data().message}`);
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });

      // update values
      documents.value = results;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      documents.value = null;
      error.value = 'could not fetch the data';
    }
  );

  watchEffect((onInvalidate) => onInvalidate(() => unsubscribe()));

  return { error, documents };
};

export default getCollection;
