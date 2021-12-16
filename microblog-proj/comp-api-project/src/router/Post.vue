<template >
    <div>
    <h4>{{post.title}}</h4>
     <h3>{{post.content}}</h3>
    </div>
</template>
<script >
import {computed} from 'vue'
import  { usePosts } from './usePost.js'
import {useRoute} from 'vue-router'
export default {
   setup(){
       const postStore=usePosts()
       const route = useRoute();
       const post =computed(()=>
        postStore.posts.value.find(x=> x.id === parseInt(route.params.id, 10)))
       return{
           
           post
       }
   }
}
</script>
<style scoped>

</style>