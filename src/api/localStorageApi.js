let todoId = 4;
let personId = 5;
let locationId = 5;

import {addOrReplace,deleteIfExist} from '../plugins/arrayUtils';

const todos = [
    {
        id:0,
        text:'Buy tickets',
        isDone: false,
        person: {id: 0, name: 'Wife'},
        location:null,
        childTask:null,
    },
    {
        id:1,
        text:'Pack all my staff',
        isDone: false,
        person:null,
        location:{id: 0, name: 'Home'},
        childTask:null,
    },
    {
        id:2,
        text:'Buy presents for nephews',
        isDone: false,
        person:null,
        location: {id: 4, name: 'Lavina mall'},
        childTask:null,
    },
    {
        id:3,
        text:'Spell list for a vacation',
        isDone: false,
        person: {id: 1, name: 'Boss'},
        location: {id: 1, name: 'Work'},
        childTask:null,
    },
    {
        id:4,
        text:'Fix water leaks in bathroom',
        isDone: false,
        person: {id: 5, name: 'Plumber'},
        location:null,
        childTask:null,
    },
];

const people = [
    {id: 0, name: 'Wife'},
    {id: 1, name: 'Boss'},
    {id: 2, name: 'Mom'},
    {id: 3, name: 'Ann'},
    {id: 4, name: 'Prostitute'},
    {id: 5, name: 'Plumber'},
];

const locations = [
    {id: 0, name: 'Home'},
    {id: 1, name: 'Work'},
    {id: 2, name: 'Gas station'},
    {id: 3, name: 'Supermarket'},
    {id: 4, name: 'Lavina mall'},
    {id: 5, name: 'Hayvoron'},
    ];

const sleep = (ms,obj) =>{
    return new Promise(resolve =>{
        setTimeout(() => resolve(obj),ms);
    })
}

export default {
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

    fetchTodos(){
        return sleep(1000,todos);
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
