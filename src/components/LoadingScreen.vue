<template>
    <div class="loading" v-bind:style="sceneStyle">
        <div class="slot pa-auto">
            <slot >
                <v-progress-circular
                        indeterminate
                        color="secondary"
                ></v-progress-circular>
            </slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: "LoadingScreen",
        props:{
            isLoading: Boolean,
            color: {
                type: String,
                default: 'rgb( 205, 205, 205)'
            },
            opacity: {
                type: Number,
                default: .3,
            }

        },
        data: () =>({
            // sceneStyle :{
            //     // background: this.color,
            //
            // }
        }),
        computed:{
            sceneStyle(){
                return {
                    background: this.color,
                    opacity: this.opacity,
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
        /*display: flex;*/
        /*justify-content: center;*/
        /*background: rgba( 205, 205, 205, 0.5 );*/
    }
    .slot{
        opacity: .9;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>