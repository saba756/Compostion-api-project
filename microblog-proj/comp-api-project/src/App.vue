<template>
<div>
  <input :value="currentTag"
  @input="setHashtag"
   />
 <Card v-for="post in filteredPost" :key="post.id">

    <template v-slot:title>
        {{post.title}}
      </template>

      <template v-slot:content>
        {{post.content}}
      </template>

      <template v-slot:description>
       <Controls :post="post"
       />
      </template>
 </Card>

</div>
</template>

<script>
import { computed} from 'vue'
import {store} from './store';
import Card from "./components/Card.vue"
import Controls from "./components/Controls.vue"
export default {
  components:{
    Card,
    Controls
  },
 setup(){
const setHashtag = ($event)=>{
store.setHashtag($event.target.value)
}

   return{
     setHashtag,
     filteredPost :  computed(()=>store.filterdPosts),
     currentTag: computed(()=>store.state.currentTag)
   }
 }

}
</script>

<style>

</style>
