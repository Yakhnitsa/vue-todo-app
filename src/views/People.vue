<template>
    <v-container fluid>
        <v-row>
            <todo-edit-dialog ref="todoEditDialog">
                <template v-slot:activator>
<!--                    Add void div to hide activator-->
                    <div></div>
                </template>
            </todo-edit-dialog>
            <todo-quick-add class="ml-5 my-2"
                  @edit-todo="openEditDialog"></todo-quick-add>
        </v-row>
        <v-row>
            <todo-board class="ml-5"
                        :categories="singleCategory.length > 0 ? singleCategory : allCategories"
                        @add-with-category="addWithCategory"
                        :is-loading="false">

            </todo-board>
        </v-row>
    </v-container>
</template>

<script>
    import {mapGetters} from "vuex";
    import {reduceToCategories} from '../plugins/arrayUtils'
    import TodoBoard from "@/components/TodoBoard";
    import TodoQuickAdd from "@/components/TodoQuickAdd";
    import TodoEditDialog from "@/components/TodoEditDialog";

    export default {
        name: "People",
        components: {TodoEditDialog, TodoQuickAdd, TodoBoard},

        computed:{
            ...mapGetters({
                allTodos: 'getAllTodos',
                people:'getAllPeople'
            }),
            singleCategory(){
                const id = this.$route.params.id;
                console.log(id);
                return this.allCategories
                    .filter(cat => {
                        return cat.title ? cat.title.id == id : false;
                    });
            },
            allCategories(){
                return reduceToCategories(this.allTodos,'person');
            }
        },
        methods:{

            openEditDialog(todo){
                this.$refs.todoEditDialog.pushTodo(todo);
            },
            addWithCategory(category){
                const prototype = {person: category};
                this.openEditDialog(prototype);
            }
        },
        mounted(){
            // const result = this.$store.dispatch('fetchAllData');
            // result.finally(() => console.log('data fetched'))
        }
    }
</script>

<style scoped>

</style>