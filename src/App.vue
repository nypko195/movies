<template>
  <div class="wrapper">
    <div class="bg"></div>     
    <TheHeader/>    

    <ListMovies :movies-list="moviesList"
                :loader="loader"
    />

    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from './components/The/TheHeader.vue';
import ListMovies from './components/ListMovies.vue';
import TheFooter from './components/The/TheFooter.vue';

export default {
  name: 'App',

  components: {
    TheHeader,
    ListMovies,
    TheFooter,
},

  data() {
    return {
      title: 'Movies',
      moviesList: [],
      loadter: null,
    }
  },

  async created() {
      this.loader = true;
      let response = await fetch('https://kinobd.ru/api/films', {
        method: 'GET', 
      });
      let data = await response.json(); 
      this.moviesList = await data.data; 
      this.loader = false; 
  },
}
</script>

<style lang="scss" scoped>
  .wrapper {
    background-color: #111; 
    margin: 0 auto;
  }

  .bg {
    display: block;
    height: 28rem;
    background-image: url('../src/assets/bg/bg.jpg');
    background-repeat: no-repeat;
    background-position: top;
  }
</style>
