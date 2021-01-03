import {addOrReplace, deleteIfExist} from "../plugins/arrayUtils";

const url = "http://localhost:3001/";
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
    addTodo(todo){
        if(!Object.prototype.hasOwnProperty.call(todo, "id")){
            todo.id = ++todoId;
        }
        addOrReplace(todos,todo);
        return sleep(500,todo);
    },

    deleteTodo(todo){
        deleteIfExist(todos,todo);
    },

    savePerson(person){
        if(!person.id || person.id <= 0){
            person.id = ++personId;
        }
        addOrReplace(people,person);
        return sleep(500,person);
    },

    deletePerson(person){
        deleteIfExist(people,person);
    },

    fetchPeople(){
        return sleep(1000,people);
    },

    deleteLocation(location){
        deleteIfExist(locations,location);
    },

    saveLocation(location){
        if(Object.prototype.hasOwnProperty.call(location, "id")){
            location.id = ++locationId;
        }
        addOrReplace(locations,location);
        return sleep(500,location);
    },

    fetchLocations(){
        return sleep(1000,locations);
    },
}