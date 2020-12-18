<template>
    <v-hover class="mt-1">
        <template v-slot:default="{ hover }">
            <v-card
                    :elevation="hover ? 6 : 1"
                    width="100%"
                    class="mx-auto px-3 py-2"
                    outlined
                    tile
            >
                <v-list-item>
                    <v-list-item-action>
                        <v-checkbox
                                hide-details
                                class="shrink mr-2 mt-0"
                        ></v-checkbox>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title text="List item title">List item title</v-list-item-title>
                    </v-list-item-content>

                     <v-list-item-action class="d-inline-block">
                        <v-btn icon>
                            <v-icon color="grey lighten-1">mdi-account-circle</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon color="grey lighten-1">location_on</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon color="grey lighten-1">gps_fixed</v-icon>
                        </v-btn>
                    </v-list-item-action>
                </v-list-item>
            </v-card>
        </template>
    </v-hover>
</template>

<script>
    export default {
        name: "TodoItem"
    }
</script>

<style scoped>

</style>