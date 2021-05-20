console.log('Hello Vue!')

const app = Vue.createApp({
    // root component: data || functions
    data() {
        return {
            showBooks: false,
            x: 0,
            y: 0,
            books: [
                {id: 1, title: "The Catcher in the Rye", authro: "J.D. Salinger", likes: 0},
                {id: 2, title: "Conjectures and Refutations", authro: "Karl Popper", likes: 0},
                {id: 3, title: "Maps of Meaning", authro: "Jordan B. Peterson", likes: 0}
            ]
        }
    },
    methods: {
        changeTitle() {
            this.title = 'New Title';
            console.log('changeTitle()');
        },
        toggleShowContent() {
            this.showBooks = !this.showBooks
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