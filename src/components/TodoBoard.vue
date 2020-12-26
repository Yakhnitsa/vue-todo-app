<template>
    <v-card
            class="mx-auto"
            width="500"
            height="100%"
    >
        <v-list>
             <v-list-item v-for="todo in todoItems" :key="todo.id">
                <todo-item :todo-item="todo"></todo-item>
            </v-list-item>
        </v-list>
        <v-menu
                offset-y
        >
            <template v-slot:activator="{ attrs, on }">
                <test-button :prop="{ attrs, on }">

                </test-button>
            </template>

            <v-list>
                <v-list-item
                        v-for="n in 5"
                        :key="n"
                        link
                >
                    <v-list-item-title >{{n}} some text</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

    </v-card>

</template>

<script>
    import TodoItem from "@/components/TodoItem";
    import TestButton from "@/components/TestButton";
    import {mapGetters,mapActions} from 'vuex';

    export default {
        name: "TodoBoard",
        components: {TestButton, TodoItem},
        computed:{
            ...mapGetters({
                todoItems: 'getAllTodos'
            }),
        },
        methods:{
            ...mapActions(['fetchAllTodosAction','fetchPeopleAction'])
        },
        created(){
            this.fetchAllTodosAction();
            this.fetchPeopleAction();
        }
    }
</script>

<style scoped>

</style>