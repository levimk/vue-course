<template>
    <form @submit.prevent="handleSubmit">
        <h3>Signup</h3>
        <input type="text" placeholder="Display Name" v-model="displayName" />
        <input type="email" placeholder="Email" v-model="email" />
        <input type="password" placeholder="Password" v-model="password" />
        <div v-if="error">{{ error }}</div>
        <button v-if="!isPending" type="submit">Sign up</button>
        <button v-else="isPending" disabled>Loading</button>
    </form>
</template>
<script>

import useSignup from '@/composables/useSignup'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const { error, signup, isPending } = useSignup()
        const email = ref('')
        const password = ref('')
        const displayName = ref('')
        const router = useRouter()

        const handleSubmit = async () => {
            const res = await signup(email.value, password.value, displayName.value)
            if (!error.value) {
                console.log('User signed up')
                router.push({ name: 'UserPlaylists' })
            }
        }

        return {
            handleSubmit,
            error,
            email,
            displayName,
            password,
            isPending
        }
    }
}
</script>
<style lang="">
    
</style>