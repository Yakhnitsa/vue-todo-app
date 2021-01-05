<template>
    <v-list
            dense
    >
        <v-list-item class="px-2">
            <v-list-item-avatar>
                <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
            </v-list-item-avatar>

            <v-list-item-title>John Leider</v-list-item-title>
            <slot name="activator">

            </slot>
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
<!--                        <v-btn-->
<!--                                color="primary"-->
<!--                                v-bind="props.attrs"-->
<!--                                @click="props.activate({})"-->
<!--                        >-->
<!--                            +-->
<!--                        </v-btn>-->
                        <v-icon v-bind="props.attrs"
                                @click="props.activate({})" color="grey darken-1">
                            add_task
                        </v-icon>
                    </template>

                </todo-edit-dialog>

            </v-list-item-action>
        </v-list-item>
        <v-divider class="teal lighten-2"></v-divider>
        <v-list-item class="teal lighten-5"
                link>
            <v-list-item-icon @click="moveToPeople">
                <v-icon>supervisor_account</v-icon>
            </v-list-item-icon>
            <v-list-item-title @click="moveToPeople">People</v-list-item-title>
            <v-list-item-action>
                <v-icon @click="peopleMenu = !peopleMenu" color="grey darken-1">
                    {{peopleMenu ? 'expand_more':'navigate_next'}}
                </v-icon>
            </v-list-item-action>
        </v-list-item>
        <v-list-item v-show=peopleMenu v-for="person in people" :key="person.id" class="pl-8" link>
            <v-list-item-title @click="moveToPeople">{{person.name}}</v-list-item-title>
        </v-list-item>
        <v-divider class="teal lighten-2"></v-divider>
        <v-list-item
                class="teal lighten-5"
                link>
            <v-list-item-icon @click="moveToLocations">
                <v-icon>place</v-icon>
            </v-list-item-icon>
            <v-list-item-title @click="moveToLocations">Locations</v-list-item-title>
            <v-list-item-action>
                <v-icon @click="locationsMenu = !locationsMenu" color="grey darken-1">
                    {{placesMenu ? 'expand_more':'navigate_next'}}
                </v-icon>
            </v-list-item-action>
        </v-list-item>
        <v-list-item v-show=locationsMenu v-for="location in locations" :key="location.id" class="pl-8 " link>
            <v-list-item-title @click="moveToPeople">{{location.name}}</v-list-item-title>
        </v-list-item>
    </v-list>
</template>

<script>
    import {mapGetters} from 'vuex';
    import TodoEditDialog from "@/components/TodoEditDialog";
    export default {
        name: "SideMenu",
        components: {TodoEditDialog},
        data: () => ({
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