import { reactive } from 'vue';

export const store = reactive({
    apiUrl: 'http://127.0.0.1:8000',

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
        return 'No technologies'
    }
})
