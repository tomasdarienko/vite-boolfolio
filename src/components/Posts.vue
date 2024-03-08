<script>
import { store } from '../store.js';
export default {
     name: 'Posts',
     props: {
          post: Object
     },
     data() {
          return {
               store,
          }
     },
    

}
</script>


<template>
     <div class="card">
          <!-- <img :src="`${store.baseUrl}/storage/${posts.cover_image}`" class="card-img-top"> -->
          <div class="card-body">
               <h4>
                    <!-- {{ post.title }} -->
               </h4>
               <!-- <p>tipologia: {{ post.type.name }}</p> -->
          </div>
     </div>
</template>

<style scoped lang="scss"></style>
