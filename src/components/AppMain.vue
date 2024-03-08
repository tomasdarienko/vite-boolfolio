<script>
import Posts from './Posts.vue';
import { store } from '../store.js';
import axios from 'axios';

export default {
     name: 'AppMain',

     components: {
          Posts,
     },
     data() {
          return {
               store,
               posts: []
          }
     },
     created() {
          this.getPosts();
      
     },
     methods: {
          getPosts() {
               axios.get(`${this.store.baseUrl}/api/posts`).then((response) => {
                    this.posts = response.data.results;
               })
          },
          getImage() {
            let image;
            if (this.posts.cover_image != null) {
                image = `${this.store.baseUrl}/storage/${this.posts.cover_image}`;
            }
            else {
                image = 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg';
            }

            return image;
        }
     }

}
</script>


<template>

     <div class="mt-5">
          <div class="container">
               <div class="row">
                    <div class="col-12">
                         <h1>Boolfolio</h1>
                    </div>
                    <div class="col-12 d-flex flex-wrap">
                         <div class="col-3 p-3 " v-for="post, index in posts" :key="index">

                              <div class="card">
                                   <img :src="getImage()" alt="" class="card-img-top">

                                   <div class="card-body">
                                        <h4>
                                             {{ post.title }}
                                        </h4>
                                        <p></p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </div>

</template>

<style scoped lang="scss"></style>