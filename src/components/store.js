import { reactive } from 'vue';
import axios from 'axios'

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
    },


    error_message:'',
    success:false,
    loadingemail:false,
    name:'',
    email:'',
    message:'',
    sendForm(){
        store.loadingemail = true
        store.success = false
        store.error_message = ''
        const data ={
          name: store.name,
          email: store.email,
          message: store.message,
        }
        
        axios.post(store.apiUrl + '/api/contacts', data)
        .then(response => {
          console.log(response);
          store.success = response.data.success
    
          if (store.success) {
            store.name = ''
            store.message = ''
            store.email = ''
          }else{
            store.error_message = response.data.errors;
            console.log(store.error_message);
    
          }
          store.loadingemail = false
        })
      }
})
