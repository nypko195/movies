<template>
  <div class="wrapper"> 
    <h1 class="h1">{{ title }}</h1>

    <Card class="card"
          :list="moviesList.data"
    />

  </div>
</template>

<script>
import Card from './components/Card.vue';

export default {
  name: 'App',

  components: {
    Card,
  },

  data() {
    return {
      title: 'Movies by Aleksey',
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
    max-width: 1920px;
    margin: 0 auto
  }
  .h1 {
    text-align: center;
  }

  .button {
    display: block;
    width: 10%;
    height: 35px;
    margin: 0 auto;
    color: #fff;
    background-color: brown;
    border-radius: 15px;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: red;
    }
  }
</style>
