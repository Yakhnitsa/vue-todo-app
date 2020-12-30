<template>
    <v-container fluid>
        people
    </v-container>
</template>

<script>
    import {mapGetters} from "vuex";
    import {reduceToCategories} from '../plugins/arrayUtils'

    export default {
        name: "People",
        computed:{
            ...mapGetters({
                allTodos: 'getAllTodos'
            }),
            todoCategories(){
                return reduceToCategories(this.allTodos,'people');
            }
        }
    }
</script>

<style scoped>

</style>