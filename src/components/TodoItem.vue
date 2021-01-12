<template>
    <v-hover class="mt-1">

        <template v-slot:default="{ hover }">
            <v-card
                    :elevation="hover ? 1 : 0"
                    width="100%"
                    class="mx-auto px-2 py-0"
                    outlined
                    tile
            >
                <loading-screen :is-loading="loadingAwait"></loading-screen>
                <v-card-title class="pa-0">
                    <v-list-item class="px-0">
                        <v-list-item-action class="my-0 mr-3">
                            <v-checkbox
                                    hide-details
                                    v-model="isDone"
                                    class="shrink mr-2 mt-0"
                            ></v-checkbox>
                        </v-list-item-action>
                        <v-list-item-content class="pa-1">
                            <v-list-item-title

                                    @click="activateMenu">
                                <v-icon color="blue-grey darken-1">
                                    {{isActive ? 'keyboard_arrow_down': 'keyboard_arrow_right'}}
                                </v-icon>
                                <span :class="{'text--secondary text-decoration-line-through' : isDone}">
                                    {{todoItem.text}}
                                </span>
                                </v-list-item-title>
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
<!--                            <v-btn icon>-->
<!--                                <v-icon color="grey lighten-1">more_vert</v-icon>-->
<!--                            </v-btn>-->
                            <v-menu offset-y>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn icon
                                            color="primary"
                                            dark
                                            v-bind="attrs"
                                            v-on="on"
                                    >
                                        <v-icon color="grey lighten-1">more_vert</v-icon>
                                    </v-btn>
                                </template>
                                <v-list dense>
                                    <v-list-item-group
                                            color="primary"
                                    >
<!--                                        <v-subheader>todo menu</v-subheader>-->
                                        <v-list-item @click="editTodo" >
                                            <v-list-item-icon class="my-1 mr-2">
                                                <v-icon small>edit</v-icon>
                                            </v-list-item-icon>
                                            <v-list-item-content>
                                                <v-list-item-title>edit todo</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item @click="deleteTodo">
                                            <v-list-item-icon class="my-1 mr-2">
                                                <v-icon small>delete</v-icon>
                                            </v-list-item-icon>
                                            <v-list-item-content>
                                                <v-list-item-title>delete todo</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list-item-group>
                                </v-list>
                            </v-menu>


                        </v-list-item-action>

                    </v-list-item>
                </v-card-title>

                <v-card-text class="py-0 pl-2" v-show="isActive">
                    <v-divider class="my-1"></v-divider>
                    <v-list-item class="px-0">
                        <v-icon color="blue-grey lighten">mdi-account-circle</v-icon>
                        <editable-chip ref="personChip"
                                      :input-item.sync="todoItem.person"
                                      :search-items="people"
                                      @addNewRecord="addNewPerson"
                                      @update-item="updatePerson">
<!--                            <template #default>{{todoItem.person.name}}</template>-->
                        </editable-chip>
                    </v-list-item>
                    <v-list-item class="px-0 mb-1">
                        <v-icon color="blue-grey lighten-1">location_on</v-icon>
                        <editable-chip
                                class="mt-1"
                                :input-item.sync="todoItem.location"
                                :search-items="locations"
                                @addNewRecord="addNewLocation"
                                @update-item="updateLocation">
                        </editable-chip>
                    </v-list-item>
                    <v-list-item class="px-0">
                        <v-icon color="blue-grey lighten-1">add_task</v-icon>
                        <editable-chip v-show="hasChildTask">
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

                        </editable-chip>
                    </v-list-item>
                </v-card-text>
            </v-card>
        </template>
    </v-hover>
</template>

<script>
    import EditableChip from "@/components/EditableChip";
    import {mapMutations, mapActions, mapGetters} from 'vuex';
    import LoadingScreen from "@/components/LoadingScreen";
    export default {
        name: "TodoItem",
        components: {LoadingScreen, EditableChip},
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
            isDone:{
                get(){
                    return this.todoItem.isDone;
                },
                set(val){
                    this.todoItem.isDone = val;
                    this.saveTodo();
                }
            },
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
            ...mapMutations({

            }),
            ...mapActions(['saveTodoAction','savePersonAction','saveLocationAction','deleteTodoAction']),
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
                this.loadingAwait = true;
                this.saveLocationAction(location)
                    .then(res => {
                        this.todoItem.location = res
                        this.loadingAwait = false;
                    });
                this.saveTodo();
            },
            addNewPerson(personName){
                let person = {name:personName}
                this.loadingAwait= true;
                this.savePersonAction(person)
                    .then(res => {
                        this.todoItem.person = res
                        this.loadingAwait = false;
                    });
                this.saveTodo();
            },

            addChildTask(){

            },
            updatePerson(person){
                this.todoItem.person = person;
                this.saveTodo();
            },
            updateLocation(location){
                this.todoItem.location = location;
                this.saveTodo();
            },

            saveTodo(){
                this.loadingAwait = true
                this.saveTodoAction(this.todoItem)
                    .finally(()=> this.loadingAwait = false);
            },
            editTodo(){
                this.$emit('edit-todo');
            },
            deleteTodo(){
                this.deleteTodoAction(this.todoItem);
            }

        },
        watch:{
            todoItem:{
                deep: true,
                handler(){
                }
            }
        },
        created(){

        }
    }
</script>

<style scoped>
    .v-list-item {
        text-align: left;
        min-height: 20px;
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