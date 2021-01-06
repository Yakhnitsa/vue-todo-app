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
                  :categories="allTodosWithCategory"
                  @add-with-category="pushTodo({})"
                  :is-loading="false">

      </todo-board>
    </v-row>
    <v-row>

    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import {mapGetters} from 'vuex';
import TodoEditDialog from "../components/TodoEditDialog";
import TodoQuickAdd from "../components/TodoQuickAdd";
import TodoBoard from "@/components/TodoBoard";

export default {
  name: 'Home',
  components: {
    TodoEditDialog,
    TodoQuickAdd,
    TodoBoard
  },
  computed:{
    ...mapGetters({
      allTodos: 'getAllTodos'
    }),
    allTodosWithCategory(){
      return [{category: {id:null, name: 'All tasks'}, items: this.allTodos}]
    }
  },
  methods:{
    pushTodo(val){
      val.click();
    },
    openEditDialog(todo){
      this.$refs.todoEditDialog.pushTodo(todo);
    },
  }

}
</script>
