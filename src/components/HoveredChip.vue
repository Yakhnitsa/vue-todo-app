<template>
<!--    <v-chip class="mx-2"-->
<!--            small-->
<!--            close-->
<!--            color="teal"-->
<!--            text-color="white"-->
<!--            @click:close="deleteItem"-->
<!--    >-->
<!--        <v-hover v-model="hover">-->
<!--            <slot></slot>-->
<!--        </v-hover>-->

<!--        <v-btn :value="hover" icon x-small class="ml-2">-->
<!--            <v-icon color="grey lighten-1">create</v-icon>-->
<!--        </v-btn>-->
<!--    </v-chip>-->
    <v-hover v-model="hover">
            <v-chip class="mx-2"
                    small
                    close
                    color="teal"
                    text-color="white"
                    @click:close="deleteItem">
                <slot></slot>
                <v-menu offset-y bottom :close-on-content-click="false">
                    <template v-slot:activator="{ on, attrs }">
                        <transition name="slide-fade">
                            <v-btn
                                    v-bind="attrs"
                                    v-on="on"
                                    v-show="hover" icon x-small class="ml-2">
                                <v-icon color="grey lighten-1">create</v-icon>
                            </v-btn>
                        </transition>
                    </template>
                    <template v-slot:default>
                        <slot name="edit-menu"></slot>
                    </template>
                </v-menu>

            </v-chip>
    </v-hover>
</template>

<script>
    export default {
        name: "HoveredChip",
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
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .3s ease;
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active до версии 2.1.8 */ {
        transform: translateX(-10px);
        opacity: 0;
    }

</style>