<template>
    <div class="page-movies">
        <!-- <Loader v-if="isShowLoader"/> -->

        <ListMovies/>
    </div>
</template>

<script>
//components
import ListMovies from '../../components/movies/ListMovies.vue';
// import Loader from '../../components/ui/Loader.vue';

//function
// import { requestMovies }  from '../../api/index.js';

export default {
    name: 'PageMovies',
    
    components: {
        ListMovies,
    },

    data() {
        return {
            movies: [],
            isShowLoader: null,
        }
    },

    // async created() {
    //     await this.getMovies();
    // },

    // methods: {
    //     async getMovies() {
    //         this.isShowLoader = true;
    //         this.movies = await requestMovies();
    //         this.isShowLoader = false; 
    //     }
    // },
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
    }
</style>