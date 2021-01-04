<template>

    <v-app>
        <v-navigation-drawer
                v-model="sidebar"
                app
                clipped>
            <side-menu></side-menu>
        </v-navigation-drawer>

        <v-main     v-touch="{
              left: () => this.sidebar = false,
              right: () => this.sidebar = true, }">
            <v-btn
                    @click="sidebar = !sidebar"
                    class="ml-2 mt-2"
                    :style="{
                        zIndex: 1100,
                        backgroundColor: '#E0F2F1'
                    }"

                    style="z-index: 1100"
                    absolute
                    large
                    elevation="2"
                    icon
            >
                <v-icon>
                    menu
                </v-icon>
            </v-btn>
            <router-view></router-view>
        </v-main>
<!--        <v-container class="teal lighten-5" fluid>-->
<!--            <v-row>-->
<!--                <router-link to="/">Home</router-link>-->
<!--                <router-link to="/people">People</router-link>-->
<!--                <router-link to="/places">Places</router-link>-->
<!--            </v-row>-->
<!--            <v-row>-->
<!--                <router-view></router-view>-->
<!--            </v-row>-->
<!--        </v-container>-->
    </v-app>
</template>
<script>
    // import TodoBoard from "@/components/TodoBoard";
    import SideMenu from "@/components/SideMenu";
    export default {
        components: {SideMenu},
        data: () => ({
            sidebar: true,

        }),
        mounted() {
            this.$store.dispatch('fetchAllData');
        }
    }
</script>

<style lang="scss">
    /*#app {*/
    /*    font-family: Avenir, Helvetica, Arial, sans-serif;*/
    /*    -webkit-font-smoothing: antialiased;*/
    /*    -moz-osx-font-smoothing: grayscale;*/
    /*    text-align: left;*/
    /*    color: #2c3e50;*/
    /*}*/

    /*#nav {*/
    /*    padding: 30px;*/

    /*    a {*/
    /*        font-weight: bold;*/
    /*        color: #2c3e50;*/

    /*        &.router-link-exact-active {*/
    /*            color: #42b983;*/
    /*        }*/
    /*    }*/
    /*}*/
</style>
