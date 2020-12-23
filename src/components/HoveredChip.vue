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
                <transition name="slide-fade">
                    <v-btn @click="editItem"
                        v-show="hover" icon x-small class="ml-2">
                        <v-icon color="grey lighten-1">create</v-icon>
                    </v-btn>
                </transition>

            </v-chip>
    </v-hover>
</template>

<script>
    export default {
        name: "HoveredChip",
        props:['activator-props'],
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