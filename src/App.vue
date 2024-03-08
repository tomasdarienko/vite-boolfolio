<script>

import Posts from './components/Posts.vue';
import AppMain from './pages/AppProject.vue';
import Appheader from './components/AppHeader.vue';

export default {
  components: {
    Posts,
    Appheader,
    AppMain
  }
}
</script>

<template>
  <div>
    <Appheader />
    <router-view></router-view>
    <!-- <AppMain /> -->
    <!-- <Posts /> -->
  </div>
</template>

<style lang="scss">

@use './styles/general.scss';

</style>./pages/AppMain.vue
