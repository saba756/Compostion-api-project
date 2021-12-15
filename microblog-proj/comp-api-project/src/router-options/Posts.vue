<template >
  <div>
    <h2>Posts</h2>
    <router-link to="/posts/new">New Post</router-link>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/posts/${post.id}`">
          {{ post.title }}
        </router-link>
      </li>
    </ul>
    <router-view :posts="posts" @createPost="createPost" />
  </div>
</template>
<script >
import { testPosts } from "../testPost";
export default {
  data() {
    return {
      posts: testPosts,
    };
  },
  methods: {
    createPost(newpost) {
      const id = this.posts.length + 1;
      this.posts.push({
        id,
        title: newpost.title,
        content: newpost.content,
      });
      this.$router.push(`/posts/${id}`)
    },
  },
};
</script>
<style scoped>
</style>