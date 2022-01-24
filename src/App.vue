<template>
  <div class="wrapper">      
    <TheHeader/>   

    <router-view />

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
