import { ref } from 'vue';

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)
    
    const load = async () => {
        error.value = null
        posts.value = []
        try {
            let res = await fetch("http://localhost:3000/posts")
            if (!res.ok) {
                throw Error(`${res.status}: ${res.statusText}`)
            }
            posts.value = await res.json()
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