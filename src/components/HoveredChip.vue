<template>
    <v-hover v-model="hover">
            <v-chip v-if="hasData" class="mx-2"
                    small
                    close
                    color="teal"
                    text-color="white"
                    @click:close="deleteItem">
                <slot>
                    <span v-if="hasData">{{inputItem.name}}</span>
                </slot>
                <v-menu v-model="showMenu" offset-y bottom :close-on-content-click="false">
                    <template v-slot:activator="{ on, attrs }">
                        <transition name="slide-fade">
                            <v-btn
                                    @click="openMenu()"
                                    v-bind="attrs"
                                    v-show="hover" icon x-small class="ml-2">
                                <v-icon color="grey lighten-1">create</v-icon>
                            </v-btn>
                        </transition>
                    </template>
                    <template v-slot:default>
                        <slot name="edit-menu">
                            <v-autocomplete class="white px-2"
                                            :menu-props="{
                                                maxHeight: 150,
                                                offsetY: true,
                                                offsetOverflow: true,}"
                                            v-model="model"
                                            :search-input.sync="search"
                                            :items="searchItems"
                                            return-object
                                            item-text="name"
                                            @change="closeMenu()"
                                            dense>
                                <template #no-data>
                                    <v-icon @click="addRecord()"
                                            class="ml-3"
                                            dense
                                            color="deep-orange darken-4">add_circle_outline</v-icon>
                                    <span class="font-italic font-weight-light ml-2">{{search}}</span>
                                </template>
                            </v-autocomplete>
                        </slot>
                    </template>
                </v-menu>

            </v-chip>
            <span v-else>
                <v-menu v-model="showMenu" offset-y bottom :close-on-content-click="false">
                    <template v-slot:activator="{ on, attrs }">
                        <transition name="slide-fade">
                            <v-btn
                                    @click="openMenu()"
                                    v-bind="attrs"
                                    icon x-small class="ml-2">
                                <v-icon color="deep-orange darken-4">add_circle_outline</v-icon>
                            </v-btn>
                        </transition>
                    </template>
                    <template v-slot:default>
                        <slot name="edit-menu">
                            <v-autocomplete class="white px-2"
                                            v-model="model"
                                            :search-input.sync="search"
                                            :items="searchItems"
                                            return-object
                                            item-text="name"
                                            allow-overflow
                                            @change="closeMenu()"
                                            dense>
                                <template #no-data>
                                    <v-icon @click="addRecord()"
                                            class="ml-3"
                                            dense
                                            color="deep-orange darken-4">add_circle_outline</v-icon>
                                    <span class="font-italic font-weight-light ml-2">{{search}}</span>
                                </template>
                            </v-autocomplete>
                        </slot>
                    </template>
                </v-menu>
                add</span>
    </v-hover>
</template>

<script>
    export default {
        name: "HoveredChip",
        props:['searchItems','input-item'],
        data: () => ({
            hover: false,
            showMenu: false,
            search:''
        }),
        computed:{
            model:{
                get(){
                    return this.inputItem;
                },
                set(val){
                  this.$emit('update:inputItem',val);
                }
            },
            hasData(){
                return this.inputItem;
            }
        },
        methods:{
            deleteItem(){
                this.$emit('delete-item')
            },
            openMenu(){
                this.showMenu = true;
            },
            closeMenu(){
                this.showMenu = false;
            },
            addRecord(){
                this.$emit('addNewRecord',this.search);
                this.closeMenu();
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