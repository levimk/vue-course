<template>
  <form @submit.prevent="handleSubmit">
    <label>Title</label>
    <input type="text" required v-model="title">
    <label>Details</label>
    <textarea required v-model="details"></textarea>
    <button>
        Add Project
    </button>
  </form>
</template>

<script>
export default {
    data() {
        return {
            title: "",
            details: ""
        }
    },
    methods: {
        handleSubmit() {
            fetch("http://localhost:3000/projects", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: this.title,
                    details: this.details,
                    complete: false
                })
            })
            .then(() => this.$router.push({ name: "Home" }))
            .catch(err => console.log(err))
        }
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

/* form > div {
    display: flex;
    flex-flow: column nowrap;
    margin-bottom: 20px;
}

form > div > label {
    color: grey;
    text-transform: uppercase; 
    font-weight: bold;
}

.title {
}

.title > input {
    border: 1px solid grey;
    border-radius: 4px;
}

.details > textarea {
    border: 1px solid grey;
    border-radius: 4px;
}

.submit {
    width: 80px;
    align-self: center;
} */
</style>