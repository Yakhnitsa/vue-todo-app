<template>
    <v-hover class="mt-1">

        <template v-slot:default="{ hover }">
            <v-card
                    :elevation="hover ? 6 : 1"
                    width="100%"
                    class="mx-auto px-3 py-1"
                    outlined
                    tile
            >
<!--                <div v-if='loadingAwait' class="loading">-->
<!--                    ...loading...-->
<!--                </div>-->
                <loading-screen></loading-screen>

                <v-card-title class="pa-0">
                    <v-list-item class="px-0">
                        <v-list-item-action class="my-0 mr-3">
                            <v-checkbox
                                    hide-details
                                    class="shrink mr-2 mt-0"
                            ></v-checkbox>
                        </v-list-item-action>
                        <v-list-item-content class="pa-1">

                            <v-list-item-title @click="activateMenu">
                                <v-icon color="blue-grey darken-1">
                                    {{isActive ? 'keyboard_arrow_down': 'keyboard_arrow_right'}}
                                </v-icon>
                                {{todoItem.text}}</v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-action class="d-inline-block my-1 mr-2">
                            <v-icon color="blue-grey darken-1"
                                    dense
                                    :disabled="!hasPerson">mdi-account-circle</v-icon>
                            <v-icon color="blue-grey darken-1"
                                    dense
                                    :disabled="!hasLocation">location_on</v-icon>
                            <v-icon color="blue-grey darken-1"
                                    dense
                                    :disabled="!hasChildTask">add_task</v-icon>
                        </v-list-item-action>

                        <v-divider
                                vertical
                        ></v-divider>

                        <v-list-item-action class="d-inline-block my-0 pa-0">
                            <v-btn icon>
                                <v-icon color="grey lighten-1">more_vert</v-icon>
                            </v-btn>
                        </v-list-item-action>

                    </v-list-item>
                </v-card-title>

                <v-card-text class="py-0 pl-2" v-show="isActive">
                    <v-divider class="my-1"></v-divider>
                    <v-list-item class="px-0">
                        <v-icon color="blue-grey lighten">mdi-account-circle</v-icon>
                        <hovered-chip ref="personChip"
                                      :input-item.sync="todoItem.person"
                                      :search-items="people"
                                      @addNewRecord="addPerson"
                                      @delete-item="deletePerson">
<!--                            <template #default>{{todoItem.person.name}}</template>-->
                        </hovered-chip>
                    </v-list-item>
                    <v-list-item class="px-0">
                        <v-icon color="blue-grey lighten-1">location_on</v-icon>
                        <hovered-chip
                                :input-item.sync="todoItem.location"
                                :search-items="locations"
                                @addNewRecord="addNewLocation"
                                @delete-item="deleteLocation">
                        </hovered-chip>
                    </v-list-item>
                    <v-list-item class="px-0">
                        <v-icon color="blue-grey lighten-1">add_task</v-icon>
                        <hovered-chip v-show="hasChildTask">
                            <template #default>
                                {{todoItem.childTask}}
                            </template>
                            <template #edit-menu>
                                <v-list>
                                    <v-list-item>...</v-list-item>
                                    <v-list-item>...</v-list-item>
                                    <v-list-item>...</v-list-item>
                                </v-list>
                            </template>

                        </hovered-chip>
                    </v-list-item>
                </v-card-text>
            </v-card>
        </template>
    </v-hover>
</template>

<script>
    import HoveredChip from "@/components/HoveredChip";
    import {mapMutations, mapActions, mapGetters} from 'vuex';
    import LoadingScreen from "@/components/LoadingScreen";
    export default {
        name: "TodoItem",
        components: {LoadingScreen, HoveredChip},
        props:['todo-item','is-active'],
        data() {
            return{
                loadingAwait:false,
            }
        },
        computed:{
            ...mapGetters({
                people: 'getAllPeople',
                locations: 'getAllLocations'
            }),
            hasLocation(){
                return this.todoItem.location;
            },
            hasPerson(){
                return this.todoItem.person;
            },
            hasChildTask(){
                return this.todoItem.childTask;
            },
            hasParentTask(){
                return true;
            },
        },
        methods:{
            ...mapMutations(['addPersonMutation'],{

            }),
            ...mapActions(['saveTodoAction','savePersonAction','saveLocationAction']),
            activateMenu(){
                this.isActive ? this.$emit('set-active', null)
                    : this.$emit('set-active',this.todoItem);
            },
            moveToPerson(){

            },
            moveToLocation(){

            },
            moveToPatentTask(){

            },
            addNewLocation(locationName){
                let location = {name:locationName}

                this.saveLocationAction(location)
                    .then(res => {
                        this.todoItem.location = res
                    });
            },
            addPerson(personName){
                let person = {name:personName}
                this.loadingAwait= true;
                this.savePersonAction(person)
                    .then(res => {
                        this.todoItem.person = res
                        this.loadingAwait = false;
                    });
            },

            addChildTask(){

            },
            deletePerson(){
                this.todoItem.person = null;
            },
            deleteLocation(){
                this.todoItem.location = null;
            },
            deleteChildTask(){

            },
            editLocation(){

            },
            savePerson(){

            },
            editChildTask(){

            },

        },
        watch:{
            todoItem:{
                deep: true,
                handler(){
                    this.saveTodoAction(this.todoItem);
                }
            }
        },
        created(){

        }
    }
</script>

<style scoped>
    .v-list-item {
        min-height: 30px;
    }
    .loading {
        position: absolute;
        z-index:    1000;
        top:        0;
        left:       0;
        height:     100%;
        width:      100%;
        background: rgba( 205, 205, 205, 0.5 );
    }

</style>