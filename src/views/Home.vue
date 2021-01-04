<template>
  <v-container fluid>
    <todo-edit-dialog>
      <template v-slot:activator="props">
        <v-btn
                color="primary"
                v-bind="props.attrs"
                v-on="props.activate">
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
  }

}
</script>
