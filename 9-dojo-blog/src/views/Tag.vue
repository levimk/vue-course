<template>
<div class="tag">
    <h2>Tag: {{ tag }}</h2>
    <div v-if="error">{{ error }}</div>
    <div v-if="filteredPosts.length" class="posts layout">
        <Posts :posts="filteredPosts"/>
        <TagCloud :posts="posts"/>
    </div>
    <Spinner v-else />
</div>
</template>

<script>
import { computed, watch  } from 'vue'
import { useRoute } from 'vue-router'
import Spinner from '@/components/Spinner'
import TagCloud from '@/components/TagCloud'
import Posts from '@/components/Posts'
import getPosts from '@/composables/getPosts'

export default {
    components: { Spinner, Posts, TagCloud },
    setup() {
        const route = useRoute()
        const { tag } = route.params
        
        const { posts, error, load } = getPosts()
        load()


        const filteredPosts = computed(() => {
            return posts.value.filter(post => post.tags.includes(tag))
        })

        return { filteredPosts, posts, error, tag }
    }
}
</script>

<style>
.tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
}
</style>