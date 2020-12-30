<template>
<!--  <div id="app">-->
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/people">People</router-link>-->
<!--      <router-link to="/places">Places</router-link>-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
<!--    <router-view/>-->
<!--  </div>-->
  <v-app>
    <v-container class="teal lighten-5" fluid>
      <v-row>
        <router-view></router-view>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
  // import TodoBoard from "@/components/TodoBoard";
  export default {
    components: {

    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
