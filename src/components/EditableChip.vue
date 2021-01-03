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
                            <input-with-autocomplete
                                    :search-items="searchItems"
                                    @close-menu="closeMenu"
                                    @add-new-record="addRecord"
                                    :input-model.sync="model"
                            ></input-with-autocomplete>
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
                            <input-with-autocomplete
                                    :search-items="searchItems"
                                    @close-menu="closeMenu"
                                    @add-new-record="addRecord"
                                    :input-model.sync="model"
                            ></input-with-autocomplete>
                        </slot>
                    </template>
                </v-menu>
                add
            </span>
    </v-hover>
</template>

<script>
    import InputWithAutocomplete from "@/components/InputWithAutocomplete";
    export default {
        name: "EditableChip",
        components: {InputWithAutocomplete},
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
            addRecord(val){
                this.$emit('addNewRecord',val);
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