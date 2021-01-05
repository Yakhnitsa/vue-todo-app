<template>
    <v-navigation-drawer
            v-model="sidebar"
            :mini-variant.sync="mini"
            mini-variant-width="72"
            permanent
            app
            clipped>
        <v-list
                dense
        >
            <v-list-item class="px-2">
                <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
                </v-list-item-avatar>

                <v-list-item-title>TODO APP</v-list-item-title>
                <v-btn
                        icon
                        @click.stop="mini = !mini"
                >
                    <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
            </v-list-item>
            <v-divider class="teal lighten-2"></v-divider>
            <v-list-item
                    class="teal lighten-5"
                    link>
                <v-list-item-icon>
                    <v-icon>rule</v-icon>
                </v-list-item-icon>
                <v-list-item-title>All tasks</v-list-item-title>
                <v-list-item-action>
                    <todo-edit-dialog>
                        <template v-slot:activator="props">
                            <v-icon v-bind="props.attrs"
                                    @click="props.activate({})" color="grey darken-1">
                                add_task
                            </v-icon>
                        </template>

                    </todo-edit-dialog>

                </v-list-item-action>
            </v-list-item>
            <v-divider class="teal lighten-2"></v-divider>
            <v-list-group
                    class="teal lighten-5 pl"
                    :value="false"
                    prepend-icon="supervisor_account"
            >
                <template v-slot:activator>
                    <v-list-item-title >People</v-list-item-title>
                </template>
                <v-list-item class="white" link to="/people">
                    <v-list-item-icon class="mr-0 ml-2">
                        <v-icon dense color="teal" >people</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>ALL</v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item
                        class="white"
                        v-for="person in people"
                        :key="'p_' + person.id"
                        :to="'/people/' + person.id"
                        link
                >
                    <v-list-item-icon class="mr-0 ml-2">
                        <v-icon small color="teal">person</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title v-text="person.name"></v-list-item-title>
                </v-list-item>
            </v-list-group>
            <v-divider class="teal lighten-2"></v-divider>
            <v-list-group
                    class="teal lighten-5"
                    :value="false"
                    prepend-icon="place"
            >
                <template v-slot:activator>
                    <v-list-item-title>Locations</v-list-item-title>
                </template>
                <v-list-item class="white" link to="locations">
                    <v-list-item-icon class="mr-0 ml-2">
                        <v-icon dense color="teal">place</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>ALL</v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item
                        class="white"
                        v-for="location in locations"
                        :key="'l_' + location.id"
                        :to="'/locations/'+ location.id"
                        link
                >
                    <v-list-item-icon class="mr-0 ml-2">
                        <v-icon small color="teal">gps_fixed</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title v-text="location.name"></v-list-item-title>
                </v-list-item>
            </v-list-group>

            <v-divider class="teal lighten-2"></v-divider>

            <!--        <v-divider class="teal lighten-2"></v-divider>-->
            <!--        <v-list-item class="teal lighten-5"-->
            <!--                link>-->
            <!--            <v-list-item-icon @click="moveToPeople">-->
            <!--                <v-icon>supervisor_account</v-icon>-->
            <!--            </v-list-item-icon>-->
            <!--            <v-list-item-title @click="moveToPeople">People</v-list-item-title>-->
            <!--            <v-list-item-action>-->
            <!--                <v-icon @click="peopleMenu = !peopleMenu" color="grey darken-1">-->
            <!--                    {{peopleMenu ? 'expand_more':'navigate_next'}}-->
            <!--                </v-icon>-->
            <!--            </v-list-item-action>-->
            <!--        </v-list-item>-->
            <!--        <v-list-item v-show=peopleMenu v-for="person in people" :key="person.id" class="pl-8" link>-->
            <!--            <v-list-item-title @click="moveToPeople">{{person.name}}</v-list-item-title>-->
            <!--        </v-list-item>-->
            <!--        <v-divider class="teal lighten-2"></v-divider>-->
            <!--        <v-list-item-->
            <!--                class="teal lighten-5"-->
            <!--                link>-->
            <!--            <v-list-item-icon @click="moveToLocations">-->
            <!--                <v-icon>place</v-icon>-->
            <!--            </v-list-item-icon>-->
            <!--            <v-list-item-title @click="moveToLocations">Locations</v-list-item-title>-->
            <!--            <v-list-item-action>-->
            <!--                <v-icon @click="locationsMenu = !locationsMenu" color="grey darken-1">-->
            <!--                    {{locationsMenu ? 'expand_more':'navigate_next'}}-->
            <!--                </v-icon>-->
            <!--            </v-list-item-action>-->
            <!--        </v-list-item>-->
            <!--        <v-list-item v-show=locationsMenu v-for="location in locations" :key="location.id" class="pl-8 " link>-->
            <!--            <v-list-item-title @click="moveToPeople">{{location.name}}</v-list-item-title>-->
            <!--        </v-list-item>-->
        </v-list>


    </v-navigation-drawer>

</template>

<script>
    import {mapGetters} from 'vuex';
    import TodoEditDialog from "@/components/TodoEditDialog";
    export default {
        name: "SideMenu",
        components: {TodoEditDialog},
        data: () => ({
            sidebar: true,
            mini: true,
            peopleMenu: false,
            locationsMenu: false,
            headTasks: true,
        }),
        computed:{
            ...mapGetters({
                people: 'getAllPeople',
                locations:'getAllLocations'
            })
        },
        methods:{
            moveToPeople() {
                this.$router.push('people');
            },
            moveToLocations(){
                this.$router.push('locations');
            },
            addTodo(){

            }
        }
    }
</script>

<style scoped>

</style>