<template>
  <form @submit.prevent="handleSubmit">
    <label>Title</label>
    <input type="text" required v-model="title">
    <label>Details</label>
    <textarea required v-model="details"></textarea>
    <button>
        Update Project
    </button>
  </form>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            title: '',
            details: '',
            uri: `http://localhost:3000/projects/${this.id}`
        }
    },
    methods: {
        handleSubmit() {
            fetch(this.uri, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: this.title,
                    details: this.details,
                })
            })
            .then(() => this.$router.push({ name: "Home" }))
            .catch(err => console.log(err))
        }
    },
    mounted() {
        fetch(this.uri)
            .then(res => res.status == 404 ? this.$router.push('/') : res.json())
            .then(data => {
                this.title = data.title
                this.details = data.details
            })
            .catch(err => console.log(err))
    }
}
</script>

<style>
form {
    width: 100%;
    background: white;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
}

label {
    display: block;
    color: #bbb;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    margin: 20px 0 10px 0;
}

input {
    padding: 10px;
    border: 0;
    border-bottom: 1px solid #ddd;
    width: 100%;
    box-sizing: border-box;
}

textarea {
    padding: 10px;
    border: 0;
    border-bottom: 1px solid #ddd;
    width: 100%;
    box-sizing: border-box;
}

form button {
    display: block;
    margin: 20px auto 0;
    background: #00ce89;
    color: white;
    padding: 10px;
    border: 0;
    border-radius: 6px;
    font-size: 16px;
}

form button:hover {
    cursor: pointer;
    background: #00ce8969;
}
</style>