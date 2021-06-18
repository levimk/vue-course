<template>
  <div class="home">
    <h1>Friends</h1>
    <p>Hi my name is {{ fname }} {{ lname }} and I am {{ age }}.</p>
    <button @click="changeFirstName">Change name</button>
    <button @click="incrAge">+1 age</button>
    <button @click="age--">-1 age</button>
    <input type="text" v-model="lname">
    <br />
    <p>My friend's name is {{ friend.name }} and he is {{ friend.age }}.</p>
    <input type="text" v-model="friend.name">
    <button @click="friend.age--">-1 friend age</button>
    <button @click="incrFriendAge">+1 friend age</button>
    <br />
    <h2>Mario Kart</h2>
    <input type="text" v-model="search">
    <p>Search term: {{search}} </p>
    <div v-for="result in results">{{ result }}</div>
    <p v-if="watching">Watching</p>
    <p v-else><strong>Not</strong> watching</p>
    <button v-if="watching" @click="handleStopWatching">Stop watching</button>
    <br />
    <h2>Posts</h2>
    <Posts :posts="posts" />
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, reactive, computed, watch, watchEffect, onMounted } from 'vue'
import Posts from '@/components/Posts'

export default {
  name: 'Home',
  components: {
    Posts
  },
  // options API: data(), mounted() etc.
  //     - Reactive by default

  // Composition API: setup()
  //     - Warning: NOT Reactive by default
  setup() {
    onMounted(() => {
      console.log('Home mounted')
    })
    // Data and functions can be abstracted, like React hooks
    // refs give you direct access to DOM elements
    // refs need to import { ref } from 'vue'
    // use r.value to access DOM element for JS manipulation
    // put refs as keys in the object from setup()
    // refs do not have the DOM element until they are returned from setup()
    // (i.e. injected into the DOM)
    // using refs inside setup() before they are injected into the DOM
    // will use their constructor value, not the DOM target.
    // refs can be used for Reactivity
    //     - Wrap data in ref
    //     - do NOT need to do myData.value in template
    //     - Vue knows that you want myData.value -> just use myData
    
    let fname = 'levi' // NOT reactive
    const lname = ref('mckenzie') // Reactive -> mod with v-model
    const age = ref(27) // Reactive -> mod with func and --

    // reactive() API is an alternative to ref()
    //    - we don't need to do myRef.value.myKey
    //    - simply: myReactive.myKey
    // Drawbacks:
    //    - CanNOT use primitive type -> must use objects or arrays
    //    - Refs maintain their reactivity when exposed by external functions -> refs are
    //      better for creating external composition funcs
    const friend = reactive({ name: 'dave', age: 25 })

    const changeFirstName = () => {
      fname = 'tom'
      console.log("Fname changed to: " + fname)
    }

    const incrAge = () => {
      age.value++
      console.log("Age is now " + age.value)
    }

    const incrFriendAge = () => {
      friend.age++
    }

    // Computed values can work with refs
    const mariokart = ref(['mario', 'luigi', 'peach', 'bowser', 'toad', 'dk'])

    const search = ref('')

    const results = computed(() => {
      return mariokart.value.filter(name => name.includes(search.value))
    })

    let watching = ref(true)

    // watch: run some code whenever the value of a ref changes
    // does NOT run on init
    const stopWatch = watch(search, () => {
      console.log('watch')
    })

    let watchEffectCount = 0
    // DOES run on init
    // Automatically watches any dependencies
    const stopWatchEffect = watchEffect(() => {
      if (!watchEffectCount) {
        console.log('watchEffect init')
      } else {
        console.log('watchEffectCount: ', watchEffectCount)
      }
      console.log('watchEffect - search', search.value)
      watchEffectCount++
    })

    // To stop watching: assign watch/watchEffect calls to const vars + invoke
    const handleStopWatching = () => {
      stopWatch()
      stopWatchEffect()
      watching.value = false
    }

    const posts = ref([
      { id: 1, title: "abc", details: "lorem ipsum"},
      { id: 2, title: "def", details: "delorum sum"}
    ])

    return {
      fname,
      lname,
      age,
      friend,
      mariokart,
      search,
      results,
      watching,
      posts,
      handleStopWatching,
      changeFirstName,
      incrAge,
      incrFriendAge
    }
  }
}
</script>
