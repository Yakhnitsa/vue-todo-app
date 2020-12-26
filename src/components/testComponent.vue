<template>
    <div>
        <span>{{testItemsCount}}</span>
        <span>{{testItems}}</span>
        <input type="text" v-model="item"/>
        <button @click="addItem">Add item</button>
    </div>
</template>

<script>
    export default {
        name: "testComponent",
        data:() =>{
            return {
                item:''
            }
        },
        computed:{
            testItems(){
                return this.$store.getters.getTestItems;
            },
            testItemsCount(){
                return this.$store.getters.getTestItems.length;
            }
        },
        methods:{
            addItem(){
                this.$store.commit('addTestItem',this.item);
            }
        }
    }
</script>

<style scoped>

</style>