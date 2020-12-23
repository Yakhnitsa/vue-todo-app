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

    </v-card>

</template>

<script>
    import TodoItem from "@/components/TodoItem";
    export default {
        name: "TodoBoard",
        components: {TodoItem},
        computed:{
            todoItems(){
                return [
                    {
                        id:1,
                        text:'By tickets',
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
                ]
            }
        }
    }
</script>

<style scoped>

</style>