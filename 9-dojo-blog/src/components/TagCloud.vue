<template>
  <div class="tag-cloud">
      <h3>Tags</h3>
      <div class="tag">
          <span v-for="tag in tags" :key="tag">
              <router-link :to="{name: 'Tag', params: { tag }}">
                  #{{ tag }}
              </router-link>
          </span>
      </div>
  </div>
</template>

<script>
import getTags from '@/composables/getTags'

export default {
    props: ['posts'],
    setup(props) {
        let tags = []
        if (props.posts) {
            tags = getTags(props.posts)
        }
        return { tags }
    }
}
</script>

<style>
  .tag-cloud {
    padding: 10px;
  }
  .tag-cloud h3 {
    border-bottom: 1px solid #eee;
    padding: 16px 8px;
    color: #444;
  }
  .tag-cloud div {
    display: inline-block;
    padding: 10px;
  }
  .tag-cloud a {
    color: #ccc;
    text-decoration: none;
  }
  .tag-cloud a.router-link-active {
    color: #ff8800;
    font-weight: bold;
  }
</style>