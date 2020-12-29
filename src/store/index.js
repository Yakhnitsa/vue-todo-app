import Vue from 'vue'
import Vuex from 'vuex'

import api from '../api/localStorageApi';

import {addOrReplace} from '../plugins/arrayUtils';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [

        ],
        locations:[],
        people:[],
        testItems:[],
    },
    getters:{
        getAllTodos(state){
            return state.todos;
        },
        getAllLocations: state => {
            return state.locations;
        },
        getAllPeople: state => {
            return state.people;
        },
        getTestItems: state=>{
            return state.testItems;
        }
        //TODO todo group by person, by place
    },
    mutations: {
        setTodos(state,todos){
            state.todos = todos;
        },
        setLocationsMutation(state,locations){
            state.locations = locations;
        },
        setPeopleMutation(state,people){
            state.people = people;
        },
        addPersonMutation(state,person){
            addOrReplace(state.people, person);
        },
        addLocationMutation(state,place){
            addOrReplace(state.locations, place);
        },
        addChildTaskMutation(state,{parent,child}){
            console.log(state);
            console.log(parent);
            console.log(child);
        },
        addTodoMutation(state,todo){
            addOrReplace(state.todos,todo);
        },
        addTestItem(state,item){
            state.testItems.push(item);
        }
    },
    actions:{
        async fetchAllTodosAction({commit}){
            const todos = await api.fetchTodos();
            commit('setTodos',todos);
        },
        async saveTodoAction({commit},todo){
            const savedTodo = await api.addTodo(todo);
            commit('addTodoMutation',savedTodo);
            return savedTodo;
        },
        async fetchPeopleAction({commit}){
            const people = await api.fetchPeople();
            commit('setPeopleMutation',people);
        },
        async savePersonAction({commit},person){
            const savedPerson = await api.savePerson(person);
            commit('addPersonMutation',savedPerson);
            return savedPerson;
        },
        async fetchLocationsAction({commit}){
            const locations = await api.fetchLocations();
            commit('setLocationsMutation',locations);
        },
        async saveLocationAction({commit}, location){
            const savedLocation = await api.saveLocation(location);
            commit('addLocationMutation', savedLocation);
            return savedLocation;
        }
    }
});
