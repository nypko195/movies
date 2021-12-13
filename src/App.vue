<template>
  <div class="wrapper">      
    <TheHeader/>

    <ListMovies class="list"
                :movies-list="moviesList"
    />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import ListMovies from './components/ListMovies.vue';

export default {
  name: 'App',

  components: {
    TheHeader,
    ListMovies,
},

  data() {
    return {
      title: 'Movies',
      moviesList: []
    }
  },

  async mounted() {
      let response = await fetch('https://kinobd.ru/api/films', {
        method: 'GET', 
      });
      this.moviesList = await response.json();   
  },

  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    max-width: 1440px;
    margin: 50px 0;
    background-color: #000;
    opacity: .65;
    margin: 0 auto
  }

  .list {
    margin-top: 25px;
  }
</style>
