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
import { getFilms, getFilmsByPage }  from '../../api/index.js';

export default {
    name: 'PageFilms',

    props: {
        searchNameFilm: {
            type: String,
            default: ''
        },
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
        await this.checkingUrl();
    },

    methods: {
        async getFilms(isNeedFilms) {
            this.isShowLoader = true;

            if (isNeedFilms) {              
                this.films = [...this.films, ...await getFilmsByPage(this.currentPage)]; 
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

        checkingUrl() {
            if (!this.films.length) return;

            let DISPLAYED_CARDS_COUNT = 10;
            let pageNumber = this.$route.query?.page;

            let numberOfQueryParams = pageNumber.split('/');
            let film = this.films.filter(film => {
                return film.id === Number(numberOfQueryParams[1]);
            });

            if (!!film[0] && numberOfQueryParams.length === 2) {
                this.$router.push({ name: 'сardFilm', params: { page: numberOfQueryParams[0], id: film[0]?.id, film: JSON.stringify(film[0]) }});
            } else if ((this.films.length / DISPLAYED_CARDS_COUNT) >= Number(pageNumber)) {
                this.$router.push({ name: 'listFilms' });
            } else {
                this.$router.push({ name: 'notFound'});
            }
        }
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
        min-height: 40rem;
    }

    @include respond-to(sm) {
        max-height: 100%;
    }
}
</style>