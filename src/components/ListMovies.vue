<template>
    <div class="list-movies">
        <h2 class="list-movies__title">{{ title }}</h2>
        <div class="list-movies__row">
            <Card class="list-movies__card" :list="moviesList"/>
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
            type: Object,
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
        /*  */

        &__title {
            color: #fff;
            text-align: center;
        }

        &__row {
            display: flex;
            margin: 0 20px;
            padding: 10px;
            flex: 0 0 10%;
            overflow-y: auto;
            background-color: rgb(93, 122, 204);

        }
    }
</style>