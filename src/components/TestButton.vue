<template>
    <v-hover v-model="hover">
        <v-chip class="mx-2"
                small
                close
                color="teal"
                text-color="white"
                @click:close="deleteItem">
            <slot></slot>
            <transition name="slide-fade">
                <v-btn
                        v-bind="prop.attrs"
                        v-on="prop.on"
                        v-show="hover" icon x-small class="ml-2">
                    <v-icon color="grey lighten-1">create</v-icon>
                </v-btn>
            </transition>

        </v-chip>
    </v-hover>

</template>

<script>
    export default {
        name: "TestButton",
        props:['prop'],
        data: () => ({
            hover: false,
        }),
        methods:{
            deleteItem(){
                this.$emit('delete-item')
            },
            editItem(){
                this.$emit('edit-item')
            }
        }
    }
</script>

<style scoped>

</style>