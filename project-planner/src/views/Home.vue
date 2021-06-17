<template>
  <div class="home">
    <FilterNav @filterChange="handleChangeFilter" :current='filterBy'/>
    <div v-if="projects.length">
      <div class="projects" v-for="project in filteredProjects" :key="project.id">
        <div class="project-card">
          <ProjectCard :project="project"
            @delete="deleteProject"
            @complete="completeProject"
            />
        </div>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectCard from '@/components/ProjectCard.vue'
import FilterNav from '@/components/FilterNav.vue'

export default {
  name: 'Home',
  components: {
    ProjectCard,
    FilterNav
  },
  data() {
    return {
      projects: [],
      filterBy: 'all'
    }
  },
  methods: {
    deleteProject(id) {
      this.projects = this.projects.filter(project => project.id !== id)
    },
    completeProject(id) {
      let project = this.projects.find(p => p.id === id)
      // console.log(`${id}: ${project.complete} => ${!project.complete}`)
      project.complete = !project.complete
    },
    handleChangeFilter(by) {
      this.filterBy = by
    }
  },
  mounted() {
    fetch("http://localhost:3000/projects")
      .then(res => res.json())
      .then(data => this.projects = data)
      .catch(err => console.log(err))
  },
  computed: {
    filteredProjects() {
      if (this.filterBy === 'completed') {
        return this.projects.filter(project => project.complete)
      }
      if (this.filterBy === 'ongoing') {
        return this.projects.filter(project => !project.complete)
      }
      return this.projects
    }
  }
}
</script>
