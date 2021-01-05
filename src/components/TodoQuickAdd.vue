<template>
    <v-hover class="mt-1">

        <template v-slot:default="{ hover }">
            <v-card
                    :elevation="hover ? 3 : 1"
                    min-width="500"
                    class="px-5 py-0"
                    outlined
                    tile
            >
<!--                <loading-screen :is-loading="loading"></loading-screen>-->
                <v-card-title class="pa-0">
                    <v-list-item class="px-0">
                        <v-list-item-content class="pa-1">
                            <v-list-item-title>
                                <v-text-field
                                        :loading="loading"
                                        class="pt-0"
                                        loader-height="4"
                                        v-model="todoForm.text"
                                        placeholder="What to do?"
                                        append-icon="add_circle_outline"
                                        @click:append="addTodo"
                                        hide-details
                                        required
                                ></v-text-field>

                            </v-list-item-title>
                        </v-list-item-content>

                        <v-divider
                                vertical
                        ></v-divider>

                        <v-list-item-action class="d-inline-block my-0 pa-0">
                            <v-btn icon @click="openEditMenu">
                                <v-icon>add_task</v-icon>
                            </v-btn>
                        </v-list-item-action>

                    </v-list-item>
                </v-card-title>
            </v-card>
        </template>
    </v-hover>
</template>

<script>
    export default {
        name: "TodoQuickAdd",
        components: {},
        data: ()=>({
            loading:false,
            todoForm: {
                id: null,
                text: '',
                isDone: false,
                person: null,
                location: null,
                childTask: null,
            }
        }),
        methods:{
            addTodo(){
                this.loading = true;
                this.$store.dispatch('saveTodoAction', this.todoForm)
                    .finally(() => {
                        this.loading = false
                        this.clearFrom();
                    });
            },
            openEditMenu(){
                this.$emit('edit-todo',this.todoForm);
            },
            clearFrom(){
                for (const prop of Object.getOwnPropertyNames(this.todoForm)) {
                    if(typeof this.todoForm[prop] === "object"){
                        this.todoForm[prop] = null;
                    }else{
                        this.todoForm[prop] = '';
                    }

                }
            }
        }
    }
</script>

<style scoped>

</style>