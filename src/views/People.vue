<template>
    <v-container fluid>
        people
        <v-row>{{allTodos.length}}</v-row>
        <v-row>{{people.length}}</v-row>
        <v-row>
            <v-list>
                <v-list-item v-for="(cat,index) in todoCategories" :key="index">
                    {{cat.category ? cat.category.name : 'No category'}} : {{cat.items.length}}
                </v-list-item>
            </v-list>
        </v-row>
    </v-container>
</template>

<script>
    import {mapGetters} from "vuex";
    import {reduceToCategories} from '../plugins/arrayUtils'

    export default {
        name: "People",
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
            const result = this.$store.dispatch('fetchAllData');
            result.finally(() => console.log('data fetched'))
        }
    }
</script>

<style scoped>

</style>