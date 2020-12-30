<template>
  <v-container fluid>

  </v-container>
</template>

<script>
// @ is an alias to /src
import {mapGetters} from 'vuex';
export default {
  name: 'Home',
  components: {
  },
  computed:{
    ...mapGetters({
      allTodos: 'getAllTodos'
    })
  }

}
</script>
