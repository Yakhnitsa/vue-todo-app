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
        fetchAllTodosAction({commit}){
            const todos = api.fetchTodos();
            commit('setTodos',todos);
        },
        saveTodoAction({commit},todo){
            const savedTodo = api.addTodo(todo);
            commit('addTodoMutation',savedTodo);
            return savedTodo;
        },
        fetchPeopleAction({commit}){
            const people = api.fetchPeople();
            commit('setPeopleMutation',people);
        },
        async savePersonAction({commit},person){
            const savedPerson = await api.savePerson(person);
            commit('addPersonMutation',savedPerson);
            return savedPerson;
        },
        fetchLocationsAction({commit}){
            const locations = api.fetchLocations();
            commit('setLocationsMutation',locations);
        },
        saveLocationAction({commit}, location){
            const savedLocation = api.saveLocation(location);
            commit('addLocationMutation', savedLocation);
            return savedLocation;
        }
    }
});
