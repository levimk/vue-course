<template lang="js">
    <div class="container">
        <Navbar />
        <NewChatForm />
    </div>
</template>
<script>
import { useRouter } from 'vue-router'
import { watch } from 'vue'
import getUser from '@/composables/getUser'
import Navbar from '@/components/Navbar'
import NewChatForm from '@/components/NewChatForm'

export default {
    components: {
        Navbar,
        NewChatForm
    },
    setup() {
      const router = useRouter()
      const { user } = getUser()
      
      watch(user, () => {
        if (!user.value) {
          router.push('/')
        }
      })
      
      return { user }
    }
}
</script>

<style>
  nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
  }
  nav p.email {
    font-size: 14px;
    color: #999;
  }
</style>