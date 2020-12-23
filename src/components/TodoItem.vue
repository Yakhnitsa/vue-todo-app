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
                <v-card-title class="pa-0">
                    <v-list-item class="px-0">
                        <v-list-item-action class="my-0 mr-3">
                            <v-checkbox
                                    hide-details
                                    class="shrink mr-2 mt-0"
                            ></v-checkbox>
                        </v-list-item-action>
                        <v-list-item-content class="pa-1">

                            <v-list-item-title @click="isActive = !isActive">
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
                        <hovered-chip v-show="hasPerson">{{todoItem.person}}</hovered-chip>
                    </v-list-item>
                    <v-list-item class="px-0">
                        <v-icon color="blue-grey lighten-1">location_on</v-icon>
                        <hovered-chip v-show="hasLocation">{{todoItem.location}}</hovered-chip>
                    </v-list-item>
                    <v-list-item class="px-0">
                        <v-icon color="blue-grey lighten-1">add_task</v-icon>
                        <hovered-chip v-show="hasChildTask">{{todoItem.childTask}}</hovered-chip>
                        <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                <hovered-chip
                                        :menu-attr="attrs"
                                        :on="on"
                                        v-show="hasChildTask">{{todoItem.childTask}}</hovered-chip>
                            </template>
                            <v-list>
                                <v-list-item
                                        v-for="n in 5"
                                        :key="n"
                                >
                                    <v-list-item-title>some text</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-list-item>
                </v-card-text>
            </v-card>
        </template>
    </v-hover>
</template>

<script>
    import HoveredChip from "@/components/HoveredChip";
    export default {
        name: "TodoItem",
        components: {HoveredChip},
        props:['todo-item'],
        data() {
            return{
                isActive : false,
            }
        },
        computed:{

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
            }
        },
        methods:{
            moveToPerson(){

            },
            moveToLocation(){

            },
            moveToPatentTask(){

            },
            addLocation(){

            },
            addPerson(){

            },
            addChildTask(){

            },
            deletePerson(){

            },
            deleteLocation(){

            },
            deleteChildTask(){

            },
            editLocation(){

            },
            editPerson(){

            },
            editChildTask(){

            }

        }
    }
</script>

<style scoped>
    .v-list-item {
        min-height: 30px;
    }

</style>