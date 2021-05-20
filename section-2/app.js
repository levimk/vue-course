console.log('Hello Vue!')

const app = Vue.createApp({
    // root component: data || functions
    data() {
        return {
            title: 'Catcher in the Rye',
            author: 'J.D. Salinger',
            age: '88',
            showContent: false,
            x: 0,
            y: 0
        }
    },
    methods: {
        changeTitle() {
            this.title = 'New Title';
            console.log('changeTitle()');
        },
        toggleShowContent() {
            this.showContent = !this.showContent
        },
        handleEvent(e, data) {
            console.log(e.type)
            if (data) {
                console.log("data:", data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount("#app")