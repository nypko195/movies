<template>
  <div class="wrapper">      
    <TheHeader/>    

    <PageMovies/>

    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';
import PageMovies from './components/pages/list-movies/PageMovies.vue';

export default {
  name: 'App',

  components: {
    TheHeader,    
    TheFooter,
    PageMovies,
  },
}
</script>

<style lang="scss">
@import "./styles/bundle.scss";

  .wrapper {
    background-color: $bg-main; 
    margin: 0 auto;
  }  
</style>
