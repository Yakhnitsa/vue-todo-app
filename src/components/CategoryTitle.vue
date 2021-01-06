<template>

    <v-hover class="mt-1">

        <template v-slot:default="{ hover }">
            <v-card
                    elevation="1"
                    :class="['teal',hover ? 'lighten-4':'lighten-5']"
                    width="100%"
                    class="mx-auto px-3 py-1 text-left"
                    outlined
                    tile>
                <v-card-title class="pa-0">
                    <v-list-item class="px-0">
                        <v-list-item-content @click="toggleTodos" class="pa-1">
                            <v-list-item-title>
                                <v-icon color="blue-grey darken-1">
                                    {{isActive ? 'keyboard_arrow_down': 'keyboard_arrow_right'}}
                                </v-icon>
                                <slot>
                                    {{category ? category.name : 'No category'}}
                                </slot>
                            </v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-action class="d-inline-block my-0 pa-0">
                            <v-btn icon @click="addWithCategory">
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
        props:['category','todo-count','category-icon','is-active'],
        data: () => ({
        }),
        computed:{
        },
        methods:{
            toggleTodos(){
                this.$emit('toggle-active', this.category);
            },
            addWithCategory(){
                this.$emit('add-with-category',this.category);
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