<template>
    <v-card
            class="mx-auto"
            width="500"
            height="100%">
        <v-list v-if="isLoading">
            <v-list-item class="d-block" v-for="n in 5" :key="n">
                <v-skeleton-loader style="width: 90%"
                        type="list-item-avatar-two-line"
                ></v-skeleton-loader>
                <v-divider></v-divider>
            </v-list-item>
        </v-list>

        <v-list v-else>
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
        props:{

        },
        data: () => ({
            activeTask:null,
            isLoading: true
        }),
        computed:{
            ...mapGetters({
                todoItems: 'getAllTodos'
            }),
        },
        methods:{
            ...mapActions(['fetchAllTodosAction','fetchPeopleAction','fetchLocationsAction']),
            setTaskActive(todo){
                this.activeTask = todo;
            }
        },
        mounted(){
            console.log('Bord created')
            this.isLoading = true;
            const p1 = this.fetchAllTodosAction();
            const p2 = this.fetchPeopleAction();
            const p3 = this.fetchLocationsAction();
            Promise.all([p1,p2,p3]).then(() =>{
                this.isLoading=false;
            })
        }
    }
</script>

<style scoped>
    v-skeleton-loader{
        width: 100%;
    }
</style>