<template>
  <div class="wrapper">
    <div class="bg"></div>     
    <TheHeader/>    

    <PageMovies 
      :movies-list="moviesList"
      :loader="loader"
    />

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

  data() {
    return {
      moviesList: [],
      loader: null,
    }
  },

  async created() {
      this.loader = true;
      let response = await fetch('https://kinobd.ru/api/films');
      let data = await response.json(); 
      this.moviesList = await data.data; 
      this.loader = false; 
  },
}
</script>

<style lang="scss">
@import "./styles/bundle.scss";

  .wrapper {
    background-color: $bg-main; 
    margin: 0 auto;
  }

  .bg {
    display: block;
    height: 28rem;
    background-image: url('./assets/bg-main/bg.jpg');
    background-repeat: no-repeat;
    background-position: top;
  }
</style>
