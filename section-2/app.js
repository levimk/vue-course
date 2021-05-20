console.log('Hello Vue!')

const app = Vue.createApp({
    // root component: data || functions
    data() {
        return {
            showBooks: false,
            x: 0,
            y: 0,
            books: [
                {id: 1, title: "The Catcher in the Rye", author: "J.D. Salinger", likes: 0, url: "https://en.wikipedia.org/wiki/The_Catcher_in_the_Rye", img: "assets/salinger.jpg", isFav: false},
                {id: 2, title: "Conjectures and Refutations", author: "Karl Popper", likes: 0, url: "https://www.routledge.com/Conjectures-and-Refutations-The-Growth-of-Scientific-Knowledge/Popper/p/book/9780415285940#:~:text=Conjectures%20and%20Refutations%20is%20one,to%20politics%20and%20to%20history.", img: "assets/popper.jpg", isFav: false},
                {id: 3, title: "Maps of Meaning", author: "Jordan B. Peterson", likes: 0, url: "https://www.jordanbpeterson.com/maps-of-meaning/", img: "assets/peterson.jpg", isFav: true}
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
        },
        toggleFav(book) {
            book.isFav = !book.isFav;
        }
    }
})

app.mount("#app")