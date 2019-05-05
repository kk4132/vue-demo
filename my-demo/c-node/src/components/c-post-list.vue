<template>  
    <div class="post-list">
        <div v-if="loading">loading...</div>
        <div class="posts" v-else>
            <ul>
                <li v-for="(post,index) of posts" :key="index">
                    <router-link 
                        :to="{name:'user_info',
                              params:{name:post.author.loginname}}"
                        :title="post.author.loginname"
                    >
                        <img :src="post.author.avatar_url">
                    </router-link>
                    <span class="visit">{{post.reply_count}}/{{post.visit_count}}</span>
                    <router-link 
                        :to="{name:'user_content',
                        params:{
                            id: post.id,
                            name:post.author.loginname
                        }}"
                        :title="post.title"
                    >{{post.title}}
                    </router-link>
                    <span class="last_replay">{{getGapTime(post.last_reply_at)}}前</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'post-list',
    data(){
        return {
            posts:[],
            loading:false
        }
    },
    beforeMount(){
       this.loading = true;
       this.getData(); 
    },
    methods:{
        getData(){
            this.$http({
                url:'https://cnodejs.org/api/v1/topics',
                method:'get',
                params:{
                    page:1,
                    limit:20
                }
            }).then((resopnse)=>{
                    if(resopnse.data.success){
                        this.posts =  resopnse.data.data;
                        this.loading = false;
                    }
                }).catch((error)=>{
                    console.log(error)
                })
        },
        getGapTime(time){
            console.log(time);
            console.log(new Date(time));
            let now = new Date(),
                lastTime = new Date(time);
            let result;
            if(now.getFullYear() > lastTime.getFullYear()){
                result = now.getFullYear() - lastTime.getFullYear() + '年'
            }else if(now.getMonth() > lastTime.getMonth()){
                result = now.getMonth() - lastTime.getMonth() + '月'
            }else if(now.getDate() > lastTime.getDate()){
                let days = now.getDate() - lastTime.getDate();
                result = Math.floor(days / 7) > 0?Math.floor(days / 7)+'周':days+'天'
            }else if(now.getHours() > lastTime.getHours()){
                result = now.getHours() - lastTime.getHours() + '小时'
            }else if(now.getMinutes() > lastTime.getMinutes()){
                result = now.getMinutes() - lastTime.getMinutes() + '分钟'
            }else{
                result = now.getSeconds() - lastTime.getSeconds() + '秒'
            }
            return result;
        }
    },
    mounted(){
        // this.getData();
    }
}
</script>

<style scoped lang="scss">
.post-list{
    .posts{
        background-color: #fff;
        padding: 0.5rem;
		margin: 0.5rem 3rem;
        ul{
            li{
                margin-bottom: 14px;
                border-bottom: 1px solid  #E7E7E7;
                line-height: 30px;
                img{
                    width:1.5rem;
                    height: 1.5rem;
                }
                span{
                    display: inline-block;
                    text-align: center;
                    font-size: 12px;
                    margin: 0 10px;
                }
                a{
                        text-decoration: none;
                        color: inherit;
                        -o-text-overflow: ellipsis;
                        white-space: nowrap;
                        display: inline-block;
                        vertical-align: middle;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        max-width: 70%;
                    }
                h5{
                    display: inline-block;
                    margin: 0;
                    padding: 0;
                }
                .last_replay{
                    float: right
                }
                .visit{
                    
                    text-align: center;
                    width: 100px;
                }
            }
        }
    }
}
</style>


