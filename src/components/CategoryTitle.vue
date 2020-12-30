<template>
    <v-hover class="mt-1">

        <template v-slot:default="{ hover }">
            <v-card
                    elevation="1"
                    :class="['teal',hover ? 'lighten-4':'lighten-5']"
                    width="100%"
                    class="mx-auto px-3 py-1 text-left"
                    outlined
                    tile
            >
                <v-card-title class="pa-0">
                    <v-list-item class="px-0">
                        <v-list-item-content class="pa-1">
                            <v-list-item-title @click="displayTodos">
                                <v-icon color="blue-grey darken-1">
                                    {{isActive ? 'keyboard_arrow_down': 'keyboard_arrow_right'}}
                                </v-icon>
                                {{category ? category.name : 'No category'}}</v-list-item-title>
                        </v-list-item-content>

<!--                        <v-divider-->
<!--                                vertical-->
<!--                        ></v-divider>-->

                        <v-list-item-action class="d-inline-block my-0 pa-0">
                            <v-btn icon>
                                <v-icon color="grey darken-1">add</v-icon>
                            </v-btn>
                        </v-list-item-action>

                    </v-list-item>
                </v-card-title>

             </v-card>
        </template>
    </v-hover>
</template>

<script>
    export default {
        name: "CategoryTitle",
        props:['category','todo-count','category-icon'],
        data: () => ({
            isActive: true,
        }),
        methods:{
            displayTodos(){
                this.isActive = !this.isActive;
                this.$emit('display-todos',this.isActive);
            }
        }
    }

</script>

<style scoped>
    .v-list-item {
        text-align: left;
        min-height: 30px;
    }
</style>