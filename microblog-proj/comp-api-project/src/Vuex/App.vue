<template>
  <div>
    <button v-for="post in posts" :key="post.id" @click="click(post)">
      {{ post.title }}
    </button>
    {{ postId }}
    <div v-if="currentPost">
      <h2>{{currentPost.title}}</h2>
       <h2>{{currentPost.content}}</h2>
        </div>
  </div>
</template>
<script>
import { computed , onMounted} from "vue";

import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    // const posts = [
    //   {
    //     id: 1,
    //     title: "Post 1",
    //   },
    //   {
    //     id: 2,
    //     title: "Post 2",
    //   },
    // ];

    const click = (post) => {
      store.commit("posts/setPostId", post.id);
    };

    const fetchData =() =>{
        store.dispatch('posts/fetchPosts')
    }
     

    onMounted(()=>{
        fetchData();
    })

    return {
      postId: computed(() => store.state.postId),
      posts: computed(()=> store.state.posts.all),
      currentPost: computed(()=> store.getters['posts/currentPost']),
      click,
      
    };
  },
};
</script>
<style scoped>
</style>