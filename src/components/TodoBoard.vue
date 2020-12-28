<template>
    <v-card
            class="mx-auto"
            width="500"
            height="100%"
    >
        <v-list>
             <v-list-item v-for="todo in todoItems" :key="todo.id">
                <todo-item
                        @set-active="setTaskActive"
                        :is-active="todo === activeTask"
                        :todo-item="todo"></todo-item>
            </v-list-item>
        </v-list>

    </v-card>

</template>

<script>
    import TodoItem from "@/components/TodoItem";
    // import TestButton from "@/components/TestButton";
    import {mapGetters,mapActions} from 'vuex';

    export default {
        name: "TodoBoard",
        components: {TodoItem},
        data: () => ({
            activeTask:null
        }),
        computed:{
            ...mapGetters({
                todoItems: 'getAllTodos'
            }),
        },
        methods:{
            ...mapActions(['fetchAllTodosAction','fetchPeopleAction','fetchLocationsAction']),
            setTaskActive(todo){
                console.log(todo);
                this.activeTask = todo;
            }
        },
        created(){
            this.fetchAllTodosAction();
            this.fetchPeopleAction();
            this.fetchLocationsAction();
        }
    }
</script>

<style scoped>

</style>