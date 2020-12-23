<template>
    <v-btn
            color="indigo"
            dark
            v-bind="prop.attrs"
            v-on="prop.on"
    >
        Menu as Popover
    </v-btn>
</template>

<script>
    export default {
        name: "TestButton",
        props:['prop']
    }
</script>

<style scoped>

</style>