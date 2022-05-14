<template>
    <div class="p-films">
        <router-view
            :is-show-loader="isShowLoader"
            :films="films"
            :search-name-film="searchNameFilm"
            @get-films="getMoreFilms"
        />
    </div>
</template>

<script>
// function
import { getFilms }  from '../../api/index.js';
import { api } from '../../api/constants.js';

export default {
    name: 'PageFilms',

    props: {
        searchNameFilm: {
            type: String,
        }
    },

    data() {
        return {
            films: [],
            currentPage: 2,
            isShowLoader: false,
        };
    },

    async mounted() {
        await this.getFilms();
    },

    methods: {
        async getFilms(isNeedFilms) {
            this.isShowLoader = true;

            if (isNeedFilms) {
                let resp = await fetch(`${api.urlFilmsPageApi}${this.currentPage}`);
                const { data } = await resp.json();

                this.films = [...this.films, ...data]; 
                this.currentPage++;

                this.isShowLoader = false;
                return;
            }

            this.films = await getFilms();

            this.isShowLoader = false;
        },

        async getMoreFilms() {
            await this.getFilms(true);
        },
    }
}
</script>

<style lang="scss">
.p-films{
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