<template>
    <div class="list-movies">
        <Loader v-if="loader"/>

        <Card v-else :movies-list="moviesList"/>
    </div>
</template>

<script>
import Card from './Card.vue';
import Loader from './ui/Loader.vue';

export default {
    name: 'ListMovies',
    
    components: {
        Card,
        Loader,
    },

    props: {
        moviesList: {
            type: Array,
        },
        loader: Boolean,
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
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: center;
        max-width: 110rem;
        min-height: 70rem;
        height: auto;
        margin: 0 auto;
        margin-top: 10px;
        margin-bottom: 10px;
        padding-top: 20px;
        background-color: #f1eeee;
        border-radius: 5px;   
    }
</style>