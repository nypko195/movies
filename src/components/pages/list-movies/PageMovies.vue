<template>
    <div class="page-movies">
        <Loader v-if="loader"/>

        <ListMovies v-if="!loader" :movies-list="moviesList"/>
    </div>
</template>

<script>
import ListMovies from './ListMovies.vue';
import Loader from '../../ui/Loader.vue';

export default {
    name: 'PageMovies',
    
    components: {
        ListMovies,
        Loader,
    },

    props: {
        moviesList: {
            type: Array,
        },

        loader: Boolean,
    },
}
</script>

<style lang="scss">
@import "../../../styles/bundle.scss";

    .page-movies{
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
        background-color: $bg-block;
        border-radius: 5px;   
    }
</style>