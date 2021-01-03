const axios = require('axios');
axios.defaults.baseURL = "http://localhost:3001/";

const sleep = (ms,obj) =>{
    return new Promise(resolve =>{
        setTimeout(() => resolve(obj),ms);
    })
}

export default {
    async fetchTodos() {
        const todos = await axios.get('people');
        return sleep(1000,todos);
    },

    async saveTodo(todo){
        let savedTodo = null;
        if(!todo.id){
            savedTodo = await axios.post('todos',todo);
        }else{
            savedTodo = await axios.put('todos/' + todo.id,todo);
        }
        return sleep(500,savedTodo);
    },

    async deleteTodo(todo){
        return await axios.delete('todos/' + todo.id);
    },

    async fetchPeople(){
        const people = await axios.get('people');
        return sleep(1000,people);
    },

    async savePerson(person){
        let savedPerson = null;
        if(!person.id){
            savedPerson = await axios.post('people',person);
        }else{
            savedPerson = await axios.put('people/' + person.id,person);
        }
        return sleep(500,savedPerson);
    },

    async deletePerson(person){
        if(person.id){
            return await axios.delete('people/' + person.id);
        }
    },

    async fetchLocations(){
        const locations = await axios.get('locations');
        return sleep(1000,locations);
    },

    async saveLocation(location){
        let savedLocation = null;
        if(!location.id){
            savedLocation = await axios.post('locations',location);
        }else{
            savedLocation = await axios.put('locations/' + location.id,location);
        }
        return sleep(500,savedLocation);
    },

    async deleteLocation(location){
        if(location.id){
            return await axios.delete('locations/' + location.id);
        }
    },

}