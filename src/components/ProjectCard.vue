<script>
import { store } from './store';

export default {
    name: "ProjectList",
    props: {
        project: Object
    },
    data() {
        return {
            max: 100,
            store           
        }
    },
    methods: {
        trimBody(text) {
            if (text.length > this.max) {
                return text.slice(0, this.max) + '...'
            }
            return text
       
        }
    }
}
</script>

<template>
    <div class="col">
        <div class="card h-100">
            <img class="card-img-top" :src="store.getImage(project.cover_image)" :alt="project.title">
            <div class="card-body">
                <h4 class="card-title">{{ project.title }}</h4>
                <p class="card-slug"><strong>Slug:</strong> {{ project.slug }}</p>
                
                <div class="mb-2">
                    <div class="mb-3"><strong>Type</strong>: {{ store.getType(project) }}</div>
                    <div><strong>Technologies</strong>: {{ store.getTechnologies(project) }}</div>
                </div>
                <p class="card-text"><strong>Description: </strong>{{ trimBody(project.description) }}</p>

                <router-link :to="{ name: 'single-project', params: { slug: project.slug } }" class="btn btn-primary">
                    Read more
                </router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    img {
        height: 15rem;
        width: 100%;
        object-position: center;
        object-fit: cover;
    }
}
</style>