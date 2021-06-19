import { ref } from 'vue';

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)
    
    const load = async () => {
        error.value = null
        post.value = null
        try {
            let res = await fetch("http://localhost:3000/posts/" + id)
            if (!res.ok) {
                throw Error(`${res.status}: ${res.statusText}`)
            }
            post.value = await res.json()
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