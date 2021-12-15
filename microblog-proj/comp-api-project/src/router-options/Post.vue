<template >
    <div>
    <h4>{{post.title}}</h4>
     <h3>{{post.content}}</h3>
    </div>
</template>
<script >
 
export default {
    props:{
    posts:{
        type:Array,
        default:[]
    }
    },
   computed:{
post(){
    return this.posts.find(x=> x.id === parseInt(this.$route.params.id, 10))
}
   }
}
</script>
<style scoped>

</style>