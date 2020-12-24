import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [],
        locations:[],
        people:[],
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
        }
        //TODO todo group by person, by place
    },
    mutations: {
        addPersonMutation(state,person){
            state.people.push(person);
        },
        addLocationMutation(state,place){
            state.locations.push(place);
        },
        addChildTaskMutation(state,{parent,child}){
            console.log(state);
            console.log(parent);
            console.log(child);
        },
        addTodoMutation(state,todo){
            this.todos.push(todo);
        }

    }
});
