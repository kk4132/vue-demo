<template>
    <div class="userInfoWarp">
        <div v-if="loading">loading...</div>
        <div class="userInfo" v-else></div>  
    </div>
</template>

<script>
export default {
    name:'userInfo',
    data(){
        return{
            loading:false
        }
    },
    beforeMount(){
        this.loading = true;
        this.getUserInfo();
    },
    methods:{
        getUserInfo(){
            
        }
    }
}
</script>

<style lang="scss" scoped>

</style>


