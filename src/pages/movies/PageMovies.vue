<template>
    <div class="page-movies">
        <ListMovies/>
    </div>
</template>

<script>
    //components
    import ListMovies from '../../components/movies/ListMovies.vue';

    export default {
        name: 'PageMovies',

        components: {
            ListMovies,
        },
    }
</script>

<style lang="scss">
    .page-movies{
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: center;
        max-width: 110rem;
        min-height: 61rem;
        height: auto;
        margin: 0 auto;
        margin-top: 10px;
        margin-bottom: 10px;
        padding-top: 20px;
        background-color: $bg-block;
        border-radius: 5px;   

        @include respond-to(lg) {
            max-width: 100%;
            margin: 10px 10rem;
        }

        @include respond-to(md) {
            overflow-x: auto;
            margin: 10px 2rem;
            min-height: 35rem;
        }

        @include respond-to(sm) {
            min-height: 30rem;
        }
    }
</style>