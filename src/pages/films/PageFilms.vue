<template>
    <div class="page-films">
            <router-view
                v-slot="{Component}"
                :is-show-loader="isShowLoader"
                :films="films"
                :search-name-film="filmNameFromSearch"
                :is-films-not-found="isFilmsNotFound"
                @get-films="getMoreFilms"
            >
                <transition name="fade" mode="out-in">
                    <div :key="$route.name" class="page-films__wrapper">
                        <component :is="Component" />
                    </div>                    
                </transition>
            </router-view>
    </div>
</template>

<script>
// function
import { getFilms, getFilmsByPage, getFoundFilmsList }  from '../../api/index.js';

export default {
    name: 'PageFilms',

    props: {
        filmNameFromSearch: {
            type: String,
            default: ''
        },
    },

    data() {
        return {
            films: [],
            requestPageNumber: 2,
            isShowLoader: false,
            isFilmsNotFound: false,
        };
    },

    watch: {
        async filmNameFromSearch() {
            if (!this.filmNameFromSearch) return;

            await this.getFoundFilmsList();
        },
    },

    async mounted() {
        await this.getFilms();
        this.checkParamsUrl();
    },

    methods: {
        async getFilms(isNeedFilms) {
            this.isShowLoader = true;

            if (isNeedFilms) {
                let newFilms = await getFilmsByPage(this.requestPageNumber);

                this.films = [...this.films, ...newFilms]; 
                this.requestPageNumber++;

                this.isShowLoader = false;
                return;
            }

            this.films = await getFilms();

            this.isFilmsNotFound = false;
            this.isShowLoader = false;
        },

        async getMoreFilms() {
            await this.getFilms(true);
        },

        async getFoundFilmsList() {
            if (!this.filmNameFromSearch) return;
            this.isShowLoader = true;

            if (this.isFilmsNotFound) {
                this.isFilmsNotFound = false;
            }

            this.films = await getFoundFilmsList(this.normalizeNameFilm(this.filmNameFromSearch));

            if (!this.films.length) {
                this.isFilmsNotFound = true;
            }

            this.isShowLoader = false;
        },

        checkParamsUrl() {
            if (!this.films.length) return;

            let pageNumber = this.$route.query?.page;
            let urlParams = [];

            if (pageNumber) {
                urlParams = pageNumber.split('/');
            }

            if (!urlParams.length) return;

            this.openPage(urlParams, pageNumber);
        },

        getFilmById(id) {
            return this.films.filter(film => {
                return film.id === Number(id);
            });
        },

        openPage(urlParams, pageNumber) {
            const DISPLAYED_CARDS_COUNT = 10;
            let film = [];

            if (urlParams.length >= 2); {
                film = this.getFilmById(urlParams[1]);
            }

            if (film[0]?.id && urlParams.length === 2) {
                this.$router.push({ 
                    name: 'сardFilm', 
                    params: { 
                        page: urlParams[0], 
                        id: film[0].id, 
                        film: JSON.stringify(film[0]) 
                    }
                });
            } else if ((this.films.length / DISPLAYED_CARDS_COUNT) >= Number(pageNumber)) {
                this.$router.push({ name: 'listFilms' });
            } else {
                this.$router.push({ name: 'notFound'});
            }
        },

        normalizeNameFilm(name) {
            return name.toLowerCase().trim();
        },
    }
}
</script>

<style lang="scss">
.page-films{
    display: flex;
    position: relative;
    max-width: 110rem;
    min-height: 61rem;
    height: 100%;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-top: 20px;
    background-color: $bg-block;
    border-radius: 5px;

    @include respond-to(lg) {
        max-width: 100%;
        margin: 10px 10rem;
        height: auto;
    }

    @include respond-to(md) {
        margin: 10px 2rem;
        min-height: calc(100vh - 15rem);
    }

    &__wrapper {
        display: flex;    
        width: 100%;    
        flex-direction: column;
        align-items: center;        
    }
}
</style>