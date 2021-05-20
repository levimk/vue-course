console.log('Hello Vue!')

const app = Vue.createApp({
    // root component: data || functions
    data() {
        return {
            title: 'Catcher in the Rye',
            author: 'J.D. Salinger',
            age: '88',
            showContent: false
        }
    },
    methods: {
        changeTitle() {
            this.title = 'New Title';
            console.log('changeTitle()');
        },
        toggleShowContent() {
            this.showContent = !this.showContent
        }
    }
})

app.mount("#app")