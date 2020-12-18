<template>
    <v-app>
        <v-container class="teal lighten-5" fluid>
            <v-row no-gutters>
                <v-col
                        v-for="n in 3"
                        :key="n"
                        cols="12"
                        sm="3"
                >
                    <v-card
                            class="pa-5"
                            outlined
                            tile
                    >
                        One of three columns
                    </v-card>
                </v-col>
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
export default {
  name: 'App',

  components: {
      TodoBoard
    // HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
