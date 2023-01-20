<script>
export default {
    name: "ProjectList",
    props: {
        project: Object
    },
    data() {
        return {
            apiUrl: 'http://127.0.0.1:8000',
        }
    },
    methods: {
        getImage(img) {
            // console.log(img);
            if (img) {
                return this.apiUrl + '/storage/' + img;
            }
            return 'https://garrettmuseumofart.org/wp-content/uploads/2016/03/placeholder_template-300x200.jpg';
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
            return 'No technologies'
        }
    }
}
</script>

<template>
    <div class="col">
        <div class="card h-100">
            <img class="card-img-top" :src="getImage(project.cover_image)" :alt="project.title">
            <div class="card-body">
                <h4 class="card-title">{{ project.title }}</h4>
                <p class="card-slug"><strong>Slug:</strong> {{ project.slug }}</p>
                
                <div class="mb-2">
                    <div class="mb-3"><strong>Type</strong>: {{ getType(project) }}</div>
                    <div><strong>Technologies</strong>: {{ getTechnologies(project) }}</div>
                </div>
                <p class="card-text"><strong>Description: </strong>{{ project.description }}</p>

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