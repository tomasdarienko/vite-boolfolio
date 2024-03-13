<script>

import axios from 'axios';

import { store } from '../store.js';
export default {
     name: 'Posts',

     data() {
          return {
               store,
               post: null
          }
     },
     created() {
          this.getPostData();
     },
     methods: {
          getPostData(){
               axios.get(`${this.store.baseUrl}/api/posts/${this.$route.params.slug}`).then((response) => {
                    console.log(this.$route)
                    this.post = response.data.post
               });
          }
     }


}
</script>


<template>
     <!-- <img :src="`${store.baseUrl}/storage/${posts.cover_image}`" class="card-img-top"> -->
     {{ console.log(getPostData()) }}
     {{ console.log(post) }}
     <!-- <div class="container">
          <div class="row d-flex flex-wrap">

               <div class="col-12 p-5">
                    <h1 class="">{{ post.title }}</h1>
                    <h5>{{ post.owner }}</h5>
               </div>
               <div class="col-10">
                    {{ post.description }}
               </div>
               <div class="card col-2 justify-self-end  p-3">
                    <p>
                    <h4>tipologia:</h4> {{ post.type.name }}
                    </p>
               </div>
               <div class="col-10">
                    <img :href="post.cover_image" width="300"> 
               </div>

               <div class="card col-2 justify-self-end my-3 p-3 d-flex justify-content-center">
                    <h3 class="d-flex justify-content-center">Teconologia/e:</h3>
                    <p class="d-flex justify-content-center" v-for="tech in post.technologies">
                         {{ tech.name }}
                    </p>
               </div>
          </div>
     </div>
     {{ console.log(post) }} -->
</template>

<style scoped lang="scss"></style>
