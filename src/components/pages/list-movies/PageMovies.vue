<template>
    <div class="page-movies">
        <Loader v-if="isShowLoader"/>

        <ListMovies v-if="!isShowLoader" :movies="movies.data"/>
    </div>
</template>

<script>
//components
import ListMovies from './ListMovies.vue';
import Loader from '../../ui/Loader.vue';

//function
import { requestMovies }  from '../../../api/index';

export default {
    name: 'PageMovies',
    
    components: {
        ListMovies,
        Loader,
    },

    data() {
        return {
            movies: [],
            isShowLoader: null,
        }
    },

    async created() {
        await this.getMovies();
    },

    methods: {
        async getMovies() {
            this.isShowLoader = true;
            this.movies = await requestMovies();
            this.isShowLoader = false; 
        }
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
        min-height: 70rem;
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
    }
</style>