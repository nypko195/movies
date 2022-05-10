<template>
    <div class="page-movies">
        <router-view
            :is-show-loader="isShowLoader"
            :movies="movies"
            :nameMovie="nameMovie" 
            @need-films="needFilms"
        />
    </div>
</template>

<script>
// function
import { getMovies }  from '../../api/index.js';
import { api } from '../../api/constants.js';

export default {
    name: 'PageMovies',

    props: {
        nameMovie: {
            type: String,
        }
    },

    data() {
        return {
            movies: [],
            requestedPageNumber: 2,
            isShowLoader: false,
        };
    },

    async mounted() {
        await this.getMovies();
    },

    methods: {
        async getMovies(isNeedFilms) {
            this.isShowLoader = true;

            if (isNeedFilms) {
                let resp = await fetch(`${api.urlMoviesPageApi}${this.requestedPageNumber}`);
                let newMovies = await resp.json();

                this.movies = [...this.movies, ...newMovies.data]; 
                this.requestedPageNumber++;

                this.isShowLoader = false;
                return;
            }

            let movies = await getMovies();
            this.movies = movies.data;

            this.isShowLoader = false;
        },

        async needFilms() {
            await this.getMovies(true);
        },
    }
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
        margin: 10px 2rem;
        min-height: 35rem;
    }

    @include respond-to(sm) {
        min-height: 30rem;
    }
}
</style>