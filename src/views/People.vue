<template>
    <v-container class="teal lighten-5" fluid>
        <v-row>
            <todo-board :categories="todoCategories" :is-loading="false"></todo-board>
        </v-row>
    </v-container>
</template>

<script>
    import {mapGetters} from "vuex";
    import {reduceToCategories} from '../plugins/arrayUtils'
    // import TodoBoardCat from "@/components/TodoBoardCat";
    import TodoBoard from "@/components/TodoBoard";

    export default {
        name: "People",
        components: {TodoBoard},
        computed:{
            ...mapGetters({
                allTodos: 'getAllTodos',
                people:'getAllPeople'
            }),
            todoCategories(){
                return reduceToCategories(this.allTodos,'person');
            }
        },
        mounted(){
            // const result = this.$store.dispatch('fetchAllData');
            // result.finally(() => console.log('data fetched'))
        }
    }
</script>

<style scoped>

</style>