<script>

import Posts from './components/Posts.vue';
import AppMain from './components/AppMain.vue';
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
    <AppMain />
    <Posts />
  </div>
</template>

<style lang="scss">

@use './styles/general.scss';

</style>
