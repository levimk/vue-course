import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)
    
    const load = async () => {
        error.value = null
        posts.value = []
        try {
            // OLD CODE: local dev with json-server
            // let res = await fetch("http://localhost:3000/posts")
            // if (!res.ok) {
            //     throw Error(`${res.status}: ${res.statusText}`)
            // }
            // posts.value = await res.json()
            const res = await projectFirestore
                .collection('posts')
                .orderBy('createdAt', 'desc')
                .get();
            posts.value = res.docs.map(doc => Object({ id: doc.id, ...doc.data() }))
        } catch (err) {
            error.value = err
        }
    }

    return {
        posts,
        error,
        load
    }
}

export default getPosts;