<template lang="">
    <div class="chat-window">
        <div v-if="error" class="error">
            {{ error }}
        </div>
        <div
          v-if="formattedDocuments"
          class="messages" 
          ref="chatListRef" >
            <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
                <span class="created-at">
                    {{ doc.createdAt }}
                </span>
                <span class="name">
                    {{ doc.name }}
                </span>
                <span class="message">
                    {{ doc.message }}
                </span>
            </div>
        </div>
    </div>
</template>
<script>
import getCollection from '@/composables/getCollection'
import { formatDistanceToNow } from 'date-fns'
import { computed, ref, onUpdated } from 'vue'

export default {
    setup() {
        const chatListRef = ref(null)
        const { documents, error } = getCollection('messages')

        const formattedDocuments = computed(() => {
          if (documents.value) {
            let time;
            return documents.value.map(doc => {
              time = formatDistanceToNow(doc.createdAt.toDate())
              return { ...doc, createdAt: time }
            })
          } else {
            return null
          }
        })

        onUpdated(() => {
          chatListRef.value.scrollTo({ top: chatListRef.value.scrollHeight, behavior: 'smooth' })
        })
        
        return { chatListRef, formattedDocuments, error }
    }
}
</script>
<style scoped>
  .chat-window {
    background: #fafafa;
    padding: 30px 20px;
  }
  .single {
    margin: 18px 0;
  }
  .created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
  }
  .name {
    font-weight: bold;
    margin-right: 6px;
  }
  .messages {
    max-height: 400px;
    overflow: auto;
  }
</style>