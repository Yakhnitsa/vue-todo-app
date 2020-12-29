<template>
    <v-skeleton-loader
            v-bind="attrs"
            type="list-item-avatar-two-line"
    ></v-skeleton-loader>
</template>

<script>
    export default {
        name: "TodoLoadSkeleton",
        data: () => ({
            attrs: {
                class: 'mb-6',
                boilerplate: true,
                elevation: 2,
            },
        }),
    }
</script>

<style scoped>

</style>