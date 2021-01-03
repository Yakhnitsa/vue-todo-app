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
            <template v-for="(category,index) in categories" >
                <v-list-item :key="'cat_' + index">
                    <category-title :category="category.title"></category-title>
                </v-list-item>
                <v-list-item v-for="todo in category.items" :key="todo.id">
                    <todo-item
                            @set-active="setTaskActive"
                            :is-active="todo === activeTask"
                            :todo-item="todo">
                    </todo-item>
                </v-list-item>
            </template>

        </v-list>
    </v-card>
</template>

<script>
    import TodoItem from "@/components/TodoItem";
    // import TestButton from "@/components/TestButton";
    import {mapGetters} from 'vuex';
    import CategoryTitle from "@/components/CategoryTitle";

    export default {
        name: "TodoBoard",
        components: {CategoryTitle, TodoItem},
        props:{
            categories: Array,
            isLoading: Boolean
        },
        data: () => ({
            activeTask:null,
        }),
        computed:{
            ...mapGetters({
                todoItems: 'getAllTodos'
            }),
        },
        methods:{
            setTaskActive(todo){
                this.activeTask = todo;
            }
        },
        mounted(){

        }
    }
</script>

<style scoped>

</style>