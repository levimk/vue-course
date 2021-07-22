import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';


const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)
    
    const load = async () => {
        error.value = null
        post.value = null
        try {
            // let res = await fetch("http://localhost:3000/posts/" + id)
            // if (!res.ok) {
            //     throw Error(`${res.status}: ${res.statusText}`)
            // }
            // post.value = await res.json()
            const doc = await projectFirestore.collection('posts').doc(id).get();
            if (!doc.exists) throw Error('404: post does not exist.');
            post.value = { id: doc.id, ...doc.data() };
        } catch (err) {
            error.value = err
        }
    }

    return {
        post,
        error,
        load
    }
}

export default getPost;