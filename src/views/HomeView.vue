<script>
import { store } from '../components/store.js';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
import AppHeader from '../components/AppHeader.vue';
export default {
    name: "HomeView",
    components: {
        ProjectCard,
        AppHeader,
    },
    data() {
        return {
            apiUrl: 'http://127.0.0.1:8000',
            projects: null,
            loading: true
        }
    },
    methods: {
        getProjects(url) {
            axios
                .get(url)
                .then(response => {
                    this.projects = response.data.results;
                    this.loading = false;
                })
                .catch(error => {
                    console.error(error);
                    this.loading = false;
                });
        },
      
        nextPage(currentPage) {
            // console.log(this.apiUrl + '/api/projects?page=' + (currentPage + 1));
            this.getProjects(store.apiUrl + '/api/projects?page=' + (currentPage + 1));
        },
        prevPage(currentPage) {
            // console.log(this.apiUrl + '/api/projects?page=' + (currentPage - 1));
            this.getProjects(store.apiUrl + '/api/projects?page=' + (currentPage - 1));        },
    }, 
    mounted() {
        this.getProjects(store.apiUrl + '/api/projects');
    }
}
</script>

<template>
   
        <div class="container ">
      
            <AppHeader />    
            <h1 class="mb-3">Projects</h1>

            <div v-if="!loading && projects">

            <div class="row row-cols-1 row-cols-md-3 g-3">
                <ProjectCard v-for="project in projects.data" :project="project" />
            </div>
             <nav class="mt-3" aria-label="Page navigation">
                    <ul class="pagination    ">
                        <li class="page-item" :class="!projects.prev_page_url ? 'disabled' : ''">
                            <button class="page-link" @click.preventDefault()="prevPage(projects.current_page)" aria-label="Previous">                                
                                <span aria-hidden="true">&laquo;</span>
                            </button>
                        </li>

                        <li class="page-item" v-for="i in projects.last_page">
                            <button class="page-link" :class="projects.current_page == i ? 'active' : ''"
                            @click.preventDefault()="getProjects(store.apiUrl + '/api/projects?page=' + i)">                                
                            {{ i }}
                            </button>
                        </li>

                        <li class="page-item" :class="!projects.next_page_url ? 'disabled' : ''">
                            <button class="page-link" @click.preventDefault()="nextPage(projects.current_page)"
                            aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            </button>
                        </li>
                    </ul>
                </nav>
                
            </div>

            <h2 v-else-if="!loading">No project found...</h2>

            <h2 v-else>Loading projects...</h2>
        </div>
    
</template>

<style lang="scss" scoped>
</style>


