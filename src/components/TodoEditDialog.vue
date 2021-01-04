<template>
    <v-dialog
            v-model="dialog"
            persistent
            max-width="600px"
    >
        <template v-slot:activator="{ on, attrs }">

            <slot name="activator" :activate="pushTodo" :attrs="attrs">
                <v-btn
                        color="primary"
                        dark
                        v-bind="attrs"
                        v-on="on">
                    Open Dialog
                </v-btn>
            </slot>

        </template>

        <v-card>
            <v-card-title>
                <span class="headline">Edit Todo</span>
            </v-card-title>
            <v-card-subtitle class="py-1">
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
                    </editable-chip>
                </v-list-item>
                <v-list-item class="px-0">
                    <v-icon color="blue-grey lighten-1">location_on</v-icon>
                    <editable-chip
                            class="mt-1"
                            :input-item.sync="todoForm.location"
                            :search-items="locations"
                            @addNewRecord="addNewLocation"
                            @delete-item="deleteLocation">
                    </editable-chip>
                </v-list-item>
                <v-list-item class="px-0">
                    <v-icon color="blue-grey lighten-1">add_task</v-icon>
                    <editable-chip>
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
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                        color="blue darken-1"
                        text
                        @click="saveAndClose"
                >
                    Save
                </v-btn>
                <v-btn
                        color="blue darken-1"
                        text
                        @click="closeDialog"
                >
                    Close
                </v-btn>

            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import EditableChip from "@/components/EditableChip";
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "TodoEditDialog",
        components: {EditableChip},
        props: [],
        data: () => ({
            dialog: false,
            loading: false,
            todoForm: {
                id: null,
                text: '',
                isDone: false,
                person: null,
                location: null,
                childTask: null,
            }
        }),
        computed: {
            ...mapGetters({
                people: 'getAllPeople',
                locations: 'getAllLocations'
            }),
        },
        methods: {
            ...mapActions(['saveTodoAction', 'savePersonAction', 'saveLocationAction']),
            saveAndClose() {
                this.loading = true;
                this.saveTodoAction(this.todoForm)
                    .then(() => {
                        this.loading = false;
                        this.closeDialog();
                    })
            },

            openDialog() {
                this.dialog = true;
            },

            closeDialog() {
                this.clearFrom();
                this.dialog = false;
            },

            addNewLocation(locationName) {
                let location = {name: locationName}
                this.loading = true;
                this.saveLocationAction(location)
                    .then(res => {
                        this.todoItem.location = res
                        this.loading = false;
                    });
            },

            addPerson(personName) {
                let person = {name: personName}
                this.loadingAwait = true;
                this.savePersonAction(person)
                    .then(res => {
                        this.todoItem.person = res
                        this.loading = false;
                    });
            },

            deletePerson() {
                this.todoForm.person = null;
            },

            deleteLocation() {
                this.todoForm.location = null;
            },

            pushTodo(todo) {
                Object.assign(this.todoForm, todo);
                this.openDialog();
            },

            clearFrom(){
                for (const prop of Object.getOwnPropertyNames(this.todoForm)) {
                    if(typeof this.todoForm[prop] === "object"){
                        this.todoForm[prop] = null;
                    }else{
                        this.todoForm[prop] = '';
                    }

                }
                console.log(this.todoForm);
            }
        },
        watch: {

        }
    }
</script>

<style scoped>
    .v-list-item {
        min-height: 25px;
    }
</style>