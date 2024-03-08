<script>

export default {
     name: 'Posts',
     data() {
          return {
               posts: []
          }
     }

}
</script>


<template>
     <header>
          <div class="">
               <div class="row d-flex p-4 bg-light">
                    <div class="col-3">
                         <h4>Boolfolio</h4>
                    </div>
                    <div class="col-7">
                         <div class="">
                              <ul class="list-unstyled d-flex align-items-center justify-content-evenly">
                                   <li>
                                        <a href="#">Home</a>
                                   </li>
                                   <li>
                                        <a href="#">project</a>
                                   </li>
                                   <li>
                                        <a href="#">contacts</a>
                                   </li>
                              </ul>

                         </div>
                    </div>
               </div>
          </div>
     </header>
</template>

<style scoped lang="scss">

a{
  text-decoration: none;
  color: rgb(152, 0, 187);
  &:hover{
     color: rgb(0, 131, 131);
  }
}

</style> 