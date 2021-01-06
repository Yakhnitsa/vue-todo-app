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
    import TodoBoard from "@/components/TodoBoard";
    import {mapGetters} from "vuex";
    import TodoQuickAdd from "@/components/TodoQuickAdd";
    import TodoEditDialog from "@/components/TodoEditDialog";
    // import {reduceToCategories} from "@/plugins/arrayUtils";

    export default {
        name: "Locations",
        components: {TodoBoard, TodoQuickAdd,TodoEditDialog},
        computed:{
            ...mapGetters({
                allTodos: 'getAllTodos',
                people:'getAllPeople',
                locations: 'getAllLocations',
                allCategories: 'getTodosGroupByLocation'
            }),
            singleCategory(){
                const id = this.$route.params.id;
                if(id === 'no_location'){
                    return this.allCategories.filter(group => group.category === null)
                }
                return this.allCategories
                    .filter(group => {
                        return group.category ? group.category.id == id : false;
                    });
            },
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
        }
    }
</script>

<style scoped>

</style>