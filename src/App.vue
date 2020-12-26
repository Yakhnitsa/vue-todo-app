<template>
    <v-app>
        <v-container class="teal lighten-5" fluid>
            <v-row no-gutters>
                <test-component></test-component>
            </v-row>
            <v-row>
                <todo-board></todo-board>
            </v-row>
        </v-container>
    </v-app>

</template>

<script>
// import HelloWorld from './components/HelloWorld';

import TodoBoard from "@/components/TodoBoard";
import TestComponent from "./components/testComponent";
export default {
  name: 'App',

  components: {
      TestComponent,
      TodoBoard
    // HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
