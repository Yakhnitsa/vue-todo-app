<template>
    <v-list
            dense
    >
        <v-list-item link>
            <v-list-item-content>
                <v-list-item-title class="title">
                    TODO app
                </v-list-item-title>
                <v-list-item-subtitle>Just do it!</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item
                to="/"
                link>
            <v-list-item-icon>
                <v-icon>rule</v-icon>
            </v-list-item-icon>
            <v-list-item-title>All tasks</v-list-item-title>
        </v-list-item>
        <v-list-item
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
        <v-list-item
                link>
            <v-list-item-icon @click="moveToLocations">
                <v-icon>place</v-icon>
            </v-list-item-icon>
            <v-list-item-title @click="moveToLocations">Locations</v-list-item-title>
            <v-list-item-action>
                <v-icon @click="placesMenu = !placesMenu" color="grey darken-1">
                    {{placesMenu ? 'expand_more':'navigate_next'}}
                </v-icon>
            </v-list-item-action>
        </v-list-item>
    </v-list>
</template>

<script>
    export default {
        name: "SideMenu",
        data: () => ({
            peopleMenu: true,
            placesMenu: true,
            headTasks: true,
        }),
        methods:{
            moveToPeople() {
                this.$router.push('people');
            },
            moveToLocations(){
                this.$router.push('locations');
            }
        }
    }
</script>

<style scoped>

</style>