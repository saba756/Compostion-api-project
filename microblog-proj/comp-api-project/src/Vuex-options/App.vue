<template>
  <div>
    <button v-for="post in posts" :key="post.id" @click="click(post)">
      {{ post.title }}
    </button>
    {{ postId }}
    <div v-if="currentPost">
      <h2>{{ currentPost.title }}</h2>
      <h2>{{ currentPost.content }}</h2>
    </div>
  </div>
</template>
<script>

export default {

  created(){
this.$store.dispatch('posts/fetchPosts')
  },
computed:{
posts(){
  return this.$store.state.posts.all
},
currentPost(){
return this.$store.getters['posts/currentPost']
}
  },
  methods:{
    click(post){
      this.$store.commit('posts/setPostId', post.id)
    }
  }
 
};
</script>
<style scoped>
</style>