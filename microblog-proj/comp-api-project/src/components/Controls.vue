<template>
  <div>
    <button @click="handleLike">❤️ {{ post.likes }}</button>
    <Hashtag
      v-for="hashtag in post.hashtags"
      :key="hashtag.id"
      :hashtag="hashtag"
    >
    </Hashtag>
  </div>
</template>

<script>
import Hashtag from "./Hashtag.vue";
import { store } from "../store";
export default {
  components: {
    Hashtag,
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const handleLike = () => {
      store.likePost(props.post);
    };
    return {
      handleLike,
      
    };
  },
};
</script>

<style scoped></style>
