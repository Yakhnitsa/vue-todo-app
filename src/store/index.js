import Vue from 'vue'
import Vuex from 'vuex'

import api from '../api/jsonServerApi';
import {reduceToSuggestedCategories} from '../plugins/arrayUtils'

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
        getTodosGroupByPerson:((state, getters) => {
            const categories = [...getters.getAllPeople];
            categories.push(null);
            return reduceToSuggestedCategories(getters.getAllTodos,categories,'person');
        }),
        getTodosGroupByLocation:(state,getters) =>{
            const categories = [...getters.getAllLocations];
            categories.push(null);
            return reduceToSuggestedCategories(getters.getAllTodos,categories,'location');
        },
        getTestItems: state=>{
            return state.testItems;
        }
        //TODO todo group by person, by place
    },
    mutations: {
        setTodosMutation(state,todos){
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
        fetchAllData({dispatch }){
            dispatch('fetchAllTodosAction');
            dispatch('fetchPeopleAction');
            dispatch('fetchLocationsAction');
        },
        async fetchAllTodosAction({commit}){
            const resp = await api.fetchTodos();
            const todos = await resp.data;
            commit('setTodosMutation',todos);
        },
        async saveTodoAction({commit},todo){
            const resp = await api.saveTodo(todo);
            const savedTodo = resp.data;
            commit('addTodoMutation',savedTodo);
            return savedTodo;
        },
        async fetchPeopleAction({commit}){
            const resp = await api.fetchPeople();
            const people = resp.data;
            commit('setPeopleMutation',people);
        },
        async savePersonAction({commit},person){
            const resp = await api.savePerson(person);
            const savedPerson = resp.data;
            commit('addPersonMutation',savedPerson);
            return savedPerson;
        },
        async fetchLocationsAction({commit}){
            const resp = await api.fetchLocations();
            const locations = resp.data;
            commit('setLocationsMutation',locations);
        },
        async saveLocationAction({commit}, location){
            const resp = await api.saveLocation(location);
            const savedLocation = resp.data;
            commit('addLocationMutation', savedLocation);
            return savedLocation;
        }
    }
});
