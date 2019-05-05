<template>
    <div class="Header">
        <router-link :to="{name:'root'}">
            <img src="..\assets\cnodejs_light.svg">
        </router-link>
        <span><a href="#">关于</a></span>
    </div>
</template>

<script>
export default {
    name:'Header',
    data(){
        return{

        }
    }
}
</script>

<style scoped lang="scss">
.Header {
    height: 50px;
    background-color:#5a5555 ;
    img{
        max-width: 120px;
        margin-top: 10px;
        margin-left: 50px;
    }
    span{
        float: right;
        line-height: 50px;
        margin-right: 50px;
        a{
            text-decoration: none;
            color: #cbc9c9; 
        }
    }
}
</style>

