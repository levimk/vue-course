<template>
    <div class="project" :class="{ complete: project.complete }">
        <div class="actions">
            <h3 @click="toggleShowDetails">{{ project.title }}</h3>
            <div class="icons">
                <router-link :to="{
                    name: 'EditProject',
                    params: { id: project.id }
                }">
                    <span class="material-icons edit">edit</span>
                </router-link>
                <span class="material-icons delete" @click="handleDelete">delete</span>
                <span v-if="project.complete" class="material-icons complete" @click="toggleComplete">check_box</span>
                <span v-else class="material-icons incomplete" @click="toggleComplete">check_box_outline_blank</span>
            </div>
        </div>
        <div v-if="showDetails" class="details">
            <p>{{ project.details }}</p>
        </div>
        
    </div>
</template>

<script>
export default {
    props: ["project"],
    data() {
        return {
            showDetails: false,
            uri: `http://localhost:3000/projects/${this.project.id}`
        }
    },
    methods: {
        toggleShowDetails() {
            this.showDetails = !this.showDetails;
        },
        toggleComplete() {
            fetch(this.uri, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ complete: !this.project.complete })
            })
            .then(() => this.$emit('complete', this.project.id))
            .catch(err => console.log(err))
        },
        handleDelete() {
            fetch(this.uri, { method: "DELETE" })
            .then(() => this.$emit('delete', this.project.id))
            .catch(err => console.log(err.body))
        }
    }
}
</script>

<style>
.project {
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.05);
    border-left: 4px solid #e90074;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.project .actions {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}

.project h3 {
    cursor: pointer;
    margin-right: 10px;
}

.project .details {
    
}

.project .material-icons {
    font-size: 24px;
    margin-left: 10px;
    color: #bbb;
    cursor: pointer;
}

.project .material-icons:hover {
    color: #777;
}

.project .material-icons.complete {
    color: #00ce89;
}

/* .project .material-icons.incomplete {
    color: #e90074;
} */

.project.complete {
    border-left: 4px solid #00ce89;
}
</style>