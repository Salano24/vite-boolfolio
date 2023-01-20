<script>
import axios from 'axios';
export default {
    name: 'SingleProjectView',
    data() {
        return {
            apiUrl: 'http://localhost:8000',
            project: null,
            loading: true
        }
    },
    methods: {
        getImage(img) {
            // console.log(img);
            if (img) {
                return this.apiUrl + '/storage/' + img;
            }
            return 'https://via.placeholder.com/600x300.png?text=Cover+Image';
        },
        getType(project) {
            if (project.type) {
                return project.type.name;
            }
            return 'No type';
        },
        getTechnologies(project) {
            if (project.technologies.length > 0) {
                let techs = '';
                project.technologies.forEach(technology => {
                    techs = techs + technology.name + ' ';
                });
                return techs;
            }
            return 'No technologies';
        }
    },
    mounted() {
        const url = this.apiUrl + '/api/projects/' + this.$route.params.slug;
        // console.log(url);
        axios.get(url)
            .then(response => {
                if (response.data.results.length !== 0) {
                    this.project = response.data.results[0];
                    this.loading = false;
                    // console.log(this.project);
                } else {
                    this.project = 'no-project';
                    this.loading = false;
                    // console.log(this.project);
                }
            }).catch(error => {
                console.log(error);
            })
    }
}
</script>

<template>
    <div class="container my-4">
        <template v-if="loading">
            <h2>Loading project...</h2>
        </template>
        <template v-else>
            <template v-if="project !== 'no-project'">
                <img class="img-fluid" :src="getImage(project.cover_img)" :alt="project.name">

                <h1 class="my-3">{{ project.name }}</h1>

                <div class="mb-2">
                    <div><strong>Type</strong>: {{ getType(project) }}</div>
                    <div><strong>Technologies</strong>: {{ getTechnologies(project) }}</div>
                </div>

                <p>{{ project.body }}</p>
            </template>
            <template v-else>
                <h2>No project found...</h2>
            </template>
        </template>
    </div>
</template>


<style lang="scss" scoped>
</style>