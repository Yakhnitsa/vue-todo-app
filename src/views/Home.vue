<template>
  <v-container fluid>
    <todo-edit-dialog>
      <template v-slot:activator="props">
        <v-btn
                color="primary"
                v-bind="props.attrs"
                @click="props.activate({})"
        >
          +
        </v-btn>
      </template>
    </todo-edit-dialog>
  </v-container>
</template>

<script>
// @ is an alias to /src
import {mapGetters} from 'vuex';
import TodoEditDialog from "../components/TodoEditDialog";
export default {
  name: 'Home',
  components: {
    TodoEditDialog
  },
  computed:{
    ...mapGetters({
      allTodos: 'getAllTodos'
    })
  },
  methods:{
    pushTodo(val){
      console.log(val);
      val.click();
    }
  }

}
</script>
