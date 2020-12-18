<template>
    <v-card
            class="mx-auto"
            width="500"
            height="100%"
    >
        <v-list>
             <v-list-item v-for="n in 5" :key="n">
                <todo-item></todo-item>
            </v-list-item>
        </v-list>

    </v-card>

</template>

<script>
    import TodoItem from "@/components/TodoItem";
    export default {
        name: "TodoBoard",
        components: {TodoItem}
    }
</script>

<style scoped>

</style>