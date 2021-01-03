<template>
    <v-dialog
            v-model="dialog"
            persistent
            max-width="600px"
    >
        <template v-slot:activator="{ on, attrs }">
            <slot name="activator">
                <v-btn
                        color="primary"
                        dark
                        v-bind="attrs"
                        v-on="on"
                >
                    Open Dialog
                </v-btn>
                <v-card>
                    <v-card-title>
                        <span class="headline">Edit Todo</span>
                    </v-card-title>
                    <v-card-subtitle>
                        <v-text-field
                                v-model="todoForm.text"
                                label="What to do?"
                                required
                        ></v-text-field>
                    </v-card-subtitle>
                    <v-card-text>
                        <v-list-item class="px-0">
                            <v-icon color="blue-grey lighten">mdi-account-circle</v-icon>
                            <editable-chip ref="personChip"
                                          :input-item.sync="todoForm.person"
                                          :search-items="people"
                                          @addNewRecord="addPerson"
                                          @delete-item="deletePerson">
                                <!--                            <template #default>{{todoItem.person.name}}</template>-->
                            </editable-chip>
                        </v-list-item>
                        <v-list-item class="px-0">
                            <v-icon color="blue-grey lighten-1">location_on</v-icon>
                            <editable-chip
                                    :input-item.sync="todoForm.location"
                                    :search-items="locations"
                                    @addNewRecord="addNewLocation"
                                    @delete-item="deleteLocation">
                            </editable-chip>
                        </v-list-item>
                        <v-list-item class="px-0">
                            <v-icon color="blue-grey lighten-1">add_task</v-icon>
                            <editable-chip v-show="hasChildTask">
                                <template #default>
                                    {{todoForm.childTask}}
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
                    <v-card-actions>

                    </v-card-actions>
                </v-card>
            </slot>

        </template>
    </v-dialog>
</template>

<script>
    import EditableChip from "@/components/EditableChip";
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "TodoEditDialog",
        components:{EditableChip},
        props:['todo'],
        data: () => ({
            dialog: false,
            loading: false,
            todoForm:{
                id:null,
                text:'',
                isDone: false,
                person: null,
                location:null,
                childTask:null,
            }
        }),
        computed:{
            ...mapGetters({
                people: 'getAllPeople',
                locations: 'getAllLocations'
            }),
        },
        methods:{
            ...mapActions(['saveTodoAction','savePersonAction','saveLocationAction']),
            saveAndClose(){
                this.$emit('save-todo',this.todoForm);
            },
            close(){
                this.dialog = false;
            },
            updateForm(){
                Object.assign(this.todoForm,this.todo);
            },
            addNewLocation(locationName){
                let location = {name:locationName}
                this.loadingAwait = true;
                this.saveLocationAction(location)
                    .then(res => {
                        this.todoItem.location = res
                        this.loading = false;
                    });
            },
            addPerson(personName){
                let person = {name:personName}
                this.loadingAwait= true;
                this.savePersonAction(person)
                    .then(res => {
                        this.todoItem.person = res
                        this.loading = false;
                    });
            },
        },
        watch:{
            dialog(){
                this.updateForm();
            }
        }
    }
</script>

<style scoped>

</style>