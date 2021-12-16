import { createStore} from 'vuex'
import { testPosts } from '../testPost'
const delay =() => new Promise(res => setTimeout(res, 1000))
const posts ={
    namespaced: true,

    state(){
        return{
            postId: null,
            all: []
        }
    },
    mutations:{
        setPostId (state,postId){
                state.postId =postId;
        },
        setPosts(state, post){
        state.all= post;
        }
    },

   
    actions:{
        async fetchPosts(ctx){
            await delay();
            ctx.commit('setPosts',testPosts)
            
        }
    },

    getters:{
      currentPost(state){
            return state.all.find(x =>{
               return x.id === state.postId
            })
        }
    }
}
 export const store = createStore({
 modules:{
     posts
 }

})