<template>
    <div class="list-movies">
        <div class="list-movies__row">
            <Card :movies-list="moviesList"/>
        </div>
    </div>
</template>

<script>
import Card from './Card.vue';

export default {
    name: 'ListMovies',
    
    components: {
        Card,
    },

    props: {
        moviesList: {
            type: Array,
        }
    },

    data(){
        return {
            title: 'Cписок фильмов'
        }
    }
}
</script>

<style lang="scss">
    .list-movies{
        max-width: 110rem;
        height: 70rem;
        margin: 0 auto;
        margin-top: 10px;
        margin-bottom: 10px;
        padding-top: 20px;
        background-color: #f1eeee;
        border-radius: 5px;

        &__row {
            position: relative;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }
    }
</style>