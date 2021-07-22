<template lang="js">
    <nav v-if="user">
        <div>
            <p>Hi, {{ user.displayName }}</p>
            <p class="email">{{ user.email }}</p>
        </div>
        <p class="error">{{ error }}</p>
        <button type="button" @click="handleClick">Log out</button>
    </nav>
</template>

<script>
import { useRouter } from 'vue-router'
import useLogout from '@/composables/useLogout'
import getUser from '@/composables/getUser'

export default {
    setup() {
        const router = useRouter()
        const { error, logout } = useLogout()
        const { user } = getUser()
        
        const handleClick = async () => {
            await logout()
            if (!error.value) {
                router.push('/')
            }
        }
        
        return {
            handleClick,
            error,
            user
        }
    }
}
</script>

<style>
    
</style>