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
                    to="/"
                    link>
                <v-list-item-icon>
                    <v-icon>rule</v-icon>
                </v-list-item-icon>
                <v-list-item-title>All tasks</v-list-item-title>
<!--                <v-list-item-action>-->
<!--                    <todo-edit-dialog>-->
<!--                        <template v-slot:activator="props">-->
<!--                            <v-icon v-bind="props.attrs"-->
<!--                                    @click="props.activate({})" color="grey darken-1">-->
<!--                                add_task-->
<!--                            </v-icon>-->
<!--                        </template>-->

<!--                    </todo-edit-dialog>-->

<!--                </v-list-item-action>-->
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
                        v-for="(group,index) in peopleGroups"
                        :key="'p_' + index"
                        @click="moveToPerson(group.category)"
                        link
                >
                    <v-list-item-icon class="mr-0 ml-2 mr-3">
                        <v-icon small color="teal">person</v-icon>


                    </v-list-item-icon>
                    <v-list-item-title v-text="group.category ? group.category.name : 'No person'"></v-list-item-title>
                    <v-list-item-action>
                        <v-badge
                                color="teal lighten-1"
                                dark
                                inline
                                v-show="group.items.length > 0"
                                :content="group.items.length"
                        >

                        </v-badge>
                    </v-list-item-action>
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
                <v-list-item class="white" link to="/locations">
                    <v-list-item-icon class="mr-0 ml-2">
                        <v-icon dense color="teal">place</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>ALL</v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item
                        class="white"
                        v-for="(group,index) in locationGroups"
                        :key="'l_' + index"
                        @click="moveToLocation(group.category)"
                        link
                >
                    <v-list-item-icon class="mr-0 ml-2">
                        <v-icon small color="teal">gps_fixed</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title v-text="group.category ? group.category.name : 'No place'"></v-list-item-title>
                    <v-list-item-action>
                        <v-badge
                                color="teal lighten-1"
                                dark
                                inline
                                v-show="group.items.length > 0"
                                :content="group.items.length"
                        >

                        </v-badge>
                    </v-list-item-action>
                </v-list-item>
            </v-list-group>

            <v-divider class="teal lighten-2"></v-divider>
        </v-list>


    </v-navigation-drawer>

</template>

<script>
    import {mapGetters} from 'vuex';
    // import TodoEditDialog from "@/components/TodoEditDialog";
    export default {
        name: "SideMenu",
        components: {},
        data: () => ({
            sidebar: true,
            mini: false,
            peopleMenu: false,
            locationsMenu: false,
            headTasks: true,
        }),
        computed:{
            ...mapGetters({
                people: 'getAllPeople',
                locations:'getAllLocations',
                locationGroups:'getTodosGroupByLocation',
                peopleGroups: 'getTodosGroupByPerson'
            })
        },
        methods:{
            moveToPerson(category) {
                if(category && category.id !== undefined){
                    this.$router.push('/people/' + category.id);
                }else{
                    this.$router.push('/people/no_person');
                }

            },
            moveToLocation(category){
                if(category && category.id !== undefined){
                    this.$router.push('/locations/' + category.id);
                }else{
                    this.$router.push('/locations/no_location');
                }
            },
            addTodo(){

            }
        }
    }
</script>

<style scoped>
    .v-badge__badge {
        border-radius: 5px;
        color: #fff;
        font-size: 10px;
        height: 17px;
    }

</style>