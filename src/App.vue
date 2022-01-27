<template>
  <div class="wrapper">      
    <TheHeader @search="getAndSetNameMovie($event)"/>   

    <router-view :nameMovie="nameMovie" />

    <TheFooter/>
  </div>
</template>

<script>
  import TheHeader from './components/layout/TheHeader.vue';
  import TheFooter from './components/layout/TheFooter.vue';

  export default {
    name: 'App',

    components: {
      TheHeader,
      TheFooter,
    },

    data() {
      return {
        nameMovie: '',
      }
    },

    methods: {
      getAndSetNameMovie(name) {
        this.nameMovie = name; 
      }
    }
  }
</script>

<style lang="scss">
@import "./styles/bundle.scss";

  .wrapper {
    background-color: $bg-main; 
    margin: 0 auto;
  }
  
  .title {
    font-size: 2.8rem;
  }

  .text {
    font-size: 1.6rem;
  }
</style>
