let todoId = 4;
let personId = 5;

import {addOrReplace, deleteIfExist } from '../plugins/arrayUtils';

const todos = [
    {
        id:0,
        text:'Buy tickets',
        isDone: false,
        person:'',
        location:'Boryspil',
        childTask:null,
    },
    {
        id:1,
        text:'Pack all my staff',
        isDone: false,
        person:'Wife',
        location:'Home',
        childTask:null,
    },
    {
        id:2,
        text:'Buy presents for nephews',
        isDone: false,
        person:'',
        location:'Lavina mall',
        childTask:null,
    },
    {
        id:3,
        text:'Spell list for a vacation',
        isDone: false,
        person:'Boss',
        location:'Work',
        childTask:null,
    },
    {
        id:4,
        text:'Fix water leaks in bathroom',
        isDone: false,
        person:'',
        location:'Home',
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

const places = [];

export default {
    addTodo(todo){
        if(todo.id >= 0){
            addOrReplace(todos,todo);
        }
        else{
            todo.id = ++todoId;
            todos.push(todo);
        }
        return todo;
    },
    deleteTodo(todo){
        const index = todos.findIndex(item => item.id === todo.id);
        if(index !== -1) todos.splice(index,1);
    },
    fetchTodos(){
        return todos;
    },

    addPerson(person){
        if(person.id <= 0){
            person.id = ++personId;
        }
        addOrReplace(people,person);
        return person;
    },

    deletePerson(person){
        deleteIfExist(people,person);
    },

    fetchPeople(){
       return people;
    },

    addPlace(place){
        // TODO проверить на дубликат
        places.push(place);
    }

}