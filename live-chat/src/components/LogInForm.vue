<template>
  <form @submit.prevent="handleSubmit">
      <input type="email" required placeholder="email" v-model="email">
      <input type="password" required placeholder="password" v-model="password">
      <div class="error">{{ error }}</div>
      <button>Log in</button>
      <div v-if="success" class="error" style="color: green;">{{ email }} logged in</div>
  </form>
</template>

<script>
import { ref } from 'vue'
import useLogin from '@/composables/useLogin'

export default {
    setup(props, context) {
        const email = ref('')
        const password = ref('')
        const { error, login } = useLogin(email, password)
        const success = ref(false)
        const handleSubmit = async () => {
            await login(email.value, password.value)
            success.value = error.value === null
            context.emit('login')
        }

        return {
            email,
            password,
            handleSubmit,
            success,
            error
        }
    }
}
</script>

<style>

</style>