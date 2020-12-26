import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [
            {
                id:1,
                text:'Buy tickets',
                isDone: false,
                person:'',
                location:'Boryspil',
                childTask:null,
            },
            {
                id:2,
                text:'Pack all my staff',
                isDone: false,
                person:'Wife',
                location:'Home',
                childTask:null,
            },
            {
                id:3,
                text:'Buy presents for nephews',
                isDone: false,
                person:'',
                location:'Lavina mall',
                childTask:null,
            },
            {
                id:4,
                text:'Spell list for a vacation',
                isDone: false,
                person:'Boss',
                location:'Work',
                childTask:null,
            },
            {
                id:5,
                text:'Fix water leaks in bathroom',
                isDone: false,
                person:'',
                location:'Home',
                childTask:null,
            },
        ],
        locations:[],
        people:[],
        testItems:[],
    },
    getters:{
        getAllTodos(state){
            //make reactive for test code and then delete:

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
            //TODO make reactive before add
            this.todos.push(todo);
        },
        addTestItem(state,item){
            state.testItems.push(item);
        }

    }
});
