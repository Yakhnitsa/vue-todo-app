<template>
    <v-container fluid>
        <v-row>
            <todo-board v-if="singleCategory.length > 0" :categories="singleCategory" :is-loading="false"></todo-board>
            <todo-board v-else :categories="allCategories" :is-loading="false"></todo-board>
        </v-row>
    </v-container>
</template>

<script>
    import TodoBoard from "@/components/TodoBoard";
    import {mapGetters} from "vuex";
    import {reduceToCategories} from "@/plugins/arrayUtils";

    export default {
        name: "Locations",
        components: {TodoBoard},
        computed:{
            ...mapGetters({
                allTodos: 'getAllTodos',
                people:'getAllPeople',
                locations: 'getAllLocations'
            }),
            allCategories(){

                return reduceToCategories(this.allTodos,'location');
            },
            singleCategory(){
                const id = this.$route.params.id;
                return this.allCategories
                    .filter(cat => {
                        return cat.title ? cat.title.id == id : false;
                    });
            },
        },
        mounted(){
            console.log(this.$route.path)
        }
    }
</script>

<style scoped>

</style>