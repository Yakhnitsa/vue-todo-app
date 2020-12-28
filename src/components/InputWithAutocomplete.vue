<template>
    <v-autocomplete class="white px-2"
                    :menu-props="menuProps"
                    v-model="model"
                    :search-input.sync="search"
                    :items="searchItems"
                    return-object
                    item-text="name"
                    @change="closeMenu()"
                    dense>
        <template #no-data>
            <v-icon @click="addNewRecord()"
                    class="ml-3"
                    dense
                    color="deep-orange darken-4">add_circle_outline</v-icon>
            <span class="font-italic font-weight-light ml-2">{{search}}</span>
        </template>
    </v-autocomplete>
</template>

<script>
    export default {
        name: "InputWithAutocomplete",
        props:['search-items','menu-props','input-model'],
        data: () =>({
            search:'',

        }),
        computed:{
            model:{
                get(){
                    return this.inputMode;
                },
                set(val){
                    this.$emit('change-input',val);
                }
            }
        },
        methods:{
            closeMenu(){
                this.$emit('close-menu');
            },
            addNewRecord(){
                this.$emit('add-new-record',this.search);
            }
        }
    }
</script>

<style scoped>

</style>