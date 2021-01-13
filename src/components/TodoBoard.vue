<template>
    <v-card
            min-width="500"
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
            <template v-for="(cat,index) in categories" >
                <v-list-item :key="'cat_' + index">
                    <category-title
                            :is-hidden="!categoryIsHidden(cat.category)"
                            @toggle-active="hideCategory(cat.category)"
                            @add-with-category="addWithCategory"
                            :todo-count="cat.items.length"
                            :category="cat.category">
                        <template v-slot:default>
                            <v-badge
                                    color="teal lighten-1"
                                    dark
                                    inline
                                    left
                                    class="mt-0"
                                    :content="cat.items.length"
                                    :value="cat.items.length > 0"

                            >
                                {{cat.category ? cat.category.name : 'Other'}}

                            </v-badge>
                        </template>
                    </category-title>
                </v-list-item>
                <v-list-item
                        v-show="categoryIsHidden(cat.category)"
                        v-for="todo in sortCompleted(cat.items)" :key="todo.id">
                    <todo-item
                            @edit-todo="editTodo(todo)"
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
            activeCategories:[],
            displayCompleted: true

        }),
        computed:{
            ...mapGetters({
                todoItems: 'getAllTodos'
            }),

        },
        methods:{
            setTaskActive(todo){
                this.activeTask = todo;
            },
            categoryIsHidden(category){
                let index = -1;
                if(category)
                    index = this.activeCategories.findIndex(cat => cat.id === category.id);
                else {
                    index = this.activeCategories.findIndex(cat => cat === category);
                }
                return index === -1;
            },
            hideCategory(category){
                const index = this.activeCategories.findIndex(cat => cat === category);
                if(index === -1){
                    this.activeCategories.push(category);
                }else{
                    this.activeCategories.splice(index,1);
                }
            },
            addWithCategory(category){
                this.$emit('add-with-category',category);
            },
            editTodo(todo){
                this.$emit('edit-todo',todo);
            },
            filterCompleted(tasks){
                if(this.displayCompleted){
                    return tasks;
                }
                return tasks.filter(todo => todo.completed);
            },
            sortCompleted(tasks){
                return [...tasks].sort((a,b) => a.isDone - b.isDone);
            }

        },
        mounted(){
        },
        filters:{


        }
    }
</script>

<style scoped>

</style>