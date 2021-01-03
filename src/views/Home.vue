<template>
  <v-container fluid>
    <todo-edit-dialog></todo-edit-dialog>
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
