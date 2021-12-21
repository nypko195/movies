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
//components
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';
import PageMovies from './components/pages/list-movies/PageMovies.vue';

//funtion
import requestApi from './request/requestApi';

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

  created() {
    this.getListMoviesFromApi();
  },

  methods: {
    async getListMoviesFromApi() {
      this.loader = true;
      this.moviesList = await requestApi();
      this.loader = false; 
    }
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
