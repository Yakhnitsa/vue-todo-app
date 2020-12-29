<template>
    <div class="loading" v-bind:style="sceneStyle">
        <slot >
            <v-progress-circular
                    class="text--disabled"
                    indeterminate
                    color="secondary"
            ></v-progress-circular>
        </slot>

    </div>
</template>

<script>
    export default {
        name: "LoadingScreen",
        props:{
            isLoading: Boolean,
            background: {
                type: String,
                default: 'rgba( 205, 205, 205, 0.4)'
            },

        },
        data: () =>({
        }),
        computed:{
            sceneStyle(){
                return {
                    background: this.background,
                }
            }
        }
    }
</script>

<style scoped>
    .loading {
        position: absolute;
        z-index:    1000;
        top:        0;
        left:       0;
        height:     100%;
        width:      100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .slot{
        /*position: absolute;*/
        /*top: 50%;*/
        /*left: 50%;*/
        /*transform: translate(-50%, -50%);*/
    }
</style>